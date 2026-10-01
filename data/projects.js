export const projects = [
  {
    title: 'AgniNetra: Industrial Fire Detection',
    stack: 'Python · XGBoost · NASA FIRMS · FastAPI · React · TypeScript · Leaflet',
    text: 'A satellite monitoring system built with my team that detects thermal hotspots across India and classifies them as industrial fires, persistent industrial sources, coal and mine fires, agricultural burning or wildfires. It combines NASA FIRMS data, OpenStreetMap industrial sites and land cover with an XGBoost model, and serves results to a React and Leaflet dashboard with weather and air-quality context.',
    links: [],
  },
  {
    title: 'Unilogic AI Product Intelligence',
    stack: 'Python · FastAPI · React · Vite · Multi-agent pipeline',
    text: `A product data engine built for the Unilogic AI hackathon. A 7-agent pipeline turns cryptic supplier strings like "3/8 CPLG BRS 150#" into complete 252-column catalog records, with brand matching, unit normalisation and five generated description formats. It met 100% of the invoice and mobile description rules and sends low-confidence items to a human review queue.`,
    links: [
      { label: 'Live demo', href: 'https://unilogic-ai.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/apoorv1jha/unilogic-ai' },
    ],
  },
  {
    title: 'Serenity',
    stack: 'Flask · SQLAlchemy · Groq · LLaMA 3.1 · Render',
    text: 'A full-stack AI chatbot for mental health support with user login, saved chat history, crisis detection with helpline numbers and a mobile-friendly interface. It uses LLaMA 3.1 through Groq and is live on Render.',
    links: [
      { label: 'Live demo', href: 'https://serenity-dmtt.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/apoorv1jha/serenity' },
    ],
  },
  {
    title: 'BYOD Classroom Management',
    stack: 'Node.js · Express · MongoDB · Socket.IO · JWT',
    text: 'A classroom platform for bring-your-own-device learning with separate student and teacher dashboards. Teachers send real-time alerts over Socket.IO and manage a website blocklist, while students log tasks with a timer that records timestamped activity. Login is secured with JWT and bcrypt.',
    links: [{ label: 'GitHub', href: 'https://github.com/apoorv1jha/BYOD' }],
  },
  {
    title: 'Local AI Assistant',
    stack: 'Node.js · React · Ollama · RAG',
    text: 'A private assistant that answers questions over your own documents in many formats using retrieval-augmented generation. Models run locally with Ollama, so files stay on your machine.',
    links: [],
  },
  {
    title: 'Train Ticket Reservation',
    stack: 'C++ · DSA · React · Node.js',
    text: 'A reservation and waitlist system with the core logic in C++ using data structures, plus an IRCTC-style React and Node frontend.',
    links: [{ label: 'GitHub', href: 'https://github.com/apoorv1jha/train_reservation_dsa' }],
  },
];
export const skills = [
  ['Full-stack', 'React, TypeScript, Node.js, Express, Flask, FastAPI, MongoDB, Socket.IO'],
  ['AI', 'LLM apps with Groq and LLaMA, multi-agent pipelines, RAG with Ollama, XGBoost'],
  ['Infrastructure', 'Deployment on Render and a growing DevOps roadmap'],
  ['DSA', 'C++ and problem solving on LeetCode'],
];
