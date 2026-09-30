/* ============================================================
   Shanmuka Priya Katta — Centralized Data Store
   ============================================================ */

const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Shanmuka Priya Katta",
    shortName: "Shanmuka Priya",
    logoText: "SP",
    logoSub: "K",
    role: "AI & ML Engineer · GenAI Builder · Full-Stack Developer",
    tagline: "Building Intelligent Systems & High-Performance AI Applications",
    bioParagraphs: [
      "I am an <strong>Artificial Intelligence & Machine Learning</strong> student at MNR University, passionate about designing AI-powered applications, intelligent LLM systems, and modern web applications.",
      "My work spans machine learning models, Generative AI & RAG architectures, computer vision research, FastAPI backends, and responsive full-stack interfaces. I thrive in hackathons and fast-paced innovation environments.",
      "My goal is to ship impactful AI products that solve complex real-world problems and push the boundaries of human-computer interaction."
    ],
    education: "B.Tech in AI & ML",
    university: "MNR University",
    location: "India",
    status: "Open to Internships",
    ambassadorRole: "IIT Bombay Campus Ambassador",
    email: "Shanmukap019@gmail.com",
    phone: "+91 99120 74542",
    githubUsername: "shanmukap019-png",
    githubUrl: "https://github.com/shanmukap019-png",
    linkedinUrl: "https://www.linkedin.com/in/shanmuka-priya-611612388/",
    resumeUrl: "#resume-modal",
    stats: {
      projects: 5,
      technologies: 15,
      hackathons: 3,
      certificates: 6
    }
  },

  currentlyBuilding: [
    {
      id: "cb-1",
      title: "Nova AI v2 (Agentic RAG)",
      description: "Upgrading Nova AI with multi-tool agent routing, vector database document search, and real-time streaming LLM responses.",
      status: "Testing → Deploying",
      tech: ["Python", "FastAPI", "LangChain", "Vector DB"],
      progress: 85
    },
    {
      id: "cb-2",
      title: "Smart Medical Vision Suite",
      description: "Extending AI Dentistry radiology research into an interactive web diagnostic dashboard for dental X-ray analysis.",
      status: "Building → Prototyping",
      tech: ["PyTorch", "OpenCV", "FastAPI", "React"],
      progress: 60
    },
    {
      id: "cb-3",
      title: "City Twin AI Analytics Dashboard",
      description: "Adding 3D map spatial layers and simulated real-time sensor streams for flood mitigation visual analytics.",
      status: "Designing → Building",
      tech: ["ML", "Leaflet/Mapbox", "FastAPI", "Chart.js"],
      progress: 45
    }
  ],

  skillsCategories: [
    {
      id: "ai-ml",
      category: "AI & Machine Learning",
      icon: "fas fa-brain",
      skills: [
        { name: "Machine Learning", level: 85, badge: "Advanced" },
        { name: "Python", level: 92, badge: "Core Language" },
        { name: "Scikit-Learn", level: 80, badge: "ML Toolkit" },
        { name: "Computer Vision", level: 70, badge: "OpenCV" },
        { name: "Deep Learning (Basics)", level: 72, badge: "Neural Nets" },
        { name: "Data Analysis", level: 85, badge: "Pandas/NumPy" }
      ]
    },
    {
      id: "gen-ai",
      category: "Generative AI & LLMs",
      icon: "fas fa-wand-magic-sparkles",
      skills: [
        { name: "Prompt Engineering", level: 90, badge: "Optimization" },
        { name: "LLM APIs (OpenAI/Gemini/Groq)", level: 88, badge: "Integration" },
        { name: "RAG & Context Management", level: 80, badge: "Retrieval" },
        { name: "AI Agent Concepts", level: 78, badge: "Agentic Workflows" },
        { name: "Conversational UI", level: 85, badge: "Interface Design" }
      ]
    },
    {
      id: "backend",
      category: "Backend & Web APIs",
      icon: "fas fa-server",
      skills: [
        { name: "FastAPI", level: 82, badge: "Python API" },
        { name: "Flask", level: 78, badge: "Microservices" },
        { name: "RESTful API Design", level: 85, badge: "Endpoints" },
        { name: "JSON & Data Pipelines", level: 88, badge: "Structure" },
        { name: "Java Basics", level: 75, badge: "OOP Concepts" }
      ]
    },
    {
      id: "frontend",
      category: "Frontend & Web Design",
      icon: "fas fa-laptop-code",
      skills: [
        { name: "HTML5", level: 95, badge: "Semantic Structure" },
        { name: "CSS3 & Modern Layouts", level: 92, badge: "Flexbox/Grid" },
        { name: "JavaScript (ES6+)", level: 84, badge: "Dynamic Logic" },
        { name: "Responsive UI/UX", level: 90, badge: "Mobile First" },
        { name: "Glassmorphic Design Systems", level: 88, badge: "Modern Aesthetics" }
      ]
    },
    {
      id: "tools",
      category: "Developer Tools & Workflow",
      icon: "fas fa-toolbox",
      skills: [
        { name: "Git & GitHub", level: 88, badge: "Version Control" },
        { name: "VS Code", level: 95, badge: "IDE Mastery" },
        { name: "Jupyter & Google Colab", level: 90, badge: "Notebooks" },
        { name: "Figma & Canva", level: 80, badge: "UI Wireframing" },
        { name: "Vercel Deployment", level: 85, badge: "Cloud Host" }
      ]
    }
  ],

  projects: [
    {
      id: "nova-ai",
      title: "Nova AI",
      category: "gen-ai",
      featured: true,
      icon: "fas fa-comment-dots",
      tagline: "Intelligent Conversational LLM Assistant",
      description: "An intelligent conversational AI assistant engineered with FastAPI and LLM API integrations, featuring dynamic context window management, markdown formatting, and ultra-fast query resolution.",
      features: [
        "LLM API Integration with custom prompt routing",
        "Contextual memory preservation for multi-turn conversations",
        "Modern glassmorphism interface with syntax highlighting",
        "FastAPI high-throughput backend"
      ],
      techStack: ["Python", "FastAPI", "LLM APIs", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/shanmukap019-png",
      demoUrl: "https://shanmukapriya.vercel.app"
    },
    {
      id: "city-twin-ai",
      title: "City Twin AI",
      category: "ai-ml",
      featured: true,
      icon: "fas fa-city",
      tagline: "AI-Powered Flood Risk & Smart City Platform",
      description: "An AI-driven disaster risk analytics system that predicts urban flood risks by processing geographical elevation data, rainfall historical metrics, and machine learning risk mapping models.",
      features: [
        "ML flood risk classification algorithm",
        "Geospatial elevation data visualization",
        "Interactive hazard risk zone mapping",
        "Smart city disaster recommendation engine"
      ],
      techStack: ["Python", "Machine Learning", "Scikit-Learn", "FastAPI", "CSV Datasets", "JavaScript"],
      githubUrl: "https://github.com/shanmukap019-png",
      demoUrl: "https://shanmukapriya.vercel.app"
    },
    {
      id: "kimi-ai",
      title: "Kimi AI Study Planner",
      category: "gen-ai",
      featured: true,
      icon: "fas fa-book-open-reader",
      tagline: "Personalized AI Learning Companion & Companion",
      description: "An AI-powered academic companion designed for students to generate personalized study plans, track learning milestones, query complex course material, and maintain focus routines.",
      features: [
        "Automated adaptive study schedule generation",
        "AI subject assistant for instant concept breakdowns",
        "Interactive goal & milestone progress tracker",
        "Sleek distraction-free study environment"
      ],
      techStack: ["Python", "Generative AI", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/shanmukap019-png",
      demoUrl: "https://shanmukapriya.vercel.app"
    },
    {
      id: "ai-dentistry",
      title: "AI Radiology Assistant",
      category: "ai-ml",
      featured: true,
      icon: "fas fa-tooth",
      tagline: "Medical Imaging Radiology Research System",
      description: "A research-oriented computer vision project applying artificial intelligence and deep learning techniques to analyze dental radiograph images, identifying anatomical markers and assisting preliminary screening.",
      features: [
        "Dental radiology image preprocessing pipeline",
        "Feature extraction and pattern detection",
        "Medical imaging AI research implementation",
        "Automated diagnostic report generation prototype"
      ],
      techStack: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "Medical AI"],
      githubUrl: "https://github.com/shanmukap019-png",
      paperUrl: "#"
    },
    {
      id: "movie-ui",
      title: "Movie UI Platform",
      category: "frontend",
      featured: false,
      icon: "fas fa-film",
      tagline: "High-Performance Responsive Streaming Interface",
      description: "A sleek, dark-themed streaming website front-end created with pure semantic HTML5 and CSS3, featuring smooth micro-animations, media galleries, hero carousel preview, and device responsiveness.",
      features: [
        "Fully responsive layout across all device screens",
        "Smooth CSS animations & hover state feedback",
        "Clean component hierarchy and modular styling",
        "Optimized asset loading & fast render speeds"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      githubUrl: "https://github.com/shanmukap019-png",
      demoUrl: "https://shanmukapriya.vercel.app"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "IIT Bombay Campus Ambassador",
      badge: "Leadership Honor",
      icon: "fas fa-award",
      description: "Selected to represent IIT Bombay's technical initiatives, outreach events, and campus innovation programs across institutions.",
      date: "2025 - Present"
    },
    {
      id: "ach-2",
      title: "AI Innovation Hackathon Competitor",
      badge: "Smart City Challenge",
      icon: "fas fa-trophy",
      description: "Built and presented City Twin AI for urban flood risk prediction under strict sprint deadlines, earning recognition for practical impact.",
      date: "2026"
    },
    {
      id: "ach-3",
      title: "Healthcare AI Radiology Research",
      badge: "Medical AI Project",
      icon: "fas fa-flask",
      description: "Pioneered a research-backed AI dentistry assistant focusing on automated dental radiograph screening using Computer Vision.",
      date: "2026"
    },
    {
      id: "ach-4",
      title: "Shipped Multiple End-to-End AI Apps",
      badge: "Production Builder",
      icon: "fas fa-rocket",
      description: "Designed, developed, and deployed multiple functional AI applications from concept model to public web interface.",
      date: "2025 - 2026"
    },
    {
      id: "ach-5",
      title: "Technical Workshop Series",
      badge: "Continuous Learning",
      icon: "fas fa-graduation-cap",
      description: "Active attendee and collaborative speaker in deep learning, FastAPI backend development, and LLM prompt engineering sessions.",
      date: "2025 - 2026"
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Machine Learning Fundamentals",
      issuer: "Online Learning Platform",
      date: "2025",
      skills: ["ML Algorithms", "Model Training", "Scikit-Learn"],
      icon: "fas fa-certificate"
    },
    {
      id: "cert-2",
      title: "Python for Data Science & AI",
      issuer: "Data Science Institute",
      date: "2025",
      skills: ["Python", "Pandas", "NumPy", "Data Visuals"],
      icon: "fas fa-certificate"
    },
    {
      id: "cert-3",
      title: "Generative AI & Prompt Engineering",
      issuer: "AI Research Community",
      date: "2026",
      skills: ["LLMs", "Prompt Optimization", "RAG Concepts"],
      icon: "fas fa-certificate"
    },
    {
      id: "cert-4",
      title: "Frontend Web Development",
      issuer: "Web Dev Academy",
      date: "2025",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      icon: "fas fa-certificate"
    },
    {
      id: "cert-5",
      title: "IIT Bombay Campus Ambassador Certificate",
      issuer: "IIT Bombay Techfest",
      date: "2026",
      skills: ["Leadership", "Community Outreach", "Event Management"],
      icon: "fas fa-award"
    }
  ],

  timeline: [
    {
      year: "2025",
      title: "Began B.Tech in AI & Machine Learning",
      institution: "MNR University",
      description: "Started undergraduate studies in Artificial Intelligence & Machine Learning, building core competencies in Python, mathematics, data structures, and computer science fundamentals."
    },
    {
      year: "2025",
      title: "Appointed IIT Bombay Campus Ambassador",
      institution: "IIT Bombay Techfest Outreach",
      description: "Recognized as Campus Ambassador for IIT Bombay initiatives, leading technical awareness and student participation."
    },
    {
      year: "2026",
      title: "Building AI Apps & Hackathon Sprints",
      institution: "Independent & Team Projects",
      description: "Developed Nova AI, City Twin AI, Kimi AI, and AI Dentistry Assistant. Participated in high-stakes hackathons and mastered FastAPI with LLM integration."
    },
    {
      year: "Future Goals",
      title: "AI Engineer Internship & Open Source",
      institution: "Targeting Top AI Tech Companies",
      description: "Scaling expertise in agentic RAG systems, PyTorch deep learning, model deployment pipelines, and contributing to open-source AI projects."
    }
  ]
};
