export const personalInfo = {
  name: 'Rakesh G',
  title: 'Data Analyst | AI & Data Science Student',
  location: 'Chennai, India',
  email: 'rakee4407@gmail.com',
  github: 'https://github.com/rakesh4407',
  linkedin: 'https://linkedin.com/in/rakesh-bca',
  website: 'https://personal-portfolio-liard-rho-69.vercel.app',
} as const;

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  specialization: 'Artificial Intelligence & Data Science',
  university: 'K.R. Mangalam University',
  period: '2024–2027',
  cgpa: '9.22/10',
} as const;

export const skills = [
  {
    category: 'Programming',
    icon: 'Code2',
    items: ['Python', 'SQL', 'R', 'Java', 'C++'],
  },
  {
    category: 'Data Analytics',
    icon: 'BarChart3',
    items: ['Pandas', 'NumPy', 'Data Cleaning', 'EDA', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Business Intelligence',
    icon: 'PieChart',
    items: ['Power BI', 'Microsoft Excel'],
  },
  {
    category: 'Databases & Tools',
    icon: 'Database',
    items: ['MySQL', 'MongoDB', 'Git', 'Flask'],
  },
  {
    category: 'Machine Learning',
    icon: 'Brain',
    items: ['Scikit-learn', 'Predictive Modeling'],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
] as const;

/*
 * ──────────────────────────────────────────────────────────
 *  PROJECTS — EDIT GITHUB URLS BELOW
 *  Replace placeholder URLs with your actual repository URLs.
 *  Format: https://github.com/rakesh4407/<repo-name>
 * ──────────────────────────────────────────────────────────
 */
export const projects = [
  {
    id: 1,
    title: 'Regional Sales Analysis',
    tagline: 'Data-driven revenue insights across US regions',
    description:
      'Analyzed four years of US regional sales data to identify revenue patterns, profitability, and business opportunities across different channels and regions.',
    problem:
      'A business needed to understand which sales channels and regions were driving profitability versus just volume, and where budget variance was occurring.',
    methodology:
      'Performed data cleaning and transformation using Pandas. Conducted exploratory data analysis with Matplotlib and Seaborn to visualize trends. Built an interactive Power BI dashboard for stakeholders.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
    achievements: [
      'Discovered that the Export channel contributed ~15% of sales volume while delivering the highest profit margin of ~38%',
      'Developed an interactive Power BI dashboard to monitor revenue, profit, and budget variance',
      'Identified key seasonal trends and regional performance disparities',
    ],
    // TODO: Replace with actual repository URL, e.g.:
    // github: 'https://github.com/rakesh4407/regional-sales-analysis',
    github: 'https://github.com/rakesh4407',
    category: 'Data Analytics',
  },
  {
    id: 2,
    title: 'SSL Certificate Renewal Dashboard',
    tagline: 'Full-stack enterprise certificate management system',
    description:
      'Developed a full-stack dashboard to centralize SSL certificate monitoring and renewal tracking for enterprise environments.',
    problem:
      'Organizations managing hundreds of SSL certificates lacked a centralized system to track expiry dates, resulting in missed renewals and potential security risks.',
    methodology:
      'Built a PHP backend with MySQL database for certificate data storage. Developed a Python-based TLS scanner for automated metadata extraction. Created Chart.js-powered analytics views with role-based access control.',
    technologies: ['PHP', 'Python', 'MySQL', 'Chart.js'],
    achievements: [
      'Built role-based authentication system for multi-user access',
      'Implemented automated risk categorization: Critical, Urgent, and Reminder classifications',
      'Added certificate expiry monitoring with real-time analytics dashboard',
      'Developed Excel import/export functionality for bulk operations',
    ],
    // TODO: Replace with actual repository URL, e.g.:
    // github: 'https://github.com/rakesh4407/ssl-certificate-dashboard',
    github: 'https://github.com/rakesh4407',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Customer Churn Prediction & Retention Analytics',
    tagline: 'ML-powered customer retention risk analysis',
    description:
      'Developed a machine learning application to predict customer churn and help businesses understand customer retention risks using telecom data.',
    problem:
      'Telecom businesses needed to proactively identify customers likely to churn and understand key retention drivers to reduce revenue loss.',
    methodology:
      'Preprocessed 7,000+ customer records using Pandas. Trained a Random Forest classifier with Scikit-learn, optimizing for precision-recall balance. Built a Flask web app with real-time prediction, confidence scoring, and KPI dashboard.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
    achievements: [
      'Built Random Forest classification model on 7,000+ telecom customer records',
      'Implemented real-time churn prediction with confidence scoring',
      'Created KPI dashboard with feature importance visualization',
      'Delivered business-oriented insights for targeted retention strategies',
    ],
    // TODO: Replace with actual repository URL, e.g.:
    // github: 'https://github.com/rakesh4407/customer-churn-prediction',
    github: 'https://github.com/rakesh4407',
    category: 'Machine Learning',
  },
] as const;

export const experience = {
  role: 'Data Science Intern',
  company: 'The SSL Lock',
  location: 'Chennai',
  period: 'June 2025 – June 2026',
  responsibilities: [
    'Built a full-stack SSL certificate renewal dashboard using PHP, Python, and MySQL',
    'Developed a Python-based TLS scanner to extract certificate metadata, including issuer, validity, and expiry',
    'Automated certificate monitoring and renewal tracking workflows',
    'Performed data cleaning, exploratory data analysis, and visualization using Python, Pandas, and Matplotlib',
    'Supported predictive analysis and reporting for business insights',
  ],
} as const;

export const achievements = [
  {
    title: 'Top 15 — Inter-college Hackathon on Social Innovation',
    organization: 'Inter-college Competition',
    date: '2025',
    type: 'hackathon' as const,
  },
  {
    title: 'Data Analysis with Python',
    organization: 'IBM — Cognitive Class',
    date: 'October 2024',
    type: 'certification' as const,
  },
  {
    title: 'Data Visualization with Python',
    organization: 'IBM — Cognitive Class',
    date: 'May 2025',
    type: 'certification' as const,
  },
];

export const learningInterests = [
  { name: 'Artificial Intelligence', icon: 'Brain' },
  { name: 'Machine Learning', icon: 'Cpu' },
  { name: 'Advanced Data Analytics', icon: 'BarChart3' },
  { name: 'Data Engineering', icon: 'Database' },
  { name: 'Large Language Models', icon: 'MessageSquare' },
  { name: 'Generative AI', icon: 'Sparkles' },
  { name: 'AI-powered Applications', icon: 'Rocket' },
];

export const navItems = [
  'Home',
  'About',
  'Skills',
  'Experience',
  'Projects',
  'Education',
  'Contact',
] as const;

/*
 * ──────────────────────────────────────────────────────────
 *  FORMSPREE INTEGRATION (optional)
 *  Sign up at https://formspree.io, create a form, and
 *  paste your form endpoint below to enable direct email
 *  delivery without requiring the visitor's email client.
 *
 *  Example: 'https://formspree.io/f/xyzabcde'
 *  Leave empty string to keep the mailto fallback.
 * ──────────────────────────────────────────────────────────
 */
export const formspreeEndpoint = '';
