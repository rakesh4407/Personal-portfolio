# 🚀 Rakesh G — Personal Portfolio

A premium, modern personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

🌐 **Live:** [personal-portfolio-liard-rho-69.vercel.app](https://personal-portfolio-liard-rho-69.vercel.app/)

---

## 👤 About

This portfolio showcases my work as a **Data Analyst** and **BCA AI & Data Science student** at K.R. Mangalam University. It features my projects, technical skills, professional experience, and certifications.

## ✨ Features

- **Premium Dark Theme** — Deep navy background with electric blue and cyan accents
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Smooth Animations** — Scroll-reveal effects powered by Framer Motion
- **Glassmorphism UI** — Modern glass-effect cards and components
- **SEO Optimized** — Open Graph, structured data, meta tags, sitemap
- **Accessible** — Semantic HTML, keyboard navigation, reduced-motion support
- **Contact Form** — Mailto fallback with Formspree integration support
- **Downloadable Resume** — One-click PDF download

## 📂 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen introduction with profile photo and CTAs |
| **About** | Bio with bento-grid info cards |
| **Skills** | 6 categorized skill cards (Programming, Analytics, BI, Databases, ML, Web) |
| **Experience** | Data Science Intern at The SSL Lock |
| **Projects** | 3 featured projects with problem statements, methodology, and outcomes |
| **Education** | BCA AI & DS at K.R. Mangalam University (CGPA 9.22/10) |
| **Achievements** | Hackathon placement + IBM certifications |
| **Learning** | Current areas of exploration |
| **Contact** | Contact form + email, LinkedIn, GitHub links |

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, TypeScript 7 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Build Tool** | Vite 8 |
| **Deployment** | Vercel |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rakesh4407/Personal-portfolio.git
cd Personal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (GlassCard, SectionHeading, SocialIcons)
│   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   ├── Hero.tsx          # Full-screen hero section
│   ├── About.tsx         # About me with bento grid
│   ├── Skills.tsx        # Technical skills cards
│   ├── Experience.tsx    # Work experience timeline
│   ├── Projects.tsx      # Featured project showcase
│   ├── Education.tsx     # Academic information
│   ├── Achievements.tsx  # Certifications & awards
│   ├── Learning.tsx      # Current learning interests
│   ├── Contact.tsx       # Contact form & info
│   ├── Footer.tsx        # Site footer
│   └── BackToTop.tsx     # Scroll-to-top button
├── data/
│   └── portfolioData.ts  # All portfolio content (easy to update)
├── hooks/
│   ├── useActiveSection.ts
│   └── useScrollReveal.ts
├── App.tsx
├── main.tsx
└── index.css             # Tailwind config & custom styles
```

## ✏️ Customization

All content is centralized in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Update your:

- Personal information
- Skills and categories
- Project details and GitHub links
- Work experience
- Certifications
- Learning interests

### Enable Direct Email (Formspree)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy the endpoint
3. Set `formspreeEndpoint` in `portfolioData.ts`

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by Rakesh G**
