export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
}

export interface ProjectPerformance {
  algorithmSpeed: string;
  semanticSpeed: string;
  accuracy?: string;
  deploymentPlatform: string;
  deploymentStatus: 'LIVE' | 'TESTED' | 'DEVELOPMENT';
}

export interface EditorialProject {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  stack: string[];
  description: string;
  overview: string;
  features: string[];
  architectureNodes: ArchitectureNode[];
  architectureDescription: string;
  performance: ProjectPerformance;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  certificateUrl?: string;
}

export interface EditorialSkillGroup {
  number: string;
  category: string;
  description: string;
  items: string[];
}

export interface EditorialExperience {
  number: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  highlights: string[];
  description: string;
  certificateLabel?: string;
  certificateUrl?: string;
}

export interface EditorialEducation {
  number: string;
  period: string;
  degree: string;
  institution: string;
  scoreLabel: string;
  scoreValue: string;
  description: string;
  expectedGraduation?: string;
}

export interface EditorialCertification {
  number: string;
  title: string;
  issuer: string;
  grade: string;
  year?: string;
  description: string;
  certificateUrl?: string;
}

export const PERSONAL_INFO = {
  name: "SABITHA SARAVANAN",
  shortName: "SABITHA S.",
  roleTitle: "B.Tech Information Science & Engineering Student",
  professionalIdentity: "Aspiring Full-Stack Web Developer",
  tagline: "B.Tech Information Science & Engineering Student & Aspiring Full-Stack Web Developer",
  summary: "Motivated B.Tech Information Science & Engineering student with a CGPA of 7.94 and hands-on experience in full-stack web development, C/C++ programming, APIs, databases and practical software projects. Passionate about building useful software solutions and continuously improving technical skills.",
  cgpa: "7.94 / 10",
  graduationYear: "2027",
  academicSpan: "2023 — 2027",
  college: "Women's Engineering College, PTU",
  email: "sabithasaravanan2919@gmail.com",
  location: "Puducherry, India",
  linkedin: "https://www.linkedin.com/in/sabitha19/",
  linkedinDisplay: "linkedin.com/in/sabitha19",
  github: "https://github.com/Sabitha-19",
  githubDisplay: "github.com/Sabitha-19",
  resumePath: "/assets/resume/Sabitha-Saravanan-Resume.pdf",
  profileImage: "/assets/images/profile.jpg",
};

export const EDITORIAL_SKILLS: EditorialSkillGroup[] = [
  {
    number: "01",
    category: "PROGRAMMING",
    description: "Core algorithmic logic, structured computing, and object-oriented architectures.",
    items: ["C", "C++", "Python", "Java"],
  },
  {
    number: "02",
    category: "WEB",
    description: "Semantic interface markup, client-side scripting, responsive styling, and server templates.",
    items: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    number: "03",
    category: "BACKEND & DATABASE",
    description: "Microservices architecture, query optimization, ACID transactions, and relational schemas.",
    items: ["Flask", "SQL", "MySQL"],
  },
  {
    number: "04",
    category: "TOOLS & PLATFORMS",
    description: "Development environments, local server stacks, API testing suites, and version control.",
    items: ["VS Code", "GitHub", "Google Colab", "Render", "PyCharm", "XAMPP", "Postman"],
  },
  {
    number: "05",
    category: "AREAS OF INTEREST",
    description: "Key engineering disciplines under active development and research exploration.",
    items: ["Web Development", "Data Analytics", "Artificial Intelligence", "Machine Learning"],
  },
];

export const EDITORIAL_EXPERIENCES: EditorialExperience[] = [
  {
    number: "01",
    role: "WEB DEVELOPMENT INTERN",
    company: "eVenturers Solutions Pvt. Ltd.",
    location: "Puducherry, India",
    period: "26 June 2026 — 10 July 2026",
    highlights: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Client-Side Scripting"],
    description: "Completed practical web development training with hands-on exposure to webpage design, responsive layouts and client-side scripting.",
    certificateLabel: "INTERNSHIP TRAINING CERTIFICATE ↗",
  },
  {
    number: "02",
    role: "WEB DEVELOPMENT INTERN",
    company: "Alfrin Technologies",
    location: "Puducherry, India",
    period: "June 2026 — July 2026",
    duration: "15 Days",
    highlights: ["Core Web Development", "Practical Sessions", "Live Projects", "Assessments"],
    description: "Completed an intensive practical web development internship covering core web development concepts, practical sessions, live projects and assessments.",
    certificateLabel: "CERTIFICATE ↗",
  },
  {
    number: "03",
    role: "PHP FULL STACK & API INTEGRATION INTERN",
    company: "AQUILA Innovations",
    location: "Puducherry, India",
    period: "June 2025 — July 2025",
    highlights: ["Python", "Flask", "API Integration", "Database Connectivity", "Deployment", "Backend Optimization"],
    description: "Worked on full-stack web application features, API integration, database connectivity, deployment and backend optimization.",
    certificateLabel: "CERTIFICATE ↗",
  },
];

export const EDITORIAL_PROJECTS: EditorialProject[] = [
  {
    number: "01",
    title: "SMART ATM SYSTEM",
    subtitle: "Authentication & Transaction Ledger",
    category: "Flask · Python · SQL",
    stack: ["Flask", "Python", "SQL"],
    description: "Secure ATM simulation web application with authentication and transaction management.",
    overview: "A comprehensive banking transaction simulation engineering core financial workflows. Features multi-step customer pin verification, atomic deposit and withdrawal operations, real-time balance enquiries, and structured transaction history logging with SQL integrity checks.",
    features: [
      "Customer Authentication & PIN Security",
      "Balance Enquiry with Instant Feedback",
      "Deposit Workflow with Audit Logging",
      "Atomic Withdrawal Validation",
      "Comprehensive Transaction History Ledger",
    ],
    architectureNodes: [
      { id: "1", label: "USER", sublabel: "Web Client" },
      { id: "2", label: "FRONTEND", sublabel: "Responsive UI" },
      { id: "3", label: "FLASK BACKEND", sublabel: "Route Handlers" },
      { id: "4", label: "DATABASE", sublabel: "SQL ACID Store" },
      { id: "5", label: "RESPONSE", sublabel: "Transaction Receipt" },
    ],
    architectureDescription: "User interactions transmit through encrypted HTTP sessions to the Flask controller, which executes ACID-compliant SQL queries against the ledger database before returning verifiable transaction receipts.",
    performance: {
      algorithmSpeed: "Optimized O(1) balance lookup & ACID ledger verification",
      semanticSpeed: "N/A — Not applicable",
      deploymentPlatform: "Render",
      deploymentStatus: "LIVE",
    },
    liveUrl: "https://smart-atm-system.onrender.com",
    githubUrl: "https://github.com/Sabitha-19",
    image: "/assets/images/project-smart-atm.svg",
  },
  {
    number: "02",
    title: "WEC CGPA CALCULATOR",
    subtitle: "Academic Performance Utility",
    category: "HTML · CSS · JavaScript",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Responsive web-based CGPA calculator for students.",
    overview: "Specialized academic utility engineered for Puducherry Technological University (PTU) university standards. Accurately maps letter grades to numerical points and calculates weighted semester grade averages (GPA) and cumulative grade point averages (CGPA) in real time.",
    features: [
      "GPA Semester-Wise Calculation",
      "CGPA Cumulative Weighted Calculation",
      "PTU Grade Mapping Matrix",
      "Credit-Based Dynamic Subject Scaling",
    ],
    architectureNodes: [
      { id: "1", label: "USER", sublabel: "Student Input" },
      { id: "2", label: "INPUT VALIDATOR", sublabel: "Range Sanitization" },
      { id: "3", label: "GRADE MATRIX", sublabel: "PTU Point Mapping" },
      { id: "4", label: "CALCULATION ENGINE", sublabel: "Weighted Formula" },
      { id: "5", label: "LEDGER OUTPUT", sublabel: "GPA / CGPA Display" },
    ],
    architectureDescription: "Client-side JavaScript captures course credits and grades, executes range normalization against PTU credit rules, and performs instantaneous weighted arithmetic to render precise academic scores.",
    performance: {
      algorithmSpeed: "Instantaneous client-side evaluation (< 5ms)",
      semanticSpeed: "N/A — Not applicable",
      deploymentPlatform: "GitHub Pages",
      deploymentStatus: "LIVE",
    },
    liveUrl: "https://sabitha-19.github.io/WEC_CGPA/",
    githubUrl: "https://github.com/Sabitha-19/WEC_CGPA",
    image: "/assets/images/project-cgpa.svg",
  },
  {
    number: "03",
    title: "SOURCE CODE SNIPPET FINDER",
    subtitle: "Reusable Code Repository",
    category: "Flask · Python",
    stack: ["Flask", "Python"],
    description: "Searchable repository of reusable programming code snippets organized by category.",
    overview: "Centralized developer knowledge base engineered to catalog, filter, and retrieve algorithmic implementations and boilerplate templates. Supports multi-language tagging, category indexing, and rapid snippet copy features.",
    features: [
      "Searchable Repository Index",
      "Language & Topic Categorization",
      "Syntax-Highlighted Code Presentation",
      "One-Click Snippet Extraction",
    ],
    architectureNodes: [
      { id: "1", label: "USER", sublabel: "Search & Filter" },
      { id: "2", label: "FRONTEND", sublabel: "Search Dispatcher" },
      { id: "3", label: "FLASK ROUTER", sublabel: "Query Processing" },
      { id: "4", label: "SNIPPET CATALOG", sublabel: "Categorized Index" },
      { id: "5", label: "RESULTS", sublabel: "Filtered Code Blocks" },
    ],
    architectureDescription: "Search terms query the Flask backend's structured code dictionary, which performs rapid token and tag matching to deliver categorized source code blocks to the client.",
    performance: {
      algorithmSpeed: "Sub-50ms category indexing",
      semanticSpeed: "N/A — Not applicable",
      deploymentPlatform: "Render",
      deploymentStatus: "LIVE",
    },
    liveUrl: "https://source-code-snippet-finders.onrender.com/",
    githubUrl: "https://github.com/Sabitha-19",
    image: "/assets/images/project-snippet.svg",
  },
  {
    number: "04",
    title: "PLAGIARISM & SIMILARITY DETECTION SYSTEM",
    subtitle: "Content Similarity Engine",
    category: "Python · Flask · HTML · CSS · JavaScript · MySQL · REST API",
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MySQL/XAMPP", "REST API", "Postman", "Render"],
    description: "Full-stack web application designed to detect plagiarism and content similarity with frontend-backend integration, user registration, login/logout and user management.",
    overview: "Production full-stack web application engineered for document inspection and text comparison. Integrates secure user authentication, file upload handlers, tokenization pipelines, and similarity analysis engines connected to a relational MySQL storage backend.",
    features: [
      "Document & Text File Upload",
      "Text String Similarity Comparison",
      "Source Code Pattern Comparison",
      "Secure User Authentication & Session Management",
      "Relational Database Connectivity (MySQL)",
      "RESTful API Communication & Route Isolation",
      "Similarity Percentage & Overlap Analysis",
    ],
    architectureNodes: [
      { id: "1", label: "USER", sublabel: "File / Text Input" },
      { id: "2", label: "FRONTEND", sublabel: "Auth & Upload Interface" },
      { id: "3", label: "FLASK API", sublabel: "Token & Session Auth" },
      { id: "4", label: "SIMILARITY ENGINE", sublabel: "Tokenization & Comparison" },
      { id: "5", label: "DATABASE", sublabel: "MySQL Record Archive" },
      { id: "6", label: "RESULT", sublabel: "Similarity Report" },
    ],
    architectureDescription: "Uploaded content passes through authenticated Flask endpoints into text processing routines that tokenize sentences, calculate overlap against reference documents, and log inspection audits to MySQL.",
    performance: {
      algorithmSpeed: "Benchmark not provided",
      semanticSpeed: "Benchmark not provided",
      accuracy: "Benchmark not provided",
      deploymentPlatform: "Render",
      deploymentStatus: "LIVE",
    },
    liveUrl: "https://plagiarism-similarity-detector.onrender.com",
    githubUrl: "https://github.com/Sabitha-19",
    image: "/assets/images/project-plagiarism.svg",
  },
  {
    number: "05",
    title: "USER AUTHENTICATION & MANAGEMENT REST API",
    subtitle: "Cryptographic Backend Service",
    category: "PHP · MySQL · REST API",
    stack: ["PHP", "MySQL", "REST API", "XAMPP", "Postman", "Git/GitHub"],
    description: "Secure RESTful API for user authentication and profile management.",
    overview: "Robust architectural microservice adhering to modern backend security standards. Implements cryptographic password hashing (bcrypt), stateful bearer token generation, session lifecycle enforcement, and protected CRUD profile endpoints.",
    features: [
      "User Registration with Input Sanitization",
      "Cryptographic Password Hashing (bcrypt)",
      "Stateful Bearer Token Authentication",
      "Profile Retrieval & CRUD Management",
      "Secure Logout & Session Invalidation",
      "Structured JSON Error & Status Payloads",
    ],
    architectureNodes: [
      { id: "1", label: "HTTP CLIENT", sublabel: "Postman / App" },
      { id: "2", label: "ROUTER", sublabel: "REST API Endpoint" },
      { id: "3", label: "AUTH MIDDLEWARE", sublabel: "Bearer Token Check" },
      { id: "4", label: "CRYPTO ENGINE", sublabel: "Password Hashing" },
      { id: "5", label: "DATABASE", sublabel: "MySQL Storage" },
      { id: "6", label: "JSON RESPONSE", sublabel: "Status & Claims" },
    ],
    architectureDescription: "Incoming requests are intercepted by token validation middleware. Authorized payloads execute parameterized queries against MySQL and return structured JSON responses.",
    performance: {
      algorithmSpeed: "Benchmark not provided",
      semanticSpeed: "N/A — Not applicable",
      deploymentPlatform: "Local XAMPP / Postman Verified",
      deploymentStatus: "TESTED",
    },
    githubUrl: "https://github.com/Sabitha-19",
    image: "/assets/images/project-auth-api.svg",
  },
];

export const EDITORIAL_EDUCATION: EditorialEducation[] = [
  {
    number: "01",
    period: "2023 — 2027",
    degree: "B.TECH — INFORMATION SCIENCE & ENGINEERING",
    institution: "Women's Engineering College, PTU · Puducherry, India",
    scoreLabel: "Cumulative CGPA",
    scoreValue: "7.94 / 10",
    expectedGraduation: "Expected Graduation: 2027",
    description: "Affiliated to Puducherry Technological University (PTU). Core technical focus across Data Structures, Algorithms, Relational Database Management, Web Technologies, and Software Engineering.",
  },
  {
    number: "02",
    period: "2022 — 2023",
    degree: "HIGHER SECONDARY CERTIFICATE (HSC)",
    institution: "Subramania Bharathiar Govt. Girls Hr. Sec. School",
    scoreLabel: "Academic Score",
    scoreValue: "77.6%",
    description: "Higher secondary education with intensive concentration in Higher Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
  },
  {
    number: "03",
    period: "2020 — 2021",
    degree: "SECONDARY SCHOOL LEAVING CERTIFICATE (SSLC)",
    institution: "The Roy International School",
    scoreLabel: "Board Examination",
    scoreValue: "All Pass",
    description: "Secondary academic curriculum completed with distinction in general sciences and analytical mathematical reasoning.",
  },
];

export const EDITORIAL_CERTIFICATIONS: EditorialCertification[] = [
  {
    number: "01",
    title: "Soft Skills Development",
    issuer: "NPTEL, IIT Kharagpur",
    grade: "Elite Certificate",
    year: "2024",
    description: "National programme credential covering corporate communication, workplace ethics, presentation delivery, and professional collaboration.",
    certificateUrl: "https://drive.google.com/file/d/14R-_CR_0zXGYQgOZKW4q_ENyMIG_FGys/view?usp=sharing",
  },
  {
    number: "02",
    title: "Python for Data Science Pro",
    issuer: "Udemy",
    grade: "Course Completed",
    year: "2024",
    description: "Data analysis pipelines, NumPy array processing, Pandas data manipulation, and exploratory data visualization techniques.",
    certificateUrl: "https://drive.google.com/file/d/1i0gr8ZIHkeUzzgsF__LZQrt1IXN2J3Ca/view?usp=sharing",
  },
  {
    number: "03",
    title: "VibeCoding Workshop",
    issuer: "NIT Karaikal",
    grade: "Workshop Participant",
    year: "2026",
    description: "Interactive immersion exploring modern rapid full-stack prototyping, developer tooling orchestration, and contemporary software practices.",
    certificateUrl: "https://drive.google.com/file/d/1zs22Mq7HWYSBcxTrIaJEE5U_F4PWas1Y/view?usp=sharing",
  },
];
