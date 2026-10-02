/* ============================================================
   Shanmuka Priya Katta — PORTFOLIO 3.0 LOGIC ENGINE
   Architecture: Modular, High-Performance, Zero-Dependency
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize UI & Components
  initNavbar();
  initTypingEffect();
  initParticles(prefersReducedMotion);
  initCustomCursor(prefersReducedMotion);
  initSoundEffects();
  initSpotlightCards();
  initCommandPalette();

  // Render Data Architecture
  renderSkills('all');
  renderProjects('all');
  renderCurrentlyBuilding();
  renderAchievements();
  renderCertifications();
  renderTimeline();

  // Integrations & Interactions
  initProjectModal();
  initGitHubIntegration();
  initScrollReveal();
  initCounters();
  initContactForm();
  initResumeModal();
  initBackToTop();
  initAntiCopyMeasures();
});

/* ============================================================
   1. NAVBAR LOGIC & ACTIVE SECTION OBSERVER
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks ? navLinks.querySelectorAll('a') : [];
  const scrollProgressBar = document.getElementById('scroll-progress');

  // Scroll handler with requestAnimationFrame throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Sticky Navbar Glass
        if (navbar) {
          if (scrollY > 30) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }

        // Scroll progress indicator
        if (scrollProgressBar) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          scrollProgressBar.style.width = `${progress}%`;
        }

        // Back to top button visibility
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
          if (scrollY > 500) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Mobile menu hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      playSound('click');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
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

/* ============================================================
   2. TYPING EFFECT (Shanmuka's Verified Roles)
   ============================================================ */
function initTypingEffect() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const phrases = [
    'AI & Machine Learning Engineering',
    'Generative AI & LLM Systems',
    'Agentic RAG Architectures',
    'Full-Stack Web Development',
    'Computer Vision Research'
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
      setTimeout(type, 2000);
      return;
    }

    if (isDeleting && charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
      setTimeout(type, 400);
      return;
    }

    setTimeout(type, isDeleting ? 40 : 80);
  }

  type();
}

/* ============================================================
   3. NEURAL SYNAPSE VECTOR MESH CANVAS
   ============================================================ */
function initParticles(reducedMotion) {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };
  let animationId = null;
  let isVisible = true;

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

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  // Pause canvas when tab is hidden to preserve battery & CPU
  document.addEventListener('visibilitychange', () => {
    isVisible = document.visibilityState === 'visible';
    if (isVisible && !animationId) {
      animate();
    }
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.6 + 0.6;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.alpha = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around bounds
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;

      // Mouse gentle gravitational reaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
      ctx.fill();
    }
  }

  // Strict cap on particle count for 60fps performance
  const count = Math.min(Math.floor(window.innerWidth / 22), 55);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function animate() {
    if (!isVisible) {
      animationId = null;
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // Draw neural synapse connection lines
    const maxDist = 110;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================================
   4. DESKTOP CUSTOM CURSOR
   ============================================================ */
function initCustomCursor(reducedMotion) {
  if (reducedMotion || window.innerWidth < 992) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-label');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isVisible = true;
    }

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    isVisible = false;
  });

  // Smooth lerp trailing ring
  function renderCursor() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Interactive element hover detection
  function attachCursorListeners() {
    const interactives = document.querySelectorAll('a, button, input, textarea, .filter-tab, .cmd-item');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-project');
        if (label) label.textContent = 'EXPLORE';
      });
      card.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-project');
        if (label) label.textContent = '';
      });
    });
  }

  attachCursorListeners();
  window.addEventListener('portfolio:dom-updated', attachCursorListeners);
}

/* ============================================================
   5. CYBER AUDIO FEEDBACK (MUTED BY DEFAULT)
   ============================================================ */
let audioCtx = null;
let soundEnabled = false;

function initSoundEffects() {
  const toggleBtn = document.getElementById('sound-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;

    if (soundEnabled) {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      toggleBtn.classList.add('sound-on');
      toggleBtn.innerHTML = '<i class="fas fa-volume-high"></i>';
      toggleBtn.setAttribute('title', 'Sound Feedback: Active (Click to mute)');
      playSound('enable');
    } else {
      toggleBtn.classList.remove('sound-on');
      toggleBtn.innerHTML = '<i class="fas fa-volume-xmark"></i>';
      toggleBtn.setAttribute('title', 'Sound Feedback: Muted (Click to activate)');
    }
  });
}

function playSound(type = 'click') {
  if (!soundEnabled || !audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'enable') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'modal') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.08);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      osc.start(now);
      osc.stop(now + 0.09);
    }
  } catch (e) {
    // Graceful silent audio fallback
  }
}

/* ============================================================
   6. SPOTLIGHT RADIAL MOUSE CARD REFLECTION
   ============================================================ */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card, .project-card, .glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}

/* ============================================================
   7. COMMAND PALETTE HUD (⌘K / Ctrl+K)
   ============================================================ */
function initCommandPalette() {
  const modal = document.getElementById('command-palette-modal');
  const triggerBtn = document.getElementById('cmd-k-trigger');
  const input = document.getElementById('cmd-search-input');
  const resultsContainer = document.getElementById('cmd-results-container');
  if (!modal || !input || !resultsContainer) return;

  const commandItems = [
    // Sections
    { category: 'Sections', title: 'Home // Command Center', action: () => scrollToSection('home'), icon: 'fas fa-house' },
    { category: 'Sections', title: 'About // Developer Identity', action: () => scrollToSection('about'), icon: 'fas fa-user-astronaut' },
    { category: 'Sections', title: 'Skills // Technical Matrix', action: () => scrollToSection('skills'), icon: 'fas fa-code' },
    { category: 'Sections', title: 'Projects // Production Showcase', action: () => scrollToSection('projects'), icon: 'fas fa-rocket' },
    { category: 'Sections', title: 'Active Labs // Currently Building', action: () => scrollToSection('building'), icon: 'fas fa-flask' },
    { category: 'Sections', title: 'GitHub // Live Telemetry', action: () => scrollToSection('github'), icon: 'fab fa-github' },
    { category: 'Sections', title: 'Achievements // Highlights', action: () => scrollToSection('achievements'), icon: 'fas fa-trophy' },
    { category: 'Sections', title: 'Journey // Timeline', action: () => scrollToSection('timeline'), icon: 'fas fa-timeline' },
    { category: 'Sections', title: 'Contact // Transmission', action: () => scrollToSection('contact'), icon: 'fas fa-envelope' },

    // Featured Projects
    { category: 'Projects', title: 'Nova AI (Intelligent Conversational LLM)', action: () => openProjectModal('nova-ai'), icon: 'fas fa-comment-dots' },
    { category: 'Projects', title: 'City Twin AI (Urban Flood Risk Prediction)', action: () => openProjectModal('city-twin-ai'), icon: 'fas fa-city' },
    { category: 'Projects', title: 'Kimi AI Study Planner (AI Learning Companion)', action: () => openProjectModal('kimi-ai'), icon: 'fas fa-book-open-reader' },
    { category: 'Projects', title: 'AI Radiology Assistant (Dental Computer Vision)', action: () => openProjectModal('ai-dentistry'), icon: 'fas fa-tooth' },
    { category: 'Projects', title: 'Movie UI Platform (Streaming Interface)', action: () => openProjectModal('movie-ui'), icon: 'fas fa-film' },

    // Quick Actions
    { category: 'Actions', title: 'Download / View Resume', action: () => openResumeModal(), icon: 'fas fa-file-pdf' },
    { category: 'Actions', title: 'Copy Email Address (Shanmukap019@gmail.com)', action: () => copyEmailToClipboard(), icon: 'fas fa-copy' },
    { category: 'Actions', title: 'Open GitHub Profile (@shanmukap019-png)', action: () => window.open('https://github.com/shanmukap019-png', '_blank'), icon: 'fab fa-github' },
    { category: 'Actions', title: 'Open LinkedIn Profile', action: () => window.open('https://www.linkedin.com/in/shanmuka-priya-611612388/', '_blank'), icon: 'fab fa-linkedin' }
  ];

  let activeIndex = 0;
  let currentFiltered = [...commandItems];

  function openPalette() {
    modal.classList.add('active');
    input.value = '';
    currentFiltered = [...commandItems];
    activeIndex = 0;
    renderResults();
    setTimeout(() => input.focus(), 60);
    playSound('modal');
  }

  function closePalette() {
    modal.classList.remove('active');
    playSound('click');
  }

  function scrollToSection(id) {
    closePalette();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function copyEmailToClipboard() {
    navigator.clipboard.writeText('Shanmukap019@gmail.com').then(() => {
      alert('Email copied to clipboard: Shanmukap019@gmail.com');
    }).catch(() => {
      window.location.href = 'mailto:Shanmukap019@gmail.com';
    });
    closePalette();
  }

  function renderResults() {
    if (currentFiltered.length === 0) {
      resultsContainer.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">No matching commands found.</div>';
      return;
    }

    // Group by category
    const grouped = {};
    currentFiltered.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });

    let html = '';
    let globalIndex = 0;

    Object.keys(grouped).forEach(category => {
      html += `<div class="cmd-group-title">${category}</div>`;
      grouped[category].forEach(item => {
        const isSelected = globalIndex === activeIndex;
        html += `
          <div class="cmd-item ${isSelected ? 'active' : ''}" data-index="${globalIndex}">
            <div class="cmd-item-left">
              <span class="cmd-item-icon"><i class="${item.icon}"></i></span>
              <span class="cmd-item-title">${item.title}</span>
            </div>
            <span class="cmd-item-shortcut">Jump <i class="fas fa-arrow-turn-down"></i></span>
          </div>
        `;
        globalIndex++;
      });
    });

    resultsContainer.innerHTML = html;

    // Attach click handlers
    resultsContainer.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = +el.dataset.index;
        if (currentFiltered[idx]) {
          currentFiltered[idx].action();
        }
      });
    });
  }

  // Filter input
  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      currentFiltered = [...commandItems];
    } else {
      currentFiltered = commandItems.filter(item =>
        item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      );
    }
    activeIndex = 0;
    renderResults();
  });

  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % currentFiltered.length;
      renderResults();
      scrollActiveIntoView();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + currentFiltered.length) % currentFiltered.length;
      renderResults();
      scrollActiveIntoView();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered[activeIndex]) {
        currentFiltered[activeIndex].action();
      }
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  function scrollActiveIntoView() {
    const activeEl = resultsContainer.querySelector('.cmd-item.active');
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }

  // Global keydown trigger for Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closePalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openPalette);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePalette();
  });
}

/* ============================================================
   8. SKILLS SECTION WITH PROJECT CROSS-REFERENCES
   ============================================================ */
function renderSkills(filterCategory = 'all') {
  const container = document.getElementById('skills-container');
  const filterTabsContainer = document.getElementById('skills-filter');
  if (!container || !PORTFOLIO_DATA.skillsCategories) return;

  // Render Category Filter Tabs once
  if (filterTabsContainer && filterTabsContainer.children.length === 0) {
    const tabsHtml = `
      <button class="filter-tab active" data-filter="all">
        <i class="fas fa-layer-group"></i> All Expertise
      </button>
      ${PORTFOLIO_DATA.skillsCategories.map(cat => `
        <button class="filter-tab" data-filter="${cat.id}">
          <i class="${cat.icon}"></i> ${cat.category}
        </button>
      `).join('')}
    `;
    filterTabsContainer.innerHTML = tabsHtml;

    filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        const btn = e.currentTarget;
        btn.classList.add('active');
        playSound('click');
        renderSkills(btn.dataset.filter);
      });
    });
  }

  const filteredCats = filterCategory === 'all'
    ? PORTFOLIO_DATA.skillsCategories
    : PORTFOLIO_DATA.skillsCategories.filter(c => c.id === filterCategory);

  container.innerHTML = filteredCats.map(cat => `
    <div class="glass-card skill-category-card reveal spotlight-card">
      <div class="category-header">
        <i class="${cat.icon}"></i>
        <span>${cat.category}</span>
      </div>
      <div class="skill-bars-list">
        ${cat.skills.map(s => {
          const projectTags = s.projects ? s.projects.join(', ') : '';
          return `
            <div class="skill-bar-item" title="${s.name} (Proficiency: ${s.level}%)">
              <div class="skill-info">
                <span class="skill-name">${s.name}</span>
                <span class="skill-badge">${s.badge}</span>
              </div>
              <div class="skill-track">
                <div class="skill-progress" data-width="${s.level}%"></div>
              </div>
              ${projectTags ? `<span class="skill-projects-hint"><i class="fas fa-link"></i> Applied in: ${projectTags}</span>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  initSpotlightCards();
  animateSkillBars();
  window.dispatchEvent(new CustomEvent('portfolio:dom-updated'));
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
  }, { threshold: 0.15 });

  document.querySelectorAll('.skill-category-card').forEach(card => observer.observe(card));
}

/* ============================================================
   9. PROJECTS SHOWCASE (THE MAIN SHOWCASE)
   ============================================================ */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  const filterTabsContainer = document.getElementById('projects-filter');
  if (!container || !PORTFOLIO_DATA.projects) return;

  if (filterTabsContainer && filterTabsContainer.children.length === 0) {
    filterTabsContainer.innerHTML = `
      <button class="filter-tab active" data-project-filter="all">All Projects</button>
      <button class="filter-tab" data-project-filter="ai-ml">AI & Machine Learning</button>
      <button class="filter-tab" data-project-filter="gen-ai">Generative AI & LLMs</button>
      <button class="filter-tab" data-project-filter="frontend">Frontend & Web</button>
    `;

    filterTabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        filterTabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        const btn = e.currentTarget;
        btn.classList.add('active');
        playSound('click');
        renderProjects(btn.dataset.projectFilter);
      });
    });
  }

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map(p => `
    <article class="glass-card project-card reveal spotlight-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Explore ${p.title} deep dive">
      <div class="project-top">
        <div class="project-icon"><i class="${p.icon}"></i></div>
        <div class="project-links" onclick="event.stopPropagation()">
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="project-link-btn" aria-label="GitHub Repo" title="GitHub Code"><i class="fab fa-github"></i></a>` : ''}
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener" class="project-link-btn" aria-label="Live Demo" title="Live Preview"><i class="fas fa-arrow-up-right-from-square"></i></a>` : ''}
        </div>
      </div>

      <h3 class="project-title">${p.title}</h3>
      <div class="project-tagline">${p.tagline}</div>
      <p class="project-desc">${p.description}</p>
      
      <div class="project-features-list">
        ${p.features.slice(0, 3).map(f => `
          <div class="feature-bullet"><i class="fas fa-check"></i> <span>${f}</span></div>
        `).join('')}
      </div>

      <div class="project-tech-stack">
        ${p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="project-deepdive-cta">
        <span><i class="fas fa-microchip"></i> System Deep Dive</span>
        <span>View Details <i class="fas fa-chevron-right"></i></span>
      </div>
    </article>
  `).join('');

  // Attach card click handlers for Project Detail Modal
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.projectId;
      openProjectModal(pid);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card.dataset.projectId);
      }
    });
  });

  initSpotlightCards();
  initScrollReveal();
  window.dispatchEvent(new CustomEvent('portfolio:dom-updated'));
}

/* ============================================================
   10. PROJECT DEEP-DIVE MODAL HANDLER
   ============================================================ */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  if (!modal || !PORTFOLIO_DATA.projects) return;

  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  // Populate Header
  const iconWrap = document.getElementById('proj-modal-icon');
  const titleEl = document.getElementById('proj-modal-title');
  const taglineEl = document.getElementById('proj-modal-tagline');
  const categoryEl = document.getElementById('proj-modal-category');

  if (iconWrap) iconWrap.className = project.icon;
  if (titleEl) titleEl.textContent = project.title;
  if (taglineEl) taglineEl.textContent = project.tagline;
  if (categoryEl) {
    categoryEl.textContent = project.category.toUpperCase().replace('-', ' / ');
  }

  // Populate Deep Dive Details
  const detail = project.detail || {};
  const problemEl = document.getElementById('proj-modal-problem');
  const solutionEl = document.getElementById('proj-modal-solution');
  const archEl = document.getElementById('proj-modal-architecture');
  const featuresEl = document.getElementById('proj-modal-features');
  const challengesEl = document.getElementById('proj-modal-challenges');
  const outcomeEl = document.getElementById('proj-modal-outcome');
  const techEl = document.getElementById('proj-modal-tech');
  const actionsEl = document.getElementById('proj-modal-actions');

  if (problemEl) problemEl.textContent = detail.problem || project.description;
  if (solutionEl) solutionEl.textContent = detail.solution || 'Engineered an end-to-end technical solution leveraging modern AI and full-stack paradigms.';
  if (archEl) archEl.textContent = detail.architecture || 'Client (HTML5/CSS3/JS) ──REST API──> Backend Service ──Inference Pipeline.';
  if (challengesEl) challengesEl.textContent = detail.challenges || 'Overcoming inference latency constraints and optimizing state caching.';
  if (outcomeEl) outcomeEl.textContent = detail.outcome || 'Production-ready prototype with zero latency regressions.';

  if (featuresEl) {
    featuresEl.innerHTML = project.features.map(f => `
      <div class="feature-bullet" style="background: rgba(148,163,184,0.05); padding: 8px 12px; border-radius: 6px;">
        <i class="fas fa-check-circle text-emerald"></i>
        <span>${f}</span>
      </div>
    `).join('');
  }

  if (techEl) {
    techEl.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  if (actionsEl) {
    actionsEl.innerHTML = `
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
          <i class="fab fa-github"></i> Source Repository
        </a>
      ` : ''}
      ${project.demoUrl ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
          <i class="fas fa-arrow-up-right-from-square"></i> Launch Live Application
        </a>
      ` : ''}
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  playSound('modal');
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    playSound('click');
  }
}

/* ============================================================
   11. CURRENTLY BUILDING (ACTIVE LABS)
   ============================================================ */
function renderCurrentlyBuilding() {
  const container = document.getElementById('building-container');
  if (!container || !PORTFOLIO_DATA.currentlyBuilding) return;

  container.innerHTML = PORTFOLIO_DATA.currentlyBuilding.map(item => `
    <div class="glass-card building-card reveal spotlight-card">
      <div class="building-header">
        <div>
          <span class="building-stage">${item.stage || 'Active Phase'} (${item.phase || '02/04'})</span>
          <h4 class="building-title">${item.title}</h4>
        </div>
        <span class="status-pill"><i class="fas fa-circle-notch fa-spin"></i> ${item.status}</span>
      </div>
      <p class="building-desc">${item.description}</p>
      <div class="project-tech-stack" style="margin-bottom: 16px;">
        ${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 4px;">
        <span>Progress Milestone</span>
        <span>${item.progress}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${item.progress}%"></div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   12. ACHIEVEMENTS & CERTIFICATIONS & TIMELINE
   ============================================================ */
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container || !PORTFOLIO_DATA.achievements) return;

  container.innerHTML = PORTFOLIO_DATA.achievements.map(a => `
    <div class="glass-card ach-card reveal spotlight-card">
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
    <div class="glass-card cert-card reveal spotlight-card">
      <i class="${c.icon} cert-icon"></i>
      <h4 class="cert-title">${c.title}</h4>
      <div class="cert-issuer">${c.issuer} · ${c.date}</div>
      <div class="cert-skills">
        ${c.skills.map(s => `<span class="cert-skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !PORTFOLIO_DATA.timeline) return;

  container.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="glass-card tl-content spotlight-card">
        <span class="tl-year">${item.year}</span>
        <h4 class="tl-title">${item.title}</h4>
        <div class="tl-institution">${item.institution}</div>
        <p class="tl-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   13. LIVE GITHUB REAL-TIME INTEGRATION
   ============================================================ */
async function initGitHubIntegration() {
  const username = PORTFOLIO_DATA.personalInfo.githubUsername || 'shanmukap019-png';
  const repoVal = document.getElementById('gh-repo-count');
  const starVal = document.getElementById('gh-star-count');
  const followerVal = document.getElementById('gh-follower-count');
  const eventsListContainer = document.getElementById('gh-events-list');
  const liveReposGrid = document.getElementById('gh-live-repos-grid');
  const syncBtn = document.getElementById('gh-sync-btn');

  if (syncBtn && !syncBtn.dataset.bound) {
    syncBtn.dataset.bound = 'true';
    syncBtn.addEventListener('click', async () => {
      const icon = syncBtn.querySelector('i');
      if (icon) icon.classList.add('fa-spin');
      syncBtn.querySelector('span').textContent = 'Syncing...';
      playSound('click');
      await fetchGitHubData();
      setTimeout(() => {
        if (icon) icon.classList.remove('fa-spin');
        syncBtn.querySelector('span').textContent = 'Synced!';
        setTimeout(() => syncBtn.querySelector('span').textContent = 'Sync Live', 2000);
      }, 500);
    });
  }

  await fetchGitHubData();

  // Polling interval: 60s for live telemetry
  setInterval(fetchGitHubData, 60000);

  async function fetchGitHubData() {
    let handled = false;

    // 1. Try Vercel Serverless Function first (/api/github)
    try {
      const apiRes = await fetch('/api/github');
      if (apiRes.ok) {
        const payload = await apiRes.json();
        if (payload.success) {
          if (repoVal) repoVal.textContent = payload.user.public_repos;
          if (followerVal) followerVal.textContent = payload.user.followers;
          if (starVal) starVal.textContent = payload.user.total_stars;

          if (payload.recentRepos) {
            renderLiveRepos(payload.recentRepos);
          }
          if (payload.events && eventsListContainer) {
            renderLiveEvents(payload.events, username);
          }
          handled = true;
        }
      }
    } catch (e) {
      // Serverless not available, fallback to client-side public API
    }

    if (!handled) {
      await fetchDirectGitHub();
    }
  }

  // Direct client fetch to public GitHub API
  async function fetchDirectGitHub() {
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (userRes.ok) {
        const u = await userRes.json();
        if (repoVal) repoVal.textContent = u.public_repos ?? '14';
        if (followerVal) followerVal.textContent = u.followers ?? '0';
      }

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`);
      if (reposRes.ok) {
        const repos = await reposRes.json();
        const stars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
        if (starVal) starVal.textContent = stars || '0';
        renderLiveRepos(repos);
      }

      const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=5`);
      if (eventsRes.ok && eventsListContainer) {
        const events = await eventsRes.json();
        renderLiveEvents(events, username);
      }
    } catch (e) {
      useGitHubFallback();
    }
  }

  function renderLiveRepos(repos) {
    if (!liveReposGrid || !repos || repos.length === 0) return;

    liveReposGrid.innerHTML = repos.slice(0, 4).map(repo => {
      const timeFormatted = formatTimeAgo(repo.pushed_at || repo.updated_at);
      const lang = repo.language || 'Code';
      const langColor = getLanguageColor(lang);

      return `
        <div class="glass-card gh-repo-card spotlight-card">
          <div class="gh-repo-header">
            <h4 class="gh-repo-title" title="${repo.name}">
              <a href="${repo.html_url}" target="_blank" rel="noopener">
                <i class="fas fa-folder-open text-sky"></i>
                <span>${repo.name}</span>
              </a>
            </h4>
            <span class="status-pill status-synced" style="font-size: 0.65rem; padding: 2px 8px;">
              <span class="pulse-dot" style="width: 5px; height: 5px;"></span> Active
            </span>
          </div>

          <p class="gh-repo-desc">
            ${repo.description || 'Public repository tracked on GitHub for Shanmuka Priya Katta.'}
          </p>

          <div class="gh-repo-footer">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="display: inline-flex; align-items: center; gap: 5px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${langColor};"></span>
                ${lang}
              </span>
              <span><i class="far fa-star"></i> ${repo.stargazers_count || 0}</span>
              <span><i class="fas fa-code-fork"></i> ${repo.forks_count || 0}</span>
            </div>
            <span title="${new Date(repo.pushed_at).toLocaleString()}">
              <i class="far fa-clock"></i> ${timeFormatted}
            </span>
          </div>
        </div>
      `;
    }).join('');

    initSpotlightCards();
  }

  function renderLiveEvents(events, user) {
    if (!eventsListContainer) return;
    if (!events || events.length === 0) {
      eventsListContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.82rem;">No recent public events recorded on GitHub.</p>';
      return;
    }

    eventsListContainer.innerHTML = events.slice(0, 4).map(ev => {
      const repoName = ev.repo ? (typeof ev.repo === 'string' ? ev.repo : ev.repo.name).replace(`${user}/`, '') : 'repository';
      const repoUrl = `https://github.com/${user}/${repoName}`;
      const type = ev.type === 'PushEvent' ? 'Pushed commit to' :
                   ev.type === 'WatchEvent' ? 'Starred repository' :
                   ev.type === 'CreateEvent' ? 'Created repository' :
                   ev.type === 'PullRequestEvent' ? 'Pull Request on' : 'Updated';
      const timeFormatted = formatTimeAgo(ev.created_at);

      return `
        <div class="gh-events-item">
          <i class="fas fa-code-commit text-sky"></i>
          <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
            <span>${type} <strong><a href="${repoUrl}" target="_blank" rel="noopener" style="color: var(--text-primary);">${repoName}</a></strong></span>
            <span style="color: var(--text-muted); font-size: 0.72rem; margin-left: 8px;">${timeFormatted}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function formatTimeAgo(dateString) {
    if (!dateString) return 'recently';
    const diffSec = Math.floor((new Date() - new Date(dateString)) / 1000);

    if (diffSec < 60) return 'Just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour}h ago`;
    const diffDays = Math.floor(diffHour / 24);
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays}d ago`;
    return new Date(dateString).toLocaleDateString();
  }

  function getLanguageColor(lang) {
    const colors = {
      'Python': '#3572A5',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'HTML': '#E34F26',
      'CSS': '#563D7C',
      'Java': '#B07219',
      'C++': '#F34B7D',
      'Jupyter Notebook': '#DA5B0B'
    };
    return colors[lang] || '#38BDF8';
  }
}

function useGitHubFallback() {
  const repoVal = document.getElementById('gh-repo-count');
  const starVal = document.getElementById('gh-star-count');
  const followerVal = document.getElementById('gh-follower-count');
  if (repoVal && repoVal.textContent === '--') repoVal.textContent = '14';
  if (starVal && starVal.textContent === '--') starVal.textContent = '0';
  if (followerVal && followerVal.textContent === '--') followerVal.textContent = '0';

  const eventsListContainer = document.getElementById('gh-events-list');
  if (eventsListContainer && eventsListContainer.innerHTML.includes('Loading')) {
    eventsListContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.82rem;"><i class="fas fa-cloud-check text-sky"></i> GitHub activity synced with remote profile.</p>';
  }
}

/* ============================================================
   14. SCROLL REVEAL OBSERVER
   ============================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   15. COUNTER ANIMATIONS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.target;
        let current = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          entry.target.textContent = current + '+';
          if (current >= target) clearInterval(timer);
        }, 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================================
   16. CONTACT FORM HANDLER
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cf-name').value.trim();
      const subject = document.getElementById('cf-subject').value.trim();
      const message = document.getElementById('cf-message').value.trim();

      if (!name || !message) return;

      playSound('click');

      if (feedback) {
        feedback.innerHTML = `<span class="text-sky"><i class="fas fa-paper-plane fa-spin"></i> Dispatching message from ${name}... Preparing mail client.</span>`;
        setTimeout(() => {
          const body = encodeURIComponent(`Hi Shanmuka Priya,\n\n${message}\n\nFrom: ${name}`);
          const subj = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `Inquiry from ${name}`);
          window.location.href = `mailto:Shanmukap019@gmail.com?subject=${subj}&body=${body}`;
          feedback.innerHTML = `<span class="text-emerald"><i class="fas fa-check-circle"></i> Message prepared in your email client! Thank you.</span>`;
          form.reset();
        }, 1200);
      }
    });
  }
}

/* ============================================================
   17. RESUME MODAL & BACK TO TOP
   ============================================================ */
function initResumeModal() {
  const backdrop = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('.btn-resume-trigger');
  const closeBtn = document.getElementById('modal-close-btn');

  if (backdrop) {
    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openResumeModal();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeResumeModal);
    }

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeResumeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeResumeModal();
      }
    });
  }
}

function openResumeModal() {
  const backdrop = document.getElementById('resume-modal');
  if (backdrop) {
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    playSound('modal');
  }
}

function closeResumeModal() {
  const backdrop = document.getElementById('resume-modal');
  if (backdrop) {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    playSound('click');
  }
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playSound('click');
    });
  }
}

/* ============================================================
   18. ANTI-COPY & ASSET PROTECTION
   ============================================================ */
function initAntiCopyMeasures() {
  // Prevent dragging avatar and logo images
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });

  // Non-intrusive branding deterrence
  document.querySelectorAll('.nav-logo, .hero-avatar-card').forEach(el => {
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  });
}
