export const personalInfo = {
  name: 'Rakesh G',
  title: 'Data Analyst | AI & Data Science Student',
  location: 'Chennai, India',
  email: 'rakee4407@gmail.com',
  github: 'https://github.com/rakesh4407',
  linkedin: 'https://linkedin.com/in/rakesh-bca',
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

export const projects = [
  {
    id: 1,
    title: 'Regional Sales Analysis',
    description:
      'Analyzed four years of US regional sales data to identify revenue patterns, profitability, and business opportunities across different channels and regions.',
    problem: 'Businesses needed to understand regional revenue patterns and identify the most profitable sales channels.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
    achievements: [
      'Discovered that the Export channel contributed ~15% of sales volume while delivering the highest profit margin of ~38%',
      'Developed an interactive Power BI dashboard to monitor revenue, profit, and budget variance',
      'Identified key seasonal trends and regional performance disparities',
    ],
    github: 'https://github.com/rakesh4407',
  },
  {
    id: 2,
    title: 'SSL Certificate Renewal Dashboard',
    description:
      'Developed a full-stack dashboard to centralize SSL certificate monitoring and renewal tracking for enterprise environments.',
    problem: 'Organizations needed a centralized system to track SSL certificate expiry and automate renewal workflows.',
    technologies: ['PHP', 'Python', 'MySQL', 'Chart.js'],
    achievements: [
      'Built role-based authentication system for multi-user access',
      'Implemented automated risk categorization: Critical, Urgent, and Reminder classifications',
      'Added certificate expiry monitoring with real-time analytics dashboard',
      'Developed Excel import/export functionality for bulk operations',
    ],
    github: 'https://github.com/rakesh4407',
  },
  {
    id: 3,
    title: 'Customer Churn Prediction & Retention Analytics',
    description:
      'Developed a machine learning application to predict customer churn and help businesses understand customer retention risks.',
    problem: 'Telecom businesses needed to proactively identify customers likely to churn and understand key retention drivers.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
    achievements: [
      'Built Random Forest classification model on 7,000+ telecom customer records',
      'Implemented real-time churn prediction with confidence scoring',
      'Created KPI dashboard with feature importance visualization',
      'Delivered business-oriented insights for targeted retention strategies',
    ],
    github: 'https://github.com/rakesh4407',
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
