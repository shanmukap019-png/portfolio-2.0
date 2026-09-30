/* ============================================================
   Shanmuka Priya Katta — Dynamic Portfolio Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize UI components
  initNavbar();
  initTypingEffect();
  initParticles(prefersReducedMotion);
  renderCurrentlyBuilding();
  renderSkills('all');
  renderProjects('all');
  renderAchievements();
  renderCertifications();
  renderTimeline();
  initGitHubIntegration();
  initScrollReveal();
  initCounters();
  initContactForm();
  initResumeModal();
  initAntiCopyMeasures();
});

/* ---------- Navbar Logic ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const link = navLinks ? navLinks.querySelector(`a[href="#${sec.id}"]`) : null;
      if (link) {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }, { passive: true });
}

/* ---------- Typing Effect ---------- */
function initTypingEffect() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const phrases = [
    'AI & ML Engineer',
    'GenAI & LLM Builder',
    'Full-Stack Developer',
    'IIT Bombay Campus Ambassador',
    'Prompt Engineer'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }

    if (isDeleting && charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
      setTimeout(type, 400);
      return;
    }

    setTimeout(type, isDeleting ? 45 : 85);
  }

  type();
}

/* ---------- Interactive Particle Background ---------- */
function initParticles(reducedMotion) {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.5 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
      ctx.fill();
    }
  }

  const count = Math.min(Math.floor(window.innerWidth / 14), 95);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connecting lines between close particles
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ---------- Currently Building Tracker ---------- */
function renderCurrentlyBuilding() {
  const container = document.getElementById('building-container');
  if (!container || !PORTFOLIO_DATA.currentlyBuilding) return;

  container.innerHTML = PORTFOLIO_DATA.currentlyBuilding.map(item => `
    <div class="glass-card building-card reveal">
      <div class="building-header">
        <h4 class="building-title">${item.title}</h4>
        <span class="status-pill"><i class="fas fa-circle-notch fa-spin"></i> ${item.status}</span>
      </div>
      <p class="building-desc">${item.description}</p>
      <div class="project-tech-stack" style="margin-bottom: 16px;">
        ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${item.progress}%"></div>
      </div>
    </div>
  `).join('');
}

/* ---------- Render Skills with Filtering ---------- */
function renderSkills(filterCategory = 'all') {
  const container = document.getElementById('skills-container');
  const filterTabsContainer = document.getElementById('skills-filter');
  if (!container || !PORTFOLIO_DATA.skillsCategories) return;

  // Render Filter Tabs once
  if (filterTabsContainer && filterTabsContainer.children.length === 0) {
    const tabsHtml = `
      <button class="filter-tab active" data-filter="all">All Skills</button>
      ${PORTFOLIO_DATA.skillsCategories.map(cat => `
        <button class="filter-tab" data-filter="${cat.id}">${cat.category}</button>
      `).join('')}
    `;
    filterTabsContainer.innerHTML = tabsHtml;

    filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        renderSkills(e.target.dataset.filter);
      });
    });
  }

  // Filter Categories
  const filteredCats = filterCategory === 'all'
    ? PORTFOLIO_DATA.skillsCategories
    : PORTFOLIO_DATA.skillsCategories.filter(c => c.id === filterCategory);

  container.innerHTML = filteredCats.map(cat => `
    <div class="glass-card skill-category-card reveal">
      <div class="category-header">
        <i class="${cat.icon}"></i>
        <span>${cat.category}</span>
      </div>
      <div class="skill-bars-list">
        ${cat.skills.map(s => `
          <div class="skill-bar-item">
            <div class="skill-info">
              <span class="skill-name">${s.name}</span>
              <span class="skill-badge">${s.badge}</span>
            </div>
            <div class="skill-track">
              <div class="skill-progress" data-width="${s.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Animate skill bars if visible
  animateSkillBars();
}

function animateSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-progress').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-category-card').forEach(card => observer.observe(card));
}

/* ---------- Render Projects with Filtering ---------- */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  const filterTabsContainer = document.getElementById('projects-filter');
  if (!container || !PORTFOLIO_DATA.projects) return;

  if (filterTabsContainer && filterTabsContainer.children.length === 0) {
    filterTabsContainer.innerHTML = `
      <button class="filter-tab active" data-project-filter="all">All Projects</button>
      <button class="filter-tab" data-project-filter="ai-ml">AI & ML</button>
      <button class="filter-tab" data-project-filter="gen-ai">GenAI & LLMs</button>
      <button class="filter-tab" data-project-filter="frontend">Frontend & Web</button>
    `;

    filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        renderProjects(e.target.dataset.projectFilter);
      });
    });
  }

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map(p => `
    <article class="glass-card project-card reveal">
      <div class="project-top">
        <div class="project-icon"><i class="${p.icon}"></i></div>
        <div class="project-links">
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="project-link-btn" aria-label="GitHub Repo"><i class="fab fa-github"></i></a>` : ''}
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="project-link-btn" aria-label="Live Demo"><i class="fas fa-arrow-up-right-from-square"></i></a>` : ''}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <div class="project-tagline">${p.tagline}</div>
      <p class="project-desc">${p.description}</p>
      
      <div class="project-features-list">
        ${p.features.map(f => `
          <div class="feature-bullet"><i class="fas fa-check"></i> <span>${f}</span></div>
        `).join('')}
      </div>

      <div class="project-tech-stack">
        ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');

  initScrollReveal();
}

/* ---------- Achievements & Certifications ---------- */
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container || !PORTFOLIO_DATA.achievements) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(a => `
    <div class="glass-card ach-card reveal">
      <span class="ach-badge">${a.badge}</span>
      <i class="${a.icon} ach-icon"></i>
      <h4 class="ach-title">${a.title}</h4>
      <p class="ach-desc">${a.description}</p>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certs-container');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(c => `
    <div class="glass-card cert-card reveal">
      <i class="${c.icon} cert-icon"></i>
      <h4 class="cert-title">${c.title}</h4>
      <div class="cert-issuer">${c.issuer} · ${c.date}</div>
      <div class="cert-skills">
        ${c.skills.map(s => `<span class="cert-skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------- Timeline ---------- */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !PORTFOLIO_DATA.timeline) return;

  container.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="glass-card tl-content">
        <span class="tl-year">${item.year}</span>
        <h4 class="tl-title">${item.title}</h4>
        <div class="tl-institution">${item.institution}</div>
        <p class="tl-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ---------- Live GitHub Integration ---------- */
async function initGitHubIntegration() {
  const username = PORTFOLIO_DATA.personalInfo.githubUsername || 'shanmukap019-png';
  const repoVal = document.getElementById('gh-repo-count');
  const starVal = document.getElementById('gh-star-count');
  const followerVal = document.getElementById('gh-follower-count');
  const eventsListContainer = document.getElementById('gh-events-list');

  // 1. Fetch User Profile (Repos & Followers)
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (userRes.ok) {
      const userData = await userRes.json();
      if (repoVal) repoVal.textContent = userData.public_repos ?? '8';
      if (followerVal) followerVal.textContent = userData.followers ?? '0';
    } else {
      useGitHubFallback();
    }
  } catch (e) {
    useGitHubFallback();
  }

  // 2. Fetch Repos to Calculate Total Stars
  try {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (reposRes.ok) {
      const repos = await reposRes.json();
      const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      if (starVal) starVal.textContent = totalStars || '0';
    }
  } catch (e) {
    if (starVal && starVal.textContent === '--') starVal.textContent = '0';
  }

  // 3. Fetch Recent Public Events
  try {
    const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`);
    if (eventsRes.ok && eventsListContainer) {
      const events = await eventsRes.json();
      if (events && events.length > 0) {
        eventsListContainer.innerHTML = events.slice(0, 4).map(ev => {
          const repoName = ev.repo ? ev.repo.name.replace(`${username}/`, '') : 'repository';
          const type = ev.type === 'PushEvent' ? 'Pushed code to' :
                       ev.type === 'WatchEvent' ? 'Starred' :
                       ev.type === 'CreateEvent' ? 'Created' : 'Updated';
          const time = new Date(ev.created_at).toLocaleDateString();
          return `
            <div class="gh-events-item">
              <i class="fas fa-code-commit" style="color: var(--sky);"></i>
              <div>
                <span>${type} <strong><a href="https://github.com/${ev.repo ? ev.repo.name : ''}" target="_blank" rel="noopener">${repoName}</a></strong></span>
                <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 8px;">${time}</span>
              </div>
            </div>
          `;
        }).join('');
      } else {
        eventsListContainer.innerHTML = '<p style="color: var(--text-muted);">Recent repository updates logged on GitHub.</p>';
      }
    }
  } catch (e) {
    if (eventsListContainer) {
      eventsListContainer.innerHTML = '<p style="color: var(--text-muted);">Pushed commits to repository portfolio-2.0</p>';
    }
  }
}

function useGitHubFallback() {
  const repoVal = document.getElementById('gh-repo-count');
  const starVal = document.getElementById('gh-star-count');
  const followerVal = document.getElementById('gh-follower-count');
  if (repoVal && repoVal.textContent === '--') repoVal.textContent = '8';
  if (starVal && starVal.textContent === '--') starVal.textContent = '0';
  if (followerVal && followerVal.textContent === '--') followerVal.textContent = '0';
}

/* ---------- Scroll Reveal Observer ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* ---------- Counter Animations ---------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.target;
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          entry.target.textContent = current + '+';
          if (current >= target) clearInterval(timer);
        }, 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ---------- Contact Form Handler ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value;
      if (feedback) {
        feedback.textContent = `Thank you ${name}! Your message has been prepared. Re-directing...`;
        setTimeout(() => {
          window.location.href = `mailto:Shanmukap019@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Shanmuka%20Priya,%0A%0A`;
          feedback.textContent = '';
          form.reset();
        }, 1500);
      }
    });
  }
}

/* ---------- Resume Modal Handler ---------- */
function initResumeModal() {
  const backdrop = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('.btn-resume-trigger');
  const closeBtn = document.getElementById('modal-close-btn');

  if (backdrop) {
    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        backdrop.classList.add('active');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
    }

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });
  }
}

/* ---------- Anti-Copy Deterrents ---------- */
function initAntiCopyMeasures() {
  // Prevent dragging images
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });

  // Non-intrusive copyright warning on contextmenu for key identity elements
  document.querySelectorAll('.nav-logo, .hero-avatar-card').forEach(el => {
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  });
}
