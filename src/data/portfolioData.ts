export const personalInfo = {
  name: 'Rakesh G',
  title: 'Data Analyst | AI & Data Science Student',
  headline: 'Building Intelligent Systems Through AI, Data & Engineering.',
  intro:
    "Hi, I'm Rakesh G — a Data Analyst and AI & Data Science student building intelligent solutions through analytics, machine learning, and engineering.",
  location: 'Chennai, India',
  email: 'rakee4407@gmail.com',
  github: 'https://github.com/rakesh4407',
  linkedin: 'https://linkedin.com/in/rakesh-bca',
  website: 'https://rakesh-g-portfolio.vercel.app',
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
    category: 'Machine Learning',
    icon: 'Brain',
    items: ['Scikit-learn', 'Predictive Modeling', 'Classification', 'Feature Engineering'],
  },
  {
    category: 'Deep Learning & GenAI',
    icon: 'Sparkles',
    items: ['Neural Networks', 'LLM Concepts', 'Prompt Engineering'],
  },
  {
    category: 'Business Intelligence',
    icon: 'PieChart',
    items: ['Power BI', 'Microsoft Excel', 'Dashboard Design'],
  },
  {
    category: 'Backend & Tools',
    icon: 'Server',
    items: ['Flask', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code'],
  },
] as const;

/*
 * ──────────────────────────────────────────────────────────
 *  PROJECTS — UPDATE GITHUB URLS WITH YOUR ACTUAL REPOS
 *  Replace placeholder URLs below.
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
    solution:
      'Performed end-to-end data analysis: cleaned raw data with Pandas, conducted exploratory analysis with statistical visualizations using Matplotlib and Seaborn, and built an interactive Power BI dashboard for business stakeholders.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
    achievements: [
      'Discovered that the Export channel contributed ~15% of sales volume while delivering the highest profit margin of ~38%',
      'Developed an interactive Power BI dashboard to monitor revenue, profit, and budget variance',
      'Identified key seasonal trends and regional performance disparities',
    ],
    // TODO: Replace with your actual repo URL, e.g. https://github.com/rakesh4407/regional-sales-analysis
    github: '',
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
    solution:
      'Built a PHP backend with MySQL database for certificate data storage. Developed a Python-based TLS scanner for automated metadata extraction. Created Chart.js-powered analytics views with role-based access control.',
    technologies: ['PHP', 'Python', 'MySQL', 'Chart.js'],
    achievements: [
      'Built role-based authentication system for multi-user access',
      'Implemented automated risk categorization: Critical, Urgent, and Reminder',
      'Added certificate expiry monitoring with real-time analytics dashboard',
      'Developed Excel import/export functionality for bulk operations',
    ],
    // TODO: Replace with your actual repo URL, e.g. https://github.com/rakesh4407/ssl-dashboard
    github: '',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    tagline: 'ML-powered customer retention risk analysis',
    description:
      'Developed a machine learning application to predict customer churn and help businesses understand customer retention risks using telecom data.',
    problem:
      'Telecom businesses needed to proactively identify customers likely to churn and understand key retention drivers to reduce revenue loss.',
    solution:
      'Preprocessed 7,000+ customer records using Pandas. Trained a Random Forest classifier with Scikit-learn, optimizing for precision-recall balance. Built a Flask web app with real-time prediction and KPI dashboard.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
    achievements: [
      'Built Random Forest classification model on 7,000+ telecom customer records',
      'Implemented real-time churn prediction with confidence scoring',
      'Created KPI dashboard with feature importance visualization',
      'Delivered business-oriented insights for targeted retention strategies',
    ],
    // TODO: Replace with your actual repo URL, e.g. https://github.com/rakesh4407/customer-churn-prediction
    github: '',
    category: 'Machine Learning',
  },
  {
    id: 4,
    title: 'IPL Sentiment Analysis',
    tagline: 'NLP-driven social media opinion mining',
    description:
      'Analyzed public sentiment around IPL cricket matches using natural language processing techniques on social media data.',
    problem:
      'Understanding fan sentiment and public opinion trends during IPL matches from unstructured social media text data.',
    solution:
      'Collected and preprocessed social media text data. Applied NLP techniques for text cleaning, tokenization, and sentiment classification. Visualized sentiment trends and patterns.',
    technologies: ['Python', 'NLP', 'Pandas', 'Matplotlib'],
    achievements: [
      'Processed and classified sentiment from social media posts',
      'Identified sentiment trends correlated with match events',
      'Built visualization dashboards for sentiment distribution',
    ],
    github: 'https://github.com/rakesh4407/IPL-sentiment-analysis',
    category: 'NLP',
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
 * Formspree endpoint — set to enable direct email delivery
 * Example: 'https://formspree.io/f/xyzabcde'
 */
export const formspreeEndpoint = '';
