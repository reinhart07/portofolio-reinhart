// =====================================================================
// Semua konten portofolio ada di file ini.
// Mau tambah project / sertifikat / achievement? Cukup tambah item di array.
// =====================================================================

export const profile = {
  name: 'Reinhart Jens Robert',
  role: 'Data Scientist',
  roles: [
    'Data Scientist',
    'Machine Learning Enthusiast',
    'AI Application Developer',
    'NASA OSDR AI/ML AWG Member',
  ],
  location: 'Makassar, Indonesia',
  photo: '/rein.jpg',
  email: 'reinhartrobert23@gmail.com',
  linkedin: 'https://www.linkedin.com/in/reinhartjensrobert',
  github: 'https://github.com/reinhart07',
  // NOTE: di versi lama, link tel: dan teks yang tampil beda satu digit.
  // Di sini dipakai nomor dari link tel:. Silakan cek lagi yang benar.
  phoneHref: '+6288743508458',
  phoneLabel: '+62 887-4350-8458',
  gpa: 3.61,
}

export const about = [
  "Bachelor's degree in Informatics Engineering from Universitas Dipa Makassar (GPA 3.61/4.00) with hands-on experience in machine learning, data analysis, and AI-based application development.",
  "Track record includes internships as a Data Scientist at Home Credit Indonesia and as a Systems Analyst and Web Developer at Bank Sulselbar, alongside active involvement as an AI/ML Analysis Working Group Member at NASA's Open Science Data Repository. Experienced in building end-to-end projects across computer vision, risk prediction, and recommendation systems.",
  'Achievements include 3rd Place in a National Data Mining Competition, 2nd Place in a national-level Web Design competition, Top 10 at the Indonesia Aerospace Hackathon 2026, and Semifinalist at the PIDI DIGDAYA X Hackathon 2026 by Bank Indonesia. Backed by certifications in Machine Learning from Dicoding x DBS Foundation, MSIB Batch 7 Data Science, SAP Analytics Cloud, and Microsoft Elevate AI Skills.',
  'Able to work both independently and collaboratively, adaptive, and committed to delivering data-driven solutions with real-world impact.',
]

export const education = [
  {
    school: 'Universitas Dipa Makassar',
    period: '2022 – 2026',
    place: 'Makassar, Indonesia',
    degree: 'Bachelor of Informatics Engineering (S1)',
    detail: 'Specialization: Data Science',
    gpa: 'GPA 3.61 / 4.00',
    image: '/img/education2.JPG',
  },
  {
    school: 'SMAN 05 Makassar',
    period: '2019 – 2022',
    place: 'Makassar, Indonesia',
    degree: 'Mathematics and Natural Sciences (MIPA)',
    detail: 'Senior High School',
    image: '/img/education1.jpeg',
  },
]

export const experience = [
  {
    role: 'AI/ML AWG Member',
    org: 'NASA Open Science Data Repository',
    period: 'February 2026 – Present',
    current: true,
    image: '/img/experience4.png',
    points: [
      "Selected member of NASA's open science initiative advancing machine learning applications for space biology data analysis.",
      'Collaborate with international researchers developing Python-based analytical workflows for physiological and molecular datasets from spaceflight experiments.',
      'Apply statistical methods and ML techniques to analyze complex biological data supporting open science initiatives in space life sciences research.',
      'Contribute to monthly working group meetings and collaborative research projects with scientists from NASA, universities, and research institutions worldwide.',
    ],
  },
  {
    role: 'Data Scientist',
    org: 'Home Credit Indonesia x Rakamin Academy',
    period: 'October – November 2025',
    image: '/img/experience1.png',
    points: [
      'Developed end-to-end machine learning models for credit scoring and default risk prediction using Python and scikit-learn.',
      'Conducted data preprocessing, feature engineering, and model evaluation using ensemble methods.',
      'Built final ML pipeline as part of an industry case study for financial risk analytics.',
    ],
  },
  {
    role: 'Systems Analyst / Programmer',
    org: 'Bank Sulselbar',
    period: 'March – August 2025',
    image: '/img/experience2.jpeg',
    points: [
      'Developed a pension fund membership web application using Laravel PHP and MySQL.',
      'Acted as system analyst translating business requirements into technical specifications.',
      'Collaborated in a team to design and deploy internal banking information systems.',
    ],
  },
  {
    role: 'Delegate',
    org: 'AIESEC Future Leaders (AFL)',
    period: 'November 2024 – January 2025',
    image: '/img/experience3.jpeg',
    points: [
      'Developed leadership, communication, and collaboration skills through project-based learning.',
      'Worked in teams to build personal branding strategies on digital platforms.',
      'Delivered a final project focused on digital presence and audience engagement.',
    ],
  },
]

// category: 'Machine Learning' | 'Computer Vision' | 'Data Analysis' | 'Web App'
export const projectCategories = [
  'All',
  'Machine Learning',
  'Computer Vision',
  'Data Analysis',
  'Web App',
]

export const projects = [
  {
    title: 'SentinelNusa — AI Maritime Surveillance',
    emoji: '🛰️',
    category: 'Machine Learning',
    featured: true,
    badge: 'Top 10 Aerospace Hackathon 2026',
    image: '/img/gambar13.png',
    description:
      'AI-powered IUU fishing detection platform using Random Forest ML (91.4% accuracy) with ESA Sentinel-1 SAR, NASA VIIRS, and Global Fishing Watch satellite data.',
    tags: ['Random Forest', 'Sentinel-1 SAR', 'NASA VIIRS', 'Global Fishing Watch'],
    link: 'https://github.com/reinhart07/SentinelNusa',
  },
  {
    title: 'AgroLens AI — Platform Agritech Terintegrasi',
    emoji: '🌾',
    category: 'Machine Learning',
    featured: true,
    badge: 'PIDI DIGDAYA X Hackathon 2026',
    image: '/img/gambar12.png',
    description:
      'AI-powered agritech platform with commodity price prediction (XGBoost MAPE 11.51%), quality detection (MobileNetV2 97.83% accuracy), alternative credit scoring (RandomForest AUC 0.9275), and D2C marketplace. Built for PIDI DIGDAYA X Hackathon 2026 — Bank Indonesia & OJK.',
    tags: ['XGBoost', 'MobileNetV2', 'RandomForest', 'D2C Marketplace'],
    link: 'https://github.com/reinhart07/agrolens-ai',
  },
  {
    title: 'FloodGuard Jakarta — AI Flood Prediction',
    emoji: '🌊',
    category: 'Machine Learning',
    featured: true,
    badge: 'Proxocoris Finalist 2026',
    image: '/img/gambar11.png',
    description:
      'AI-powered flood prediction system using Random Forest ML (88.49% accuracy) with real-time weather integration for Jakarta resilience.',
    tags: ['Random Forest', 'Real-time Weather'],
    link: 'https://github.com/reinhart07/flood-prediction',
  },
  {
    title: 'Student Information System — LPK PMI Bali',
    emoji: '🎓',
    category: 'Web App',
    image: '/img/gambar15.png',
    description:
      'Full-stack web system for managing Japanese language training students, featuring Google Sheets sync, bilingual dashboard (ID/JP), academic tracking, certification records (N4, JFT, SSW), and instructor portal.',
    tags: ['React.js', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/reinhart07/lpk-pmi-bali-sis',
  },
  {
    title: 'Solar Energy Prediction System',
    emoji: '☀️',
    category: 'Machine Learning',
    image: '/img/gambar10.png',
    description:
      'ML-powered solar production forecasting with interactive mapping, analytics dashboard, and ROI calculator. Built with Python ML + PHP.',
    tags: ['Python', 'PHP', 'Forecasting'],
    link: 'https://github.com/reinhart07/solar-energy-prediction-system',
  },
  {
    title: 'MyPertamina Review Analysis',
    emoji: '⛽',
    category: 'Data Analysis',
    image: '/img/gambar14.png',
    description:
      'Data-driven UX research tool: scraping 5000+ Play Store reviews to identify user pain points via NLP keyword categorization & word cloud visualization. Found 55% of low ratings rooted in barcode/document verification flow.',
    tags: ['NLP', 'Web Scraping', 'Word Cloud'],
    link: 'https://github.com/reinhart07/mypertamina-review-analysis',
  },
  {
    title: 'Data Mining Competition Project (Indocoris)',
    emoji: '📊',
    category: 'Machine Learning',
    badge: '3rd Place',
    image: '/img/gambar9.png',
    description:
      'MSME success prediction using machine learning with hybrid feature engineering.',
    tags: ['Feature Engineering', 'Classification'],
    link: 'https://github.com/reinhart07/UMKM-Makassar-lomba-Indocoris',
  },
  {
    title: 'Home Credit Default Risk Prediction',
    emoji: '💳',
    category: 'Machine Learning',
    image: '/img/gambar8.png',
    description:
      'End-to-end machine learning project for predicting customer credit default risk.',
    tags: ['scikit-learn', 'Ensemble', 'Credit Scoring'],
    link: 'https://github.com/reinhart07/project-akhir-home-credit',
  },
  {
    title: 'Chili Pepper Disease Detection',
    emoji: '🌶️',
    category: 'Computer Vision',
    image: '/img/gambar7.png',
    description:
      'Web-based chili leaf disease detection system using computer vision techniques.',
    tags: ['Computer Vision', 'Web-based'],
    link: 'https://github.com/CodingCamp-ProjectCapstone/CProject-Machine_Learning',
  },
  {
    title: 'Animal Classification',
    emoji: '🐾',
    category: 'Computer Vision',
    image: '/img/gambar6.png',
    description:
      'Image-based animal classification using deep learning and convolutional neural networks.',
    tags: ['Deep Learning', 'CNN'],
    link: 'https://github.com/reinhart07/Deteksi-Hewan',
  },
  {
    title: 'Music Recommendation System',
    emoji: '🎵',
    category: 'Machine Learning',
    image: '/img/gambar5.png',
    description:
      'Developed a recommendation system using Content-Based and Collaborative Filtering techniques.',
    tags: ['Content-Based', 'Collaborative Filtering'],
    link: 'https://github.com/reinhart07/Rekomendasi-lagu-spotify',
  },
  {
    title: 'Indonesia Poverty Line Analysis',
    emoji: '📈',
    category: 'Data Analysis',
    image: '/img/gambar4.png',
    description:
      'Statistical analysis and visualization of poverty line data in Indonesia to identify trends and patterns.',
    tags: ['Statistics', 'Visualization'],
    link: 'https://github.com/reinhart07/Belajar-machine-learning-Dicoding',
  },
  {
    title: 'E-Commerce Dashboard',
    emoji: '📊',
    category: 'Data Analysis',
    image: '/img/gambar3.png',
    description:
      'Built an interactive E-Commerce dashboard using Streamlit for business performance monitoring.',
    tags: ['Streamlit', 'Dashboard'],
    link: 'https://github.com/reinhart07/Analisis_Data_Dicoding',
  },
  {
    title: 'Titanic Data Analysis',
    emoji: '🚢',
    category: 'Data Analysis',
    image: '/img/gambar2.png',
    description:
      'Analyzed Titanic passenger data to identify survival patterns using statistical analysis and visualization.',
    tags: ['Statistics', 'Visualization'],
    link: 'https://github.com/reinhart07/titanic',
  },
  {
    title: 'Covid-19 Distribution Analysis',
    emoji: '🦠',
    category: 'Data Analysis',
    image: '/img/gambar1.png',
    description:
      'Created and analyzed data on Covid-19 distribution in ASEAN and globally with comprehensive data visualization.',
    tags: ['Data Visualization', 'ASEAN'],
    link: 'https://github.com/reinhart07/persebaran-covid/blob/main/Analisis%20data%20Covid-19%20(ADSE).pdf',
  },
]

export const skills = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    items: ['Python', 'C++', 'PHP', 'Java', 'JavaScript'],
  },
  {
    title: 'Data Science & ML',
    emoji: '🤖',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'SQL'],
  },
  {
    title: 'Frameworks & Tools',
    emoji: '🛠️',
    items: ['Laravel', 'Streamlit', 'SAP'],
  },
  {
    title: 'Office & Design',
    emoji: '🎨',
    items: ['Microsoft Word', 'Microsoft Excel', 'PowerPoint', 'Canva'],
  },
  {
    title: 'Languages',
    emoji: '🌐',
    items: ['Indonesian (Native)', 'English (Intermediate)'],
  },
]

export const certifications = [
  {
    title: 'Microsoft Elevate Training Center 2026',
    subtitle:
      'Belajar Penerapan Data Science dengan Microsoft Fabric dan Membangun Aplikasi GenAI dengan Microsoft Azure',
    issued: 'April 2026',
    link: 'https://drive.google.com/file/d/1Lci78UvbXYuY06nJfkNr-RFpX_Nscg1m/view?usp=sharing',
  },
  {
    title: 'Independent Study – Machine Learning',
    subtitle: 'Dicoding x DBS Foundation',
    issued: 'July 2025',
    link: 'https://drive.google.com/file/d/1t4PkMcX_QJE86uNjvFWemq0us31hWOYD/view',
  },
  {
    title: 'English for Business Communication',
    issued: 'June 2025',
    link: 'https://drive.google.com/file/d/1I3LeaZgEY5x9RvDGC7PVEO5Kcwa5Ug5B/view',
  },
  {
    title: 'MSIB Batch 7 di Data Academy – Data Science',
    issued: 'March 2025',
    link: 'https://drive.google.com/file/d/1fvf_HpUOz2fs8oWPPY7vAyb6o0UeTqfp/view',
  },
  {
    title: 'Asean Data Science Explorers – SAP Analytics Cloud',
    issued: 'April 2024',
    link: 'https://drive.google.com/file/d/19CovAgFqUerYnYWPLd_6edVUBH9Jakha/view',
  },
]

export const achievements = [
  {
    title: 'Finalis Top 10 — Indonesia Aerospace Hackathon 2026',
    emoji: '🛰️',
    image: '/img/achievement6.png',
    description:
      'Top 10 finalist with SentinelNusa — AI-powered IUU fishing detection platform using Random Forest ML (91.4% accuracy) with ESA Sentinel-1 SAR, NASA VIIRS, and Global Fishing Watch satellite data.',
  },
  {
    title: 'Semifinalist — PIDI DIGDAYA X Hackathon 2026',
    emoji: '🌾',
    image: '/img/hackathon.png',
    description:
      'Bank Indonesia & OJK. Developed AgroLens AI, an integrated AI-powered agritech platform connecting farmers directly with buyers (D2C). Features include commodity price prediction (XGBoost MAPE 11.51%), quality detection (MobileNetV2 97.83% accuracy), alternative credit scoring for unbanked farmers (RandomForest AUC 0.9275), AI chatbot, and interactive maps.',
  },
  {
    title: 'Finalist — Proxocoris International Website Competition 2026',
    emoji: '🏅',
    image: '/img/achievement4.png',
    description:
      'Top finalist with FloodGuard Jakarta — an AI-powered flood prediction system using Random Forest ML (88.49% accuracy) with real-time weather integration for Jakarta resilience.',
  },
  {
    title: '3rd Place — Data Mining Competition (Indoneris 2025)',
    emoji: '🏆',
    image: '/img/achievement1.png',
    description:
      'Achieved 3rd place in a national-level data mining competition, focusing on machine learning–based business insight generation.',
  },
  {
    title: '2nd Place — Web Design Competition (Trunojoyo 2025)',
    emoji: '🥈',
    image: '/img/achievement2.png',
    description:
      'Awarded 2nd place for designing a modern, responsive, and user-centered website interface.',
  },
  {
    title: 'MSIB Batch 7 — Data Science',
    emoji: '🎓',
    image: '/img/achievement3.png',
    description:
      'Selected for the Certified Internship and Independent Study Program in Data Science under the Ministry of Education and Culture.',
  },
  {
    title: 'PKM Funding Recipient',
    emoji: '💡',
    image: '/img/achievement5.png',
    description:
      'Selected to receive funding for the Student Creativity Program (PKM), awarded by the Ministry of Education and Culture.',
  },
]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certs' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
