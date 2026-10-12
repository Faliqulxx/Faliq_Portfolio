// ─── NAVBAR LINKS ────────────────────────────────────────────────────────────
export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Gallery",
    hash: "/gallery",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
  {
    name: "AI Assistant",
    hash: "/ai-assistant",
  },
] as const;

// ─── HOME & ABOUT ──────────────────────────────────────────────────────────
export const personalData = {
  name: "Faliqul Ishbah",
  nickname: "Faliq",
  title: "Data Scientist & AI Automation Engineer",
  location: "Gresik, Indonesia",
  email: "faliqul.isback@gmail.com",
  profileImage: "/images/profile.webp",
  cvUrl: "/cv/RESUME_FALIQUL ISHBAH.pdf",
  bio: "Hello, I'm Faliq! My primary interests and expertise are in Data Science, supported by skills in Data Analysis, AI Automation, and Internet of Things (IoT). I have experience in data processing, data analysis, data visualization, and machine learning, transforming raw data into valuable insights using Python, Pandas, Scikit-learn, and SQL. In the field of AI Automation, I design and develop automated workflows using n8n, integrate RESTful APIs, and automate data pipelines to improve operational efficiency. I also have a strong interest and hands-on experience in developing IoT systems, sensor-based device monitoring, and implementing smart technologies for livestock farming and smart agriculture. My goal is to create impactful data-driven, AI-powered, and IoT-based solutions through innovative automation that delivers real-world value.",
  expertise: [
    "Data Science",
    "Data Analysis",
    "AI Automation",
    "Internet of Things (IoT)",
    "Frontend Development",
  ],
  tools: ["React", "n8n", "Python", "SQL"],
} as const;

export const educationData = [
  {
    level: "SD",
    degree: "Primary school",
    institution: "MI Islamiyah",
    field: "Natural Sciences",
    location: "Gresik, Jawa Timur, Indonesia",
    year: "2009 – 2014",
    gpa: "90.5",
    gpaMax: "100",
    logo: "/images/education/islamiyah.webp",
    description: "Pendidikan dasar di MI islamiyah.",
    details: [],
  },
  {
    level: "SMP",
    degree: "Junior High School",
    institution: "MTS Isalamiyah",
    field: "Natural Sciences",
    location: "Gresik, Jawa Timur, Indonesia",
    year: "2014 – 2017",
    gpa: "80",
    gpaMax: "100",
    logo: "/images/education/islamiyah.webp",
    description: "Pendidikan menengah pertama di MTS Isalamiyah.",
    details: [],
  },
  {
    level: "SMA",
    degree: "High School",
    institution: "Modern Islamic Boarding School Darussalam Gontor",
    field: "Natural Sciences",
    location: "Ponorogo, Jawa Timur, Indonesia",
    year: "2017 – 2021",
    gpa: "8.80",
    gpaMax: "10",
    logo: "/images/education/virtuous.webp",
    description: "Pendidikan menengah atas di Modern Islamic Boarding School Darussalam Gontor.",
    details: ["Focused on foundational science and basic statistics at PMDG (Pondok Moderen Darussalam Gontor), I balanced my studies with comprehensive Islamic religious education. This combination helped me develop analytical, disciplined, and structured problem-solving skills, alongside a strong ethical foundation ready to be applied in a professional environment."],
  },
  {
    level: "S1",
    degree: "Bachelor of Computer Science",
    institution: "University of Muhammadiyah Malang",
    field: "Informatics Engineering",
    location: "Malang, Jawa Timur, Indonesia",
    year: "2022 – 2026",
    gpa: "3.59",
    gpaMax: "4.00",
    logo: "/images/education/logoumm.webp",
    description:
      "Menempuh pendidikan S1 Teknik Informatika di Universitas Muhammadiyah Gresik dengan IPK 3.65/4.00. Fokus pada Kecerdasan Buatan, Data Science, dan Pengembangan Perangkat Lunak.",
    details: [
      "Focused on business intelligence, statistics, and machine learning, I specialized in Data Science within the Informatics Engineering program at the University of Muhammadiyah Malang. This rigorous academic path enabled me to develop strong competencies in end-to-end data handling, advanced analytics, and predictive modeling, culminating in graduating with a perfect 3.59/4.00 GPA"
    ],
  },

] as const;

export const certificatesData = [
  {
    name: "IT Support",
    image: "/images/certificate/IT suport.webp",
    issuer: "Google / Coursera",
    category: "Programming",
    issued: "2025",
  },
  {
    name: "P2KK (Pembentukan Kepribadian dan Kepemimpinan)",
    image: "/images/certificate/P2KK.webp",
    issuer: "Universitas Muhammadiyah Malang",
    category: "Other",
    issued: "2023",
  },
  {
    name: "PMM (Pengabdian Masyarakat oleh Mahasiswa)",
    image: "/images/certificate/PMM.webp",
    issuer: "DPPM UMM",
    category: "Other",
    issued: "2024",
  },
  {
    name: "TAEP (Test of Academic English Proficiency)",
    image: "/images/certificate/TAEP Certificate.webp",
    issuer: "Language Center UMM",
    category: "Other",
    issued: "2024",
  },
  {
    name: "Belajar Machine Learning untuk Pemula",
    image: "/images/certificate/dicoding.webp",
    issuer: "Dicoding Indonesia",
    category: "AI",
    issued: "2025",
  },
  {
    name: "Pengembangan Aplikasi Machine Learning",
    image: "/images/certificate/dicoding1.webp",
    issuer: "Dicoding Indonesia",
    category: "AI",
    issued: "2024",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    image: "/images/certificate/Getting Started with Data.webp",
    issuer: "Google",
    category: "Data",
    issued: "2024",
  },
  {
    name: "Classifying Data Using IBM Granite",
    image: "/images/certificate/Classifying Data Using IBM Granite.webp",
    issuer: "IBM SkillsBuild",
    category: "AI",
    issued: "2024",
  },
  {
    name: "Asean Data Science Explorers",
    image: "/images/certificate/Asean Data Science.webp",
    issuer: "SAP Analytics Cloud",
    category: "Data",
    issued: "2024",
  },
  {
    name: "The Complete Web Development Bootcamp",
    image: "/images/certificate/udemy.webp",
    issuer: "Udemy",
    category: "Web",
    issued: "2024",
  },
  {
    name: "Building Interactive Web Apps",
    image: "/images/certificate/udemy1.webp",
    issuer: "Udemy",
    category: "Web",
    issued: "2023",
  },
  {
    name: "IoT Fundamentals & Networking",
    image: "/images/certificate/ciscop.webp",
    issuer: "Cisco Networking Academy",
    category: "Programming",
    issued: "2023",
  },
  {
    name: "Google Data Analytics",
    image: "/images/certificate/Google Data Analytics.webp",
    issuer: "Google / Coursera",
    category: "Data",
    issued: "2024",
  },
  {
    name: "Microsoft Excel - Excel from Beginner to Advanced",
    image: "/images/certificate/Microsoft Excel - Excel from Beginner to Advanced 2026.webp",
    issuer: "Udemy",
    category: "Data",
    issued: "2026",
  },
  {
    name: "Beginner to Pro in Excel Financial Modeling and Valuation",
    image: "/images/certificate/Beginner to Pro in Excel Financial Modeling and Valuation.webp",
    issuer: "Udemy",
    category: "Data",
    issued: "2025",
  },
  {
    name: "Analisis Data",
    image: "/images/certificate/Data AI.webp",
    issuer: "BNSP",
    category: "AI",
    issued: "2024",
  },
  {
    name: "Meta Front-End Developer Specialization",
    image: "/images/certificate/meta.webp",
    issuer: "Meta",
    category: "Web",
    issued: "2023",
  },
  {
    name: "ASEAN Data Science Explorers (SAP Analytics)",
    image: "/images/certificate/Asean SAP.webp",
    issuer: "ASEAN Foundation & SAP",
    category: "Data",
    issued: "2024",
  },
  {
    name: "BIMTEK (Bimbingan Teknis)",
    image: "/images/certificate/BIMTEK.webp",
    issuer: "Universitas Muhammadiyah Malang",
    category: "Other",
    issued: "2023",
  },
  {
    name: "Poster Infografis",
    image: "/images/certificate/Poster Infografis.webp",
    issuer: "Universitas Muhammadiyah Malang",
    category: "Other",
    issued: "2023",
  },
  {
    name: "PESMABA (Pengenalan Studi Mahasiswa Baru)",
    image: "/images/certificate/PESMABA.webp",
    issuer: "Universitas Muhammadiyah Malang",
    category: "Other",
    issued: "2022",
  },
  {
    name: "Student Day",
    image: "/images/certificate/Student Day.webp",
    issuer: "Universitas Muhammadiyah Malang",
    category: "Other",
    issued: "2022",
  },
  {
    name: "PKN ( Praktik Kerja Nyata)",
    image: "/images/certificate/PKN.webp",
    issuer: "Universitas Muhammadiyah Malang",
    category: "Other",
    issued: "2023",
  },
] as const;

export const galleryData = [
  {
    src: "/images/gallery/G1.webp",
    caption: "Moments & Memories",
  },
  {
    src: "/images/gallery/G2.webp",
    caption: "Campus & Activities",
  },
  {
    src: "/images/gallery/G3.webp",
    caption: "Team & Journey",
  },
  {
    src: "/images/gallery/G4.webp",
    caption: "Collaboration",
  },
  {
    src: "/images/gallery/G5.webp",
    caption: "Learning & Growth",
  },
  {
    src: "/images/gallery/K1.webp",
    caption: "Community & Events",
  },
  {
    src: "/images/gallery/K2.webp",
    caption: "Event Organizing & Campus Life",
  },
  {
    src: "/images/gallery/K3.webp",
    caption: "Workshop & Engagement",
  },
  {
    src: "/images/gallery/K4.webp",
    caption: "Campus Gathering",
  },
  {
    src: "/images/gallery/K5.webp",
    caption: "Social Activities",
  },
  {
    src: "/images/gallery/P1.webp",
    caption: "Projects & Discussions",
  },
  {
    src: "/images/gallery/P2.webp",
    caption: "Presentation & Work",
  },
  {
    src: "/images/gallery/P3.webp",
    caption: "Creative Production",
  },
  {
    src: "/images/gallery/P4.webp",
    caption: "Media & Documentation",
  },
  {
    src: "/images/gallery/P5.webp",
    caption: "Visual Storytelling",
  },
  {
    src: "/images/gallery/P6.webp",
    caption: "Broadcast & Tech Setup",
  },
  {
    src: "/images/gallery/P7.webp",
    caption: "Field Documentation",
  },
  {
    src: "/images/gallery/R1.webp",
    caption: "Personal Journey",
  },
  {
    src: "/images/gallery/R2.webp",
    caption: "Milestones",
  },
  {
    src: "/images/gallery/R3.webp",
    caption: "Achievement & Recognition",
  },
  {
    src: "/images/gallery/Profil.webp",
    caption: "Profile Moment",
  },
  {
    src: "/images/gallery/Profil1.webp",
    caption: "Workspace & Portrait",
  },
  {
    src: "/images/gallery/gontor.webp",
    caption: "Pondok Modern Gontor",
  },
] as const;

// ─── PROJECTS ──────────────────────────────────────────────────────────────
export const projectsData = [
  {
    title: "SignalHR",
    category: ["web"],
    description:
      "SignalHR is an AI-powered Applicant Tracking System designed to streamline modern recruitment workflows. It enables HR teams to manage vacancies, automate resume parsing, and evaluate candidate-job compatibility using intelligent scoring algorithms. The platform delivers end-to-end recruitment analytics to optimize hiring decisions efficiently.",
    image: "images/project/signalHR/1.webp",
    screenshots: [
      "images/project/signalHR/2.webp",
      "images/project/signalHR/3.webp",
      "images/project/signalHR/4.webp",
      "images/project/signalHR/5.webp",
      "images/project/signalHR/6.webp",
    ],
    tech: [
      "/images/icon/next-js.svg",
      "/images/icon/typescript.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/postgresql.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    ],
    demoUrl: "https://hr-tools-pi.vercel.app/dashboard",
    githubUrl: "https://github.com/Faliqulxx/HR-TOOLS",
    features: [
      "Job Management: Enables HR teams to create, customize, and publish vacancies with structured requirements and salary benchmarks.",
      "AI Resume Parsing: Automatically extracts candidate profiles, skills, work history, and educational background from PDF and DOCX documents.",
      "Candidate Matchmaking: Computes an intelligent compatibility score from 0 to 100 based on required skills and qualifications.",
      "Recruitment Analytics: Visualizes applicant funnels, stage transitions, and skills distribution to monitor overall hiring performance effectively.",
    ],
    languages: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "AI",
    ],
  },
  {
    title: "Sistem Informasi Logistik CGN",
    category: ["web"],
    description:
      "CGN Logistics Information System is an enterprise digital platform designed to optimize supply chain and warehouse operations. It streamlines inventory tracking, delivery monitoring, and logistics performance analytics to maximize overall organizational efficiency. The system ensures high data security and an intuitive interface for seamless operational management.",
    screenshots: [
      "images/project/cekresi/1.webp",
      "images/project/cekresi/3.webp",
      "images/project/cekresi/4.webp",
      "images/project/cekresi/2.webp",
      "images/project/cekresi/6.webp",
    ],
    image: "images/project/cekresi/1.webp",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Inventory Management: Tracks, organizes, and optimizes warehouse stock levels in real time for efficient resource allocation.",
      "Stock Oversight: Empowers administrative control with automated alerts and accurate logs of all incoming and outgoing goods.",
      "Delivery Monitoring: Offers end-to-end shipment visibility, allowing logistics teams to track distribution status and ensure timely deliveries.",
      "Performance Analytics: Delivers comprehensive operational reports and data visualizations to identify logistical bottlenecks and improve efficiency.",
    ],
    languages: ["Laravel 10", "Bootstrap 5", "MySQL 8.0", "jQuery"],
  },
  {
    title: "Shopee App Review Intelligence Dashboard",
    category: ["data", "web"],
    description:
      "This project is an interactive analytics dashboard engineered to extract actionable business insights from Shopee customer reviews. It leverages Natural Language Processing and sentiment analysis to evaluate user feedback across various ratings and categories. The platform empowers product teams to identify common complaints, satisfaction trends, and feature improvement areas.",
    image: "images/project/shopee-review-intelligence/1.webp",
    screenshots: [
      "images/project/shopee-review-intelligence/2.webp",
      "images/project/shopee-review-intelligence/3.webp",
      "images/project/shopee-review-intelligence/4.webp",
      "images/project/shopee-review-intelligence/5.webp",
      "images/project/shopee-review-intelligence/6.webp",
    ],
    tech: [
      "/images/icon/python.svg",
      "/images/icon/pandas.svg",
      "/images/icon/numpy.svg",
      "/images/icon/scikit-learn.svg",
      "/images/icon/Streamlit.svg",
    ],
    demoUrl: "https://shopee-app-review-intelligence-dash.vercel.app",
    githubUrl:
      "https://github.com/Faliqulxx/Shopee-App-Review-Intelligence-Dashboard",
    features: [
      "Sentiment Analysis: Automatically classifies customer reviews into positive, neutral, and negative categories using machine learning pipelines.",
      "Rating Distribution: Visualizes user satisfaction levels and rating breakdowns across diverse time intervals and product categories.",
      "Trend Discovery: Uncovers emerging discussion topics and recurring user complaints through automated Indonesian text mining algorithms.",
      "Interactive Visualizations: Displays dynamic charts and summary metrics to help stakeholders make data-driven product improvement decisions.",
    ],
    languages: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "NLP",
    ],
  },
  {
    title: "E-Commerce Ikan Me",
    category: ["web"],
    description:
      "E-Commerce Ikan Me is a specialized digital marketplace developed to empower local freshwater fish farmers in Berasan Mulya. The platform connects rural producers directly with regional consumers to expand market reach and boost village economic growth. It facilitates transparent transactions, product cataloging, and localized delivery coordination.",
    screenshots: [
      "images/project/ikanme/1.webp",
      "images/project/ikanme/2.webp",
      "images/project/ikanme/3.webp",
      "images/project/ikanme/4.webp",
      "images/project/ikanme/6.webp",
    ],
    image: "images/project/ikanme/1.webp",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Merchant Storefronts: Provides dedicated merchant portals for local fish farmers to showcase, price, and manage their aquaculture harvests.",
      "Direct Marketplace: Facilitates seamless transactions between buyers and sellers with comprehensive product catalogs and search filters.",
      "Delivery Coordination: Streamlines order processing and logistics dispatch to ensure freshwater products arrive fresh and on schedule.",
      "Order Tracking: Offers transaction tracking and invoice generation for transparent sales monitoring by local fish farmers.",
    ],
    languages: ["Laravel 9", "Bootstrap 5", "MySQL", "jQuery"],
  },
  {
    title: "Match Schedule MPL Indonesia",
    category: ["web"],
    description:
      "This website is a demonstration of a clone that imitates the appearance and features of the official MPL Indonesia website. It provides information similar to the actual MPL Indonesia website, including match schedules, team listings, and standings.",
    screenshots: [
      "images/project/mpl/2.webp",
      "images/project/mpl/3.webp",
      "images/project/mpl/4.webp",
      "images/project/mpl/5.webp",
    ],
    image: "images/project/mpl/1.webp",
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://mpl-id.vercel.app/",
    githubUrl: null,
    features: [
      "Match Schedules: Provides information about the schedule of matches in the MPL Indonesia league.",
      "Team Listings: Displays a list of teams participating in the MPL Indonesia league.",
      "Standings: Shows the current standings of the teams in the league, indicating their performance.",
      "Past Match Results: Displays the results and summaries of previous matches in the MPL Indonesia league.",
    ],
    languages: ["Next JS 13", "Tailwind CSS 3", "Framer Motion", "Typescript"],
  },
  {
    title: "Autogate RFID",
    category: ["data", "web"],
    description:
      "Autogate RFID is an integrated IoT smart parking and barrier gate prototype built for residential and commercial security. The system automates vehicle access using RFID authentication, ultrasonic sensors, and microcontrollers paired with a web monitoring dashboard. It provides real-time logging, gate automation, and visual entry status indicators.",
    screenshots: [
      "images/project/autogate/1.webp",
      "images/project/autogate/2.webp",
      "images/project/autogate/3.webp",
      "images/project/autogate/ur.webp",
      "images/project/autogate/5.webp",
      "images/project/autogate/7.webp",
    ],
    image: "images/project/autogate/1.webp",
    tech: [
      "/images/icon/next-js.svg",
      "/images/icon/typescript.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/supabase.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "RFID Authentication: Validates registered vehicle keycards instantly to permit or restrict physical entry into secured parking zones.",
      "Automated Barrier: Controls motorized gate movement via servo actuators triggered automatically upon successful user identity verification.",
      "Obstacle Detection: Uses ultrasonic distance sensors to detect vehicle presence and prevent accidental gate closure during transit.",
      "Real-time Monitoring: Logs vehicle timestamps and access events to a centralized web dashboard for security oversight.",
    ],
    languages: ["ESP32", "Arduino IDE", "C++", "React", "Supabase"],
  },
  {
    title: "Multi-Service AI Assistant Bot",
    category: ["data"],
    description:
      "Multi-Service AI Assistant Bot is an automated conversational system powered by n8n workflows and large language models. It delivers unified AI assistance across academic guidance, personal expense tracking, appointment scheduling, and car rental inquiries. The bot utilizes intelligent semantic routing to deliver precise, context-aware responses seamlessly.",
    screenshots: [
      "images/project/automation-ai/1.webp",
      "images/project/automation-ai/2.webp",
      "images/project/automation-ai/3.webp",
      "images/project/automation-ai/4.webp",
    ],
    image: "images/project/automation-ai/1.webp",
    tech: [
      "/images/icon/n8n.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      "/images/icon/supabase.svg",
      "/images/icon/postgresql.svg",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/faliqulxx",
    features: [
      "Academic Guidance: Employs Retrieval-Augmented Generation to answer complex university guidelines and academic policies using vector embeddings.",
      "Financial Tracking: Automatically logs user expenses and income entries into a database via conversational chat commands with alerts.",
      "Booking & Rentals: Facilitates rapid appointment scheduling and vehicle availability lookups through dynamic API integrations and queries.",
      "Intent Routing: Utilizes conditional workflow logic to direct user inquiries to the appropriate service module without conflict.",
    ],
    languages: ["n8n", "OpenAI API", "Supabase", "PostgreSQL"],
  },
  {
    title: "WhatsApp RAG AI Assistant Chatbot",
    category: ["data"],
    description:
      "This project is a 24/7 intelligent WhatsApp assistant that integrates n8n orchestration with OpenAI embeddings and vector databases. It utilizes Retrieval-Augmented Generation to provide verified campus regulations and academic guidance directly to students. The system eliminates hallucinations while offering an accessible messaging interface for everyday academic queries.",
    screenshots: [
      "images/project/chatbot_ai/1.webp",
      "images/project/chatbot_ai/2.webp",
      "images/project/chatbot_ai/3.webp",
      "images/project/chatbot_ai/4.webp",
      "images/project/chatbot_ai/5.webp",
    ],
    image: "images/project/chatbot_ai/1.webp",
    tech: [
      "/images/icon/n8n.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      "/images/icon/supabase.svg",
      "/images/icon/postgresql.svg",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/Faliqulxx/Chatbot-RAG-n8n",
    features: [
      "RAG Architecture: Grounded on authoritative campus documentation to ensure factual accuracy and eliminate artificial intelligence hallucinations.",
      "Semantic Search: Leverages vector embeddings and cosine similarity search to retrieve the most relevant knowledge base paragraphs.",
      "WhatsApp Gateway: Connects intelligent backend workflows directly with WhatsApp for instant, frictionless mobile access anytime.",
      "Automated Pipelines: Uses n8n to orchestrate webhook payloads, vector lookups, and conversational responses without manual intervention.",
    ],
    languages: ["n8n", "WhatsApp API", "OpenAI API", "Supabase", "PostgreSQL"],
  },
  {
    title: "Cat Breed Classification (Streamlit)",
    category: ["data", "web"],
    description:
      "This project is an interactive computer vision web application developed to identify and classify 12 distinct cat breeds from images. It evaluates deep learning architectures including Custom CNN, MobileNetV2, and ResNet50 to determine optimal prediction accuracy. The solution features an intuitive Streamlit dashboard for real-time model inference and diagnostic analysis.",
    image: "images/project/cat-breed/1.webp",
    screenshots: [
      "images/project/cat-breed/1.webp",
      "images/project/cat-breed/2.webp",
      "images/project/cat-breed/3.webp",
      "images/project/cat-breed/4.webp",
      "images/project/cat-breed/5.webp",
      "images/project/cat-breed/6.webp",
      "images/project/cat-breed/7.webp",
    ],
    tech: [
      "/images/icon/python.svg",
      "/images/icon/tensorflow.svg",
      "/images/icon/keras.svg",
      "/images/icon/streamlit.svg",
      "/images/icon/opencv.svg",
    ],
    demoUrl: null,
    githubUrl: "https://github.com/Faliqulxx/UAP_Machine_Learning",
    features: [
      "Multi-Class Recognition: Identifies 12 different domestic cat breeds with high precision using transfer learning architectures.",
      "Model Benchmarking: Compares Custom CNN, MobileNetV2, and ResNet50 performance to evaluate accuracy and computational efficiency.",
      "Confidence Scoring: Displays detailed prediction probabilities across all possible breed categories with interactive visual bar charts.",
      "Performance Metrics: Visualizes training accuracy-loss curves and confusion matrices directly inside the interactive user dashboard.",
    ],
    languages: [
      "Python",
      "Streamlit",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
  },
  {
    title: "HR-TOOLS",
    category: ["web"],
    description:
      "HR-TOOLS is a comprehensive human resource management web application designed to streamline internal company administrative processes. The platform simplifies employee record management, recruitment pipeline tracking, performance appraisals, and geolocation-based attendance verification. It enables organizations to boost operational efficiency and maintain reliable workforce documentation.",
    image: "images/project/hr-tools/1.webp",
    screenshots: [
      "images/project/hr-tools/2.webp",
      "images/project/hr-tools/3.webp",
      "images/project/hr-tools/4.webp",
      "images/project/hr-tools/5.webp",
      "images/project/hr-tools/6.webp",
    ],
    tech: [
      "/images/icon/bootstrap.svg",
      "/images/icon/leaflet.svg",
      "/images/icon/codeigniter.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Employee Management: Manages comprehensive employee profiles, departmental records, and employment histories in a centralized relational database.",
      "Recruitment Tracking: Organizes candidate pipelines from job requisition to applicant screening and interview scheduling seamlessly.",
      "Performance Appraisals: Evaluates staff productivity and KPI milestones through structured appraisal forms and periodic review cycles.",
      "Geolocation Attendance: Validates daily employee check-ins and check-outs using Leaflet interactive maps and GPS coordinate verification.",
    ],
    languages: ["CodeIgniter 3", "Bootstrap 3", "MySQL", "Leaflet", "jQuery"],
  },
  {
    title: "Cat Breed Classification (React)",
    category: ["data", "web"],
    description:
      "This system is a full-stack deep learning web platform engineered to classify 12 cat breeds with 82% benchmark accuracy. It pairs a high-performance FastAPI inference backend with a modern, animated React frontend for frictionless image analysis. Users receive instant predictions, probability breakdowns, and comprehensive breed profile insights upon image upload.",
    image: "images/project/cat-breed-classification/1.webp",
    screenshots: [
      "images/project/cat-breed-classification/2.webp",
      "images/project/cat-breed-classification/3.webp",
      "images/project/cat-breed-classification/4.webp",
    ],
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "/images/icon/python.svg",
      "/images/icon/tensorflow.svg",
    ],
    demoUrl: "https://cat-breed-classification.vercel.app/",
    githubUrl: "https://github.com/Faliqulxx/Cat-Breed-Classification",
    features: [
      "Image Inference: Classifies uploaded cat photos into 12 recognized breeds instantly using an optimized MobileNetV2 model.",
      "Probability Breakdown: Shows sorted confidence scores and percentage distributions across all classes with animated progress indicators.",
      "High-Speed API: Delivers rapid prediction endpoints using an asynchronous FastAPI service tailored for machine learning workloads.",
      "Responsive Dashboard: Features a sleek, responsive interface built with React, Vite, Tailwind CSS, and Framer Motion animations.",
    ],
    languages: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "TensorFlow",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI UI Chat",
    category: ["web"],
    description:
      "AI UI Chat is a contemporary conversational AI interface crafted to emulate leading chatbots like ChatGPT and Gemini. It provides a polished dark-mode environment featuring streaming message animations, prompt suggestions, and structured chat history. The project emphasizes intuitive responsiveness, accessibility, and modular architecture ready for language model integration.",
    image: "images/project/ai-ui-chat/1.webp",
    screenshots: [
      "images/project/ai-ui-chat/2.webp",
      "images/project/ai-ui-chat/3.webp",
      "images/project/ai-ui-chat/4.webp",
      "images/project/ai-ui-chat/5.webp",
      "images/project/ai-ui-chat/6.webp",
      "images/project/ai-ui-chat/7.webp",
    ],
    tech: [
      "/images/icon/next-js.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "/images/icon/typescript.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://avatars.githubusercontent.com/u/139895814",
    ],
    demoUrl: "https://ai-ui-chat.vercel.app/",
    githubUrl: "https://github.com/Faliqulxx/AI-uiChat",
    features: [
      "Streaming Conversations: Simulates real-time artificial intelligence responses with realistic typing indicators and dynamic streaming text effects.",
      "Session Management: Stores and organizes chat histories, allowing users to switch, rename, or clear active conversations effortlessly.",
      "Prompt Templates: Offers pre-built suggestions and creative starters to help users initiate productive discussions right away.",
      "Modern Dark Mode: Delivers a refined dark-themed aesthetic with accessible typography and fluid Framer Motion micro-interactions.",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Coffee Cafe",
    category: ["web"],
    description:
      "Coffee Cafe is a visually immersive landing page created for a specialty artisanal coffee shop brand. It showcases signature beverage menus, company heritage, customer testimonials, and physical store locations through a clean, responsive layout. The website delivers smooth navigational transitions and mobile-first optimization to drive customer foot traffic.",
    image: "images/project/coffee-cafe/1.webp",
    screenshots: [
      "images/project/coffee-cafe/2.webp",
      "images/project/coffee-cafe/3.webp",
      "images/project/coffee-cafe/4.webp",
      "images/project/coffee-cafe/5.webp",
      "images/project/coffee-cafe/6.webp",
    ],
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "/images/icon/javascript.svg",
      "/images/icon/bootstrap.svg",
    ],
    demoUrl: "https://coffe-caf-two.vercel.app/",
    githubUrl: "https://github.com/Faliqulxx/coffe-caf",
    features: [
      "Interactive Showcase: Displays signature coffee blends and seasonal menu items with high-resolution imagery and pricing information.",
      "Brand Storytelling: Presents café origins, roasting philosophy, and commitment to quality beans in an engaging narrative layout.",
      "Store Locator: Provides café operating hours, physical address details, and quick social media connectivity for visitors.",
      "Mobile-First Design: Ensures rapid loading speeds and intuitive touch navigation across smartphones, tablets, and desktop displays.",
    ],
    languages: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    title: "POS (Point of Sale)",
    category: ["web"],
    description:
      "POS (Point of Sale) is an intuitive retail management web application built to accelerate daily checkout transactions and store operations. It features a responsive cashier terminal, real-time inventory tracking, flexible cart discounting, and comprehensive sales reporting. The interface is optimized for speed, precision, and multi-device usability in retail environments.",
    image: "images/project/pos/1.webp",
    screenshots: [
      "images/project/pos/2.webp",
      "images/project/pos/3.webp",
      "images/project/pos/4.webp",
      "images/project/pos/5.webp",
    ],
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/icon/typescript.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://pos-point-of-sale-three.vercel.app/dashboard",
    githubUrl: "https://github.com/Faliqulxx/POS-point-of-sale",
    features: [
      "Cashier Terminal: Accelerates order processing with rapid product scanning, quantity adjustments, and custom discount calculation tools.",
      "Inventory Control: Tracks product stock levels, categories, and low-inventory warnings automatically to prevent stockouts during operations.",
      "Transaction History: Records completed sales, customer data, and itemized receipts for transparent financial auditing and order reviews.",
      "Analytics Dashboard: Highlights key business metrics, total daily revenue, and best-selling products through clean visual cards.",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Digital Wedding Invitations",
    category: ["web"],
    description:
      "Digital Wedding Invitations is an elegant online invitation platform designed to deliver unforgettable event announcements for couples. It combines interactive RSVP confirmation, live countdown timers, couple stories, event maps, and digital gift registries. The application ensures an emotionally engaging, mobile-optimized experience for wedding guests worldwide.",
    image: "images/project/digital-wedding-invitations/1.webp",
    screenshots: [
      "images/project/digital-wedding-invitations/2.webp",
      "images/project/digital-wedding-invitations/3.webp",
      "images/project/digital-wedding-invitations/4.webp",
      "images/project/digital-wedding-invitations/5.webp",
      "images/project/digital-wedding-invitations/6.webp",
    ],
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/icon/typescript.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://digital-wedding-invitations-rho.vercel.app/",
    githubUrl: "https://github.com/Faliqulxx/digital-wedding-invitations",
    features: [
      "Personalized Greetings: Renders customized guest names dynamically via URL parameters to make every invitation feel personal and exclusive.",
      "Interactive RSVP: Allows invited guests to confirm attendance and submit heartfelt congratulations messages directly through the platform.",
      "Event Schedule: Integrates ceremony timelines, dress codes, and interactive Google Maps links for effortless venue navigation.",
      "Digital Gift Registry: Provides secure digital bank transfer details and automated gift confirmation for attending or remote guests.",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "PawMart POS",
    category: ["web"],
    description:
      "PawMart POS is a specialized point-of-sale and pet shop management web application tailored for modern pet care businesses. It integrates retail cashier transactions, grooming service queue management, pet hotel boarding maps, and customer loyalty reward tracking into a unified dashboard. The platform delivers responsive cross-device usability to optimize daily pet store operational efficiency.",
    image: "images/project/PawMart/PawMart POS_ Solusi Pet Shop Terpadu.webp",
    screenshots: [
      "images/project/PawMart/01_dashboard.webp",
      "images/project/PawMart/02_kasir_pos.webp",
      "images/project/PawMart/04_produk.webp",
      "images/project/PawMart/08_penitipan_peta.webp",
      "images/project/PawMart/00_login.webp",
    ],
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/icon/typescript.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://paw-mart-nine.vercel.app",
    githubUrl: "https://github.com/Faliqulxx/PawMart",
    features: [
      "Cashier & POS Terminal: Accelerates retail checkouts with barcode scanning, instant receipt printing, flexible payment options, and tax calculations.",
      "Pet Care Services: Manages grooming queues and scheduled service appointments with real-time progress indicators and technician assignment tools.",
      "Pet Boarding Grid: Provides an interactive visual room grid to track kennel occupancy, check-in schedules, and special pet needs.",
      "Customer Loyalty Club: Tracks membership tier progressions, reward point redemptions, and custom promotional vouchers for recurring pet owners.",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Recharts",
    ],
  },
  {
    title: "BanguMart POS",
    category: ["web"],
    description:
      "BanguMart POS is a comprehensive retail and wholesale management web platform engineered specifically for building material and hardware supply stores. It streamlines multi-unit inventory tracking, tiered customer pricing, contractor credit receivables, and job-site delivery logistics in one centralized interface. The system maximizes cash-flow visibility and operational efficiency across store branches.",
    image: "images/project/BanguMart/01-dashboard.webp",
    screenshots: [
      "images/project/BanguMart/01-dashboard.webp",
      "images/project/BanguMart/05-piutang-kontraktor.webp",
      "images/project/BanguMart/12-pengaturan-toko.webp",
      "images/project/BanguMart/00-login.webp",
    ],
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "/images/icon/typescript.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://bangumart.vercel.app",
    githubUrl: "https://github.com/Faliqulxx/BanguMart",
    features: [
      "Multi-Unit Pricing: Accommodates flexible sales pricing across multiple packaging units including bags, square meters, rods, and bulk bundles.",
      "Contractor Receivables: Manages credit lines, project debt billing, and installment repayment histories for registered contractor partners seamlessly.",
      "Delivery Logistics: Generates formal delivery orders and tracks fleet dispatch status directly to construction project job-site destinations.",
      "Material Estimator: Calculates required quantities of cement, sand, and bricks dynamically to generate immediate price quotations for clients.",
    ],
    languages: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Recharts",
    ],
  },
] as const;

// ─── SKILLS ────────────────────────────────────────────────────────────────
export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Codeigneter",
  "Laravel",
  "React",
  "MYSQL",
  "Git",
  "python",
  "cisco",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 1,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 2,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 3,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 4,
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 5,
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 6,
    imgUrl: "/images/icon/antigravity.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "/images/icon/cisco.svg",
  },
  {
    id: 9,
    imgUrl: "/images/icon/claude.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/claudecode.svg",
  },
  {
    id: 11,
    imgUrl: "/images/icon/codeigniter.svg",
  },
  {
    id: 12,
    imgUrl: "/images/icon/colab.svg",
  },
  {
    id: 13,
    imgUrl: "/images/icon/deepseek.svg",
  },
  {
    id: 14,
    imgUrl: "/images/icon/figma.svg",
  },
  {
    id: 15,
    imgUrl: "/images/icon/framer-motion.svg",
  },
  {
    id: 16,
    imgUrl: "/images/icon/gemini.svg",
  },
  {
    id: 17,
    imgUrl: "/images/icon/githubcopilot.svg",
  },
  {
    id: 18,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 19,
    imgUrl: "/images/icon/jquery-vertical.svg",
  },
  {
    id: 20,
    imgUrl: "/images/icon/keras.svg",
  },
  {
    id: 21,
    imgUrl: "/images/icon/langchain.svg",
  },
  {
    id: 22,
    imgUrl: "/images/icon/leaflet.svg",
  },
  {
    id: 23,
    imgUrl: "/images/icon/mysql.svg",
  },
  {
    id: 24,
    imgUrl: "/images/icon/n8n.svg",
  },
  {
    id: 25,
    imgUrl: "/images/icon/next-js.svg",
  },
  {
    id: 26,
    imgUrl: "/images/icon/notion.svg",
  },
  {
    id: 27,
    imgUrl: "/images/icon/openai.svg",
  },
  {
    id: 28,
    imgUrl: "/images/icon/opencv.svg",
  },
  {
    id: 29,
    imgUrl: "/images/icon/php.svg",
  },
  {
    id: 30,
    imgUrl: "/images/icon/postgresql.svg",
  },
  {
    id: 31,
    imgUrl: "/images/icon/python.svg",
  },
  {
    id: 32,
    imgUrl: "/images/icon/Streamlit.svg",
  },
  {
    id: 33,
    imgUrl: "/images/icon/supabase.svg",
  },
  {
    id: 34,
    imgUrl: "/images/icon/tensorflow.svg",
  },
  {
    id: 35,
    imgUrl: "/images/icon/typescript.svg",
  },
  {
    id: 36,
    imgUrl: "/images/icon/vercel.svg",
  },
  {
    id: 37,
    imgUrl: "/images/icon/vscode.svg",
  },
  {
    id: 38,
    imgUrl: "/images/icon/windows.svg",
  },
] as const;

// ─── EXPERIENCE ────────────────────────────────────────────────────────────
export const experiencesData = [
  {
    title: "Teaching Assistant, Information Systems",
    location: "Universitas Muhammadiyah Malang (UMM)",
    description:
      "Supported lecturers and students in the Information Systems course, from preparing lab materials to guiding students through assignments and projects.",
    icon: "CgWorkAlt",
    date: "Jan 2026 - May 2026",
    image: "/images/Experience/Teaching Assistant, Information Systems/1.webp",
  },
  {
    title: "AI Automation  (Freelance)",
    location: "Gresik",
    description:
      "Worked as an AI Automation Intern focusing on the development of an AI-based chatbot for the Informatics Study Program. Designed and implemented automated workflows, integrated APIs, and supported chatbot functionality to provide academic information and improve user interaction efficiency.",
    icon: "CgWorkAlt",
    date: "Jul 2025 - Present",
    image: "/images/Experience/AI Automation Engineer/1.webp",
  },
  {
    title: "Web Programmer (Intern)",
    location: "DISPARTA Kab. Pasuruan",
    description:
      "Maintained and improved official websites for DISPARTA and OnTrip, including bug fixing, feature enhancements, performance optimization, and resolving user-reported issues. Collaborated with stakeholders to ensure system reliability, usability, and alignment with organizational requirements.",
    icon: "CgWorkAlt",
    date: "Jul 2025 - Aug 2025",
    image: "/images/Experience/Web Programmer (Intern)/1.webp",
  },
  {
    title: "Data Scientist (Kampus Merdeka)",
    location: "Telkom Indonesia",
    description:
      "Worked as a Data Scientist through the Kampus Merdeka program, focusing on data analysis and data-driven feature development for HR tools. Performed data processing, analysis, and visualization related to employee attendance, shift patterns, leave and overtime records, and employee performance assessments to support operational and decision-making processes.",
    icon: "CgWorkAlt",
    date: "Aug 2024 - Feb 2025",
    image: "/images/Experience/Data Analyst/1.webp",
  },
  {
    title: "Software Engineer (Freelance)",
    location: "Gresik",
    description:
      "Worked as a freelance web developer supporting UMKM and small online businesses by developing, customizing, and maintaining websites and online stores. Handled feature implementation, bug fixing, UI improvements, and basic system optimization to ensure usability, reliability, and alignment with client requirements.",
    icon: "CgWorkAlt",
    date: "Mar 2022 - Dec 2022",
    image: "/images/Experience/Software Engineer/1.webp",
  },
  {
    title: "Photo & Video Grapher",
    location: "Pondok Modern Darussalam Gontor",
    description:
      "Documented campus life and official events at Pondok Modern Darussalam Gontor, from shooting and editing through to final delivery of photo and video content.",
    icon: "CgWorkAlt",
    date: "2020 - 2021",
    image: "/images/Experience/Photo & Video Grapher/1.webp",
  },
  {
    title: "Building Secretary (Sekretaris Gedung)",
    location: "Pondok Modern Darussalam Gontor",
    description:
      "Handled the administration of a student dormitory building, keeping records, correspondence, and daily coordination running smoothly.",
    icon: "CgWorkAlt",
    date: "2020",
    image: "/images/Experience/Building Secretary/1.webp",
  },
] as const;

// ─── CONTACT ───────────────────────────────────────────────────────────────
export const contactData = {
  email: "faliqul.isback@gmail.com",
  linkedin: "https://www.linkedin.com/in/faliqulishbah/",
  github: "https://github.com/Faliqulxx",
  instagram: "https://www.instagram.com/Faliqulx/",
} as const;

