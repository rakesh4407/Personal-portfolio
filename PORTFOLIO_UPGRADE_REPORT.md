# 🚀 Rakesh G — Portfolio Engineering & Upgrade Log

This document chronicles the full engineering transformation of the **Personal Portfolio** of **Rakesh G** (Data Analyst | BCA AI & Data Science, K.R. Mangalam University).

---

## 📌 Executive Summary

- **Live URL:** [https://rakesh-g-portfolio.vercel.app/](https://rakesh-g-portfolio.vercel.app/)
- **GitHub Repository:** [https://github.com/rakesh4407/Personal-portfolio](https://github.com/rakesh4407/Personal-portfolio)
- **Tech Stack:** React 19.3.1, TypeScript 7.0, Vite 8.3.8, Tailwind CSS v4.3.5, Framer Motion 14.13, Lucide React + Custom SVGs
- **Status:** 100% Production Ready • Zero Build Errors • Zero Linter Warnings • Auto-Deployed to Vercel

---

## 🛠️ Complete Chronological Changelog

### Phase 1: Foundation & Data Authenticity
1. **Scaffolded Modern Architecture:** Built from scratch using Vite + React 19 + TypeScript + Tailwind CSS v4.
2. **Centralized Data Layer:** Configured `src/data/portfolioData.ts` as the single source of truth for personal info, education, skills, experience, and projects.
3. **Verified Real Project Repositories:** Replaced all placeholders with real, verified individual GitHub links:
   - `Regional-Sales-Analysis`: [github.com/rakesh4407/Regional-Sales-Analysis](https://github.com/rakesh4407/Regional-Sales-Analysis)
   - `ssl-renewal-dashboard`: [github.com/rakesh4407/ssl-renewal-dashboard](https://github.com/rakesh4407/ssl-renewal-dashboard)
   - `customer-churn-prediction-retention-analytics`: [github.com/rakesh4407/customer-churn-prediction-retention-analytics](https://github.com/rakesh4407/customer-churn-prediction-retention-analytics)
   - `IPL-sentiment-analysis`: [github.com/rakesh4407/IPL-sentiment-analysis](https://github.com/rakesh4407/IPL-sentiment-analysis)
4. **Authentic Profile Image & Resume:** Integrated high-resolution photo (`profile.jpg`) and downloadable 2-page verified PDF (`Rakesh_G_Resume.pdf`).

---

### Phase 2: UI/UX & Interactive Engineering
1. **Interactive Cursor Spotlight Glow (`GlassCard.tsx`):**
   - Added dynamic mouse-tracking calculations (`e.clientX - rect.left`, `e.clientY - rect.top`).
   - Every card now features a subtle radial glow that follows the user's cursor (Linear / Vercel design system style).
2. **Key Impact Metrics Strip (`Hero.tsx`):**
   - Added 4 verified high-impact metrics directly below the hero CTAs:
     - **9.22 / 10** Academic CGPA (Top-Tier Academic Performance)
     - **4+** Core Engineering Projects (ML, Analytics, Full Stack, NLP)
     - **7,000+** Data Records Modeled (Telecom Churn Analysis)
     - **1 Year** Data Science Internship Experience (The SSL Lock)
3. **One-Click "Copy Email" Pill (`Hero.tsx`):**
   - Added a copy button next to GitHub & LinkedIn with instant visual checkmark feedback ("Email Copied!").
4. **Interactive Python IDE / Terminal Showcase (`About.tsx`):**
   - Built a macOS-style code terminal window (`🔴 🟡 🟢`) showcasing genuine Python code snippets:
     - `churn_model.py`: Stratified Random Forest classification & probability extraction.
     - `sales_margin.py`: Pandas channel profitability & 38% export margin anomaly.
     - `tls_scanner.py`: Python socket connection & X.509 certificate expiry engine.
5. **Dynamic Project Category Filter Tabs (`Projects.tsx`):**
   - Implemented real-time category filtering (`All`, `Data Analytics`, `Machine Learning`, `Full Stack`, `NLP`) with item counts and smooth Framer Motion `layout` transitions.
6. **Applied Internship Tech Stack (`Experience.tsx`):**
   - Explicitly badged technologies used during the 1-year internship: `Python`, `Pandas`, `PHP`, `MySQL`, `TLS / SSL Security`, `Matplotlib`.

---

### Phase 3: SpaceX & NVIDIA Keynote Transformation
1. **Neural Starfield & Synapse Matrix (`NeuralCanvas.tsx`):**
   - Created a custom HTML5 Canvas particle background simulating a dynamic constellation of neural network nodes.
   - Nodes gently drift and react with gravitational repulsion to user mouse movement at 60fps.
2. **SpaceX Mission Telemetry HUD (`TelemetryHUD.tsx`):**
   - Embedded a persistent aerospace telemetry bar at the top of the header:
     - `🟢 SYSTEM: ONLINE` (Pulsing emerald beacon)
     - `CPU: AI & DS COHORT • 9.22 CGPA`
     - `COORDINATES: 13.0827°N, 80.2707°E [CHENNAI]`
     - `INFERENCE ENGINE: READY`
     - `COMMANDS: ⌘K`
3. **Global Command Palette (`CommandPalette.tsx`):**
   - Added a keyboard-driven `⌘K` / `Ctrl+K` modal command menu.
   - Allows instant keyboard navigation across all sections, resume download, email copying, and social links.
4. **NVIDIA AI Lab: Live Client-Side Model Simulator (`ModelSimulator.tsx`):**
   - Built an interactive machine learning playground derived from the 7,000+ record churn dataset:
     - Interactive sliders: *Customer Tenure* (1-72 mos), *Monthly Spend* ($20-$120).
     - Segment buttons: *Contract Agreement* (Month-to-month, 1-Year, 2-Year).
     - Toggles: *Tech Support* and *Online Security*.
     - Live dynamic computation of churn probability with animated risk gauge and feature attribution weights.
     - "View JSON" toggle revealing simulated real-time REST inference payloads.

---

### Phase 4: Executive Technologist Enhancements
1. **Interactive System Architecture Blueprints (`ArchitectureVisualizer.tsx`):**
   - Created 4 complete pipeline diagrams:
     - *Customer Churn ML Engine* (Ingestion ➔ Feature Engineering ➔ Random Forest ➔ Flask REST API)
     - *Automated TLS/SSL Monitoring System* (Host Discovery ➔ TLS Sockets ➔ MySQL ➔ Control Panel)
     - *Regional Sales & Profitability Engine* (Raw Datasets ➔ Cleaning ➔ Statistical EDA ➔ Power BI)
     - *IPL Sentiment & Opinion Mining* (Social Stream ➔ Tokenizer ➔ Polarity Scoring ➔ Timeline)
   - Interactive node selection with detailed technical specifications for each phase.
2. **Engineering Logs & Case Studies (`TechnicalNotes.tsx`):**
   - Authored 3 in-depth engineering field logs:
     - *"Mitigating Class Imbalance in Telecom Churn Classification"*
     - *"Architecting a Resilient TLS Certificate Scanner in Python"*
     - *"Dissecting Volume vs. Profitability: The 38% Margin Anomaly"*
   - Expandable deep-dive drawers with reading times and core technical takeaways.
3. **Generative Visual Telemetry Headers (`Projects.tsx`):**
   - Integrated bespoke visual telemetry mockups into each project card:
     - Project 1: Power BI margin breakdown graphic (~38% Export vs. Wholesale).
     - Project 2: TLS health audit telemetry (Critical, Urgent, Nominal counts).
     - Project 3: Random Forest ROC-AUC (0.84) & latency metrics.
     - Project 4: Real-time match sentiment polarity distribution bar.

---

### Phase 5: Precision Alignment & Polish
1. **Profile Photograph Optimization (`Hero.tsx`):**
   - Tested 1024x1001 source image; added `aspect-square h-auto select-none` to eliminate sub-pixel stretching.
   - Refined mobile placement of floating "AI & Data Science Student" badge (`right-0 sm:-right-3 -bottom-3`).
2. **Navbar Responsive Tuning (`Navbar.tsx`):**
   - Optimized padding and font sizing (`px-2.5 xl:px-3.5`, `text-xs xl:text-sm`) to ensure all 9 nav items fit comfortably on 13-inch laptops (1024px-1280px).
3. **Anchor Scroll Offsets (`scroll-mt-24`):**
   - Added `scroll-mt-24` across all sections so clicking any nav link leaves comfortable space below the fixed header.
4. **Active Section Tracking (`useActiveSection.ts`):**
   - Updated IntersectionObserver to track all 9 sections in real time.
5. **Code Quality & Build Health:**
   - Fixed React 19 compiler purity warning in `Footer.tsx`.
   - Cleaned all unused imports.
   - **`oxlint`**: 0 warnings, 0 errors across 27 files.
   - **`vite build`**: Clean production build in ~650ms.

---

## 📈 Git Commit History on `main`

| Commit Hash | Description |
| :--- | :--- |
| `cbf644a` | Precision UI/UX polish: Perfect profile photo aspect ratio, scroll margins, responsive navbar spacing, and section tracking |
| `6440278` | Elevate to Executive Tier: Interactive System Architecture Blueprints, Technical Engineering Logs, and Project Visual Telemetry Previews |
| `40826f0` | SpaceX & NVIDIA keynote upgrade: Interactive Neural canvas, telemetry HUD, ⌘K command palette, and live AI model simulator |
| `f9da43b` | Elevate UI/UX: Interactive cursor spotlight, metrics strip, project category filters, interactive code terminal, and tech tags |
| `4d76895` | Add real GitHub repo URLs for all projects |
| `352de7e` | Audit fixes: SEO canonical URL, JSON-LD domain, project link placeholders |
| `5fbe253` | V2 upgrade: new headline, 4 projects, expanded skills, improved cards |

---
*Created and maintained by Antigravity Agent for Rakesh G.*
