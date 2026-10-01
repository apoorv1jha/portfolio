# Apoorv's Portfolio

A personal portfolio website built with **Next.js** and **React**, with an emerald and champagne-gold design and smooth, interactive animations.

<!-- After deploying, add your live link here: **Live:** https://your-project.vercel.app -->

## About

I'm Apoorv, a B.Tech Computer Science & Engineering student at Lovely Professional University (graduating 2028). I build full-stack apps, AI tools and the infrastructure behind them. This site shows my projects, skills and contact details.

## Features

- **Animated hero:** my name slides in letter by letter, and the letters grow heavier and glow gold as the cursor moves near them.
- **Animated navbar:** it drops in on load, shows a sliding underline that follows the section you're reading, and hides when you scroll down.
- **Project list:** click a project to open its description, tech stack and links.
- **Scroll effects:** sections fade in as you scroll, and a thin progress bar shows how far down the page you are.
- **Responsive:** works on phones, tablets and desktops.
- **Accessible:** keyboard focus styles, and animations switch off for users who prefer reduced motion.
- **Copy-email:** click the email address to copy it, or use the button to open a pre-addressed Gmail message.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Plain CSS with design tokens
- Google Fonts: Bricolage Grotesque and Hanken Grotesk
- Deployed on Vercel

## Projects Featured

| Project | Tech |
| --- | --- |
| AgniNetra: Industrial Fire Detection | Python, XGBoost, NASA FIRMS, FastAPI, React, Leaflet |
| Unilogic AI Product Intelligence | Python, FastAPI, React, Vite, multi-agent pipeline |
| Serenity | Flask, Groq, LLaMA 3.1, Render |
| BYOD Classroom Management | Node.js, Express, MongoDB, Socket.IO |
| Local AI Assistant | Node.js, React, Ollama, RAG |
| Train Ticket Reservation | C++, DSA, React, Node.js |

## Run Locally

You need Node.js 18 or newer.

```bash
git clone https://github.com/apoorv1jha/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js        # Page shell, metadata and fonts
│   ├── page.js          # Page sections
│   └── globals.css      # All styles and colour variables
├── components/
│   ├── Navbar.js        # Animated navbar with scroll spy
│   ├── Hero.js          # Animated name and intro
│   ├── Projects.js      # Project list with expandable rows
│   ├── EmailCopy.js     # Click-to-copy email
│   ├── Reveal.js        # Fade-in on scroll
│   └── ScrollBar.js     # Scroll progress bar
├── data/
│   └── projects.js      # Project and skills content
├── package.json
└── next.config.js
```

## Customize

- **Projects and skills:** edit `data/projects.js`.
- **Colors:** change the variables at the top of `app/globals.css`.
- **About text and contact:** edit `app/page.js`.

## Deploy

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), choose **Add New → Project** and import the repo.
3. Click **Deploy**. Vercel detects Next.js automatically.

## Contact

- Email: [jha77apurva@gmail.com](mailto:jha77apurva@gmail.com)
- GitHub: [apoorv1jha](https://github.com/apoorv1jha)
- LeetCode: [d_aabraka](https://leetcode.com/u/d_aabraka/)
