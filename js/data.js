/* ============================================================
   Shanmuka Priya Katta — Centralized Data Store (Portfolio 3.0)
   Architecture: Data & UI Decoupled Architecture
   All information accurately reflects Shanmuka Priya's background.
   ============================================================ */

const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Shanmuka Priya Katta",
    shortName: "Shanmuka Priya",
    logoText: "SP",
    logoSub: "K",
    role: "AI & ML Engineer · GenAI Builder · Full-Stack Developer",
    tagline: "Building Intelligent Systems, AI Products & Real-World Software",
    bioParagraphs: [
      "I am an <strong>Artificial Intelligence & Machine Learning</strong> engineer and student at MNR University, focused on architecting intelligent LLM systems, predictive machine learning pipelines, and robust full-stack applications.",
      "My technical stack bridges deep machine learning models, Generative AI & RAG architectures, computer vision diagnostics, high-throughput FastAPI microservices, and sleek responsive user interfaces.",
      "As an <strong>IIT Bombay Campus Ambassador</strong> and active hackathon competitor, I thrive at the intersection of cutting-edge AI research and production-ready software engineering."
    ],
    education: "B.Tech in Artificial Intelligence & Machine Learning",
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
    },
    systemTelemetry: {
      version: "OS 3.0.0",
      status: "ALL SYSTEMS OPERATIONAL",
      node: "HYDERABAD, IN",
      focus: "Agentic RAG · Deep Learning · Web Systems"
    }
  },

  currentlyBuilding: [
    {
      id: "cb-1",
      title: "Nova AI v2 (Agentic RAG)",
      description: "Upgrading Nova AI with multi-tool agent routing, vector database document search, and real-time streaming LLM responses.",
      status: "Testing → Deploying",
      tech: ["Python", "FastAPI", "LangChain", "Vector DB"],
      progress: 85,
      stage: "Production Polish",
      phase: "03 / 04"
    },
    {
      id: "cb-2",
      title: "Smart Medical Vision Suite",
      description: "Extending AI Dentistry radiology research into an interactive web diagnostic dashboard for dental X-ray analysis.",
      status: "Building → Prototyping",
      tech: ["PyTorch", "OpenCV", "FastAPI", "React"],
      progress: 60,
      stage: "Inference Optimization",
      phase: "02 / 04"
    },
    {
      id: "cb-3",
      title: "City Twin AI Analytics Dashboard",
      description: "Adding 3D map spatial layers and simulated real-time sensor streams for flood mitigation visual analytics.",
      status: "Designing → Building",
      tech: ["ML", "Leaflet/Mapbox", "FastAPI", "Chart.js"],
      progress: 45,
      stage: "Spatial Modeling",
      phase: "02 / 04"
    }
  ],

  skillsCategories: [
    {
      id: "ai-ml",
      category: "AI & Machine Learning",
      icon: "fas fa-brain",
      description: "Predictive modeling, data classification, and visual perception systems.",
      skills: [
        { name: "Machine Learning", level: 85, badge: "Advanced", projects: ["City Twin AI", "AI Radiology Assistant"] },
        { name: "Python", level: 92, badge: "Core Language", projects: ["Nova AI", "City Twin AI", "AI Radiology Assistant"] },
        { name: "Scikit-Learn", level: 80, badge: "ML Toolkit", projects: ["City Twin AI"] },
        { name: "Computer Vision", level: 75, badge: "OpenCV", projects: ["AI Radiology Assistant"] },
        { name: "Deep Learning (Basics)", level: 72, badge: "Neural Nets", projects: ["AI Radiology Assistant"] },
        { name: "Data Analysis", level: 85, badge: "Pandas/NumPy", projects: ["City Twin AI", "Nova AI"] }
      ]
    },
    {
      id: "gen-ai",
      category: "Generative AI & LLMs",
      icon: "fas fa-wand-magic-sparkles",
      description: "Prompt optimization, conversational agents, and context management.",
      skills: [
        { name: "Prompt Engineering", level: 90, badge: "Optimization", projects: ["Nova AI", "Kimi AI Study Planner"] },
        { name: "LLM APIs (OpenAI/Gemini/Groq)", level: 88, badge: "Integration", projects: ["Nova AI", "Kimi AI Study Planner"] },
        { name: "RAG & Context Management", level: 80, badge: "Retrieval", projects: ["Nova AI v2"] },
        { name: "AI Agent Concepts", level: 78, badge: "Agentic Workflows", projects: ["Nova AI v2"] },
        { name: "Conversational UI", level: 85, badge: "Interface Design", projects: ["Nova AI", "Kimi AI Study Planner"] }
      ]
    },
    {
      id: "backend",
      category: "Backend & Web APIs",
      icon: "fas fa-server",
      description: "High-throughput asynchronous endpoints and robust service architecture.",
      skills: [
        { name: "FastAPI", level: 82, badge: "Python API", projects: ["Nova AI", "City Twin AI"] },
        { name: "Flask", level: 78, badge: "Microservices", projects: ["Python APIs"] },
        { name: "RESTful API Design", level: 85, badge: "Endpoints", projects: ["Nova AI", "City Twin AI"] },
        { name: "JSON & Data Pipelines", level: 88, badge: "Structure", projects: ["Nova AI", "City Twin AI"] },
        { name: "Java Basics", level: 75, badge: "OOP Concepts", projects: ["Academic CS"] }
      ]
    },
    {
      id: "frontend",
      category: "Frontend & Web Design",
      icon: "fas fa-laptop-code",
      description: "Engineered responsive interfaces, fluid glassmorphism, and accessible layouts.",
      skills: [
        { name: "HTML5 & Semantic Structure", level: 95, badge: "Semantic", projects: ["All Web Apps"] },
        { name: "CSS3 & Modern Layouts", level: 92, badge: "Flexbox/Grid", projects: ["Portfolio", "Movie UI"] },
        { name: "JavaScript (ES6+)", level: 84, badge: "Dynamic Logic", projects: ["All Web Apps"] },
        { name: "Responsive UI/UX", level: 90, badge: "Mobile First", projects: ["All Web Apps"] },
        { name: "Glassmorphic Design Systems", level: 88, badge: "Modern Aesthetics", projects: ["Portfolio 3.0", "Movie UI"] }
      ]
    },
    {
      id: "tools",
      category: "Developer Tools & Workflow",
      icon: "fas fa-toolbox",
      description: "Version control, IDE mastery, and cloud deployment pipelines.",
      skills: [
        { name: "Git & GitHub", level: 88, badge: "Version Control", projects: ["All Repositories"] },
        { name: "VS Code", level: 95, badge: "IDE Mastery", projects: ["All Development"] },
        { name: "Jupyter & Google Colab", level: 90, badge: "Notebooks", projects: ["AI/ML Research"] },
        { name: "Figma & Wireframing", level: 80, badge: "UI Design", projects: ["Portfolio UI", "Movie UI"] },
        { name: "Vercel Deployment", level: 85, badge: "Cloud Hosting", projects: ["Portfolio 3.0", "Nova AI"] }
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
        "FastAPI high-throughput asynchronous backend"
      ],
      techStack: ["Python", "FastAPI", "LLM APIs", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/shanmukap019-png",
      demoUrl: "https://shanmukapriya.vercel.app",
      detail: {
        problem: "General-purpose chat interfaces frequently suffer from high latency, rigid context windows, and lack of specialized domain prompt routing for technical queries.",
        solution: "Engineered a low-latency conversational platform connecting a lightweight FastAPI middleware layer with state-of-the-art LLM endpoints, optimizing prompt token efficiency and retaining conversation memory.",
        architecture: "Client Web Interface (Vanilla JS / CSS) ──HTTP/REST──> FastAPI Backend (Python Async) ──Prompt Routing Engine──> LLM API Providers (OpenAI / Gemini / Groq) with streaming JSON response handling.",
        challenges: "Managing conversation context windows without causing latency spikes or excessive token consumption; implementing graceful timeout handling for external API endpoints.",
        outcome: "Achieved sub-second initial token generation responses with clean markdown rendering and seamless conversational state."
      }
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
      demoUrl: "https://shanmukapriya.vercel.app",
      detail: {
        problem: "Urban centers face recurring flood damage due to poor real-time risk modeling and lack of accessible visual simulation for emergency response teams.",
        solution: "Trained predictive classification models on historical precipitation and topographical elevation data, creating an interactive map interface highlighting flood vulnerability zones.",
        architecture: "Geospatial & Rainfall CSV Datasets ──Data Cleaning Pipeline (Pandas / NumPy)──> Scikit-Learn Classifier (Random Forest / Logistic Regression) ──FastAPI Inference API──> Visual Risk Map Dashboard.",
        challenges: "Imbalanced datasets with few severe flood event records; resolved using synthetic feature engineering and threshold adjustments for high-risk zones.",
        outcome: "Presented at competitive hackathons, providing rapid risk tier classification (Low / Moderate / Severe) under 200ms."
      }
    },
    {
      id: "kimi-ai",
      title: "Kimi AI Study Planner",
      category: "gen-ai",
      featured: true,
      icon: "fas fa-book-open-reader",
      tagline: "Personalized AI Learning Companion",
      description: "An AI-powered academic companion designed for students to generate personalized study plans, track learning milestones, query complex course material, and maintain focus routines.",
      features: [
        "Automated adaptive study schedule generation",
        "AI subject assistant for instant concept breakdowns",
        "Interactive goal & milestone progress tracker",
        "Sleek distraction-free study environment"
      ],
      techStack: ["Python", "Generative AI", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/shanmukap019-png",
      demoUrl: "https://shanmukapriya.vercel.app",
      detail: {
        problem: "Students experience cognitive overload when organizing complex syllabi and balancing study milestones across multiple technical courses.",
        solution: "Developed an AI academic assistant that digests course subjects, calculates available preparation windows, and dynamically generates modular, day-by-day learning sprints.",
        architecture: "User Curriculum Input ──LLM Prompt Decomposition Engine──> Structured Study Schedule Generator ──Local State Storage──> Interactive Focus Dashboard.",
        challenges: "Generating realistic study durations rather than overwhelming schedules; solved by setting strict heuristic constraint rules in the system prompt.",
        outcome: "Helped undergraduate peers streamline exam prep schedules with measurable improvement in consistency."
      }
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
      demoUrl: "https://shanmukapriya.vercel.app",
      paperUrl: "#",
      detail: {
        problem: "Manual screening of dental panoramic radiographs is time-intensive and susceptible to observer fatigue during busy clinical routines.",
        solution: "Engineered an image processing pipeline using OpenCV and convolutional feature extractors to detect anomalies, bone density gradients, and dental structural markers.",
        architecture: "Digital X-Ray Radiographs (DICOM/PNG) ──Preprocessing (Contrast CLAHE / Noise Reduction via OpenCV)──> Deep Learning Feature Backbone ──Anomaly Detection & Contour Highlighting──> Diagnostic Summary.",
        challenges: "Handling variations in radiograph exposure and patient positioning; implemented adaptive contrast equalization and normalized spatial filters.",
        outcome: "Demonstrated accurate contour extraction of dental landmarks in exploratory research tests, laying groundwork for future clinical decision support."
      }
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
      demoUrl: "https://shanmukapriya.vercel.app",
      detail: {
        problem: "Modern media streaming platforms frequently suffer from bloated JavaScript bundles and sluggish transitions on mobile viewports.",
        solution: "Constructed a zero-framework, hyper-optimized media catalog interface leveraging CSS Grid, Flexbox, GPU-accelerated transforms, and pure vanilla JavaScript.",
        architecture: "Semantic HTML5 Markup ──Modular CSS Design System (Custom Properties / Glassmorphism) ──Event-Driven Vanilla JS UI Controller.",
        challenges: "Maintaining 60 FPS transitions while rendering dynamic media grids on low-power mobile devices.",
        outcome: "Achieved near-perfect 98+ Google Lighthouse performance scores with zero layout shift (CLS: 0)."
      }
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
      description: "Recognized as Campus Ambassador for IIT Bombay initiatives, leading technical awareness, student hackathon participation, and campus outreach."
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
