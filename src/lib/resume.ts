export const resume = {
  name: "Yogesh Ahuja",
  role: "Frontend Developer",
  location: "Indore, MP",
  years: "4+ years",
  headline:
    "Results-driven Frontend Developer specializing in React.js, Next.js, TypeScript, and modern web technologies.",
  summary:
    "Proven track record of building responsive, high-performance web applications across travel, NFT, and no‑code platforms. Strong expertise in translating UI/UX designs into scalable solutions, REST API integration, and Web3 technologies. Committed to writing clean, maintainable code and delivering exceptional user experiences.",
  contact: {
    phone: "87200 97320",
    email: "yogeshahuja1994@gmail.com",
    linkedin: "https://www.linkedin.com/in/yogesh-ahuja-898422207",
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"],
    frameworks: ["React.js", "Next.js", "Redux Toolkit", "React Router", "Tailwind CSS"],
    tools: ["Git", "VS Code", "NPM", "Vite", "REST APIs", "Axios"],
    web: [
      "Responsive Design",
      "Performance Optimization",
      "Web3",
      "Blockchain Integration",
      "Cross-browser Compatibility",
    ],
    ai: ["Cursor AI", "ChatGPT", "GitHub Copilot"],
    methodologies: ["Agile/Scrum", "Code Reviews"],
  },
  experience: [
    {
      company: "DureDev Softwares Pvt. Ltd.",
      title: "Frontend Developer",
      start: "Sep 2021",
      end: "April 2026",
      bullets: [
        "Developed and maintained responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS, improving application performance by 30%.",
        "Converted Figma designs into pixel-perfect, reusable React components, reducing development time by 25%.",
        "Integrated REST APIs and third-party services for dynamic data rendering and real-time updates.",
        "Implemented lazy loading, code-splitting, and memoization to reduce bundle size and improve load times.",
        "Collaborated with cross-functional teams in Agile sprints, participating in planning, code reviews, and feature delivery.",
        "Worked on Web3 and AI projects including NFT platforms and no-code tools with blockchain integration.",
        "Debugged and resolved UI/UX issues while maintaining code quality through modern best practices.",
      ],
    },
  ],
  projects: [
    {
      name: "Cityfeed",
      timeframe: "Nov 2024 - April 2026",
      tech: ["React", "TypeScript", "Vite"],
      highlights: [
        "Role-based authentication (Super Admin, Outlet Admin, Employees, Event Staff) with secure sessions.",
        "Dynamic dashboards with real-time statistics, interactive charts, and responsive layouts.",
        "User/outlet management with employee creation and role assignments.",
        "Event lifecycle management with ticket tiers and QR code scanning.",
        "Improved performance by ~40% using lazy loading, memoization, and code-splitting.",
      ],
    },
    {
      name: "Seedworld",
      timeframe: "May 2023 – Oct 2024",
      tech: ["React", "SCSS", "Vanilla CSS"],
      highlights: [
        "Metaverse platform with blockchain integration and AAA-quality stylized art direction.",
        "Pixel-perfect responsive UI from Figma designs.",
        "Modular, scalable styling architecture with SCSS.",
        "Optimized performance via lazy loading, image compression, and CSS minification (~35% faster loads).",
      ],
    },
    {
      name: "Evelon",
      timeframe: "Sep 2021 – Apr 2023",
      tech: ["React", "Tailwind CSS", "Web3"],
      highlights: [
        "No-code platform to create and deploy dynamic NFTs with AI-generated images.",
        "Built NFT creation forms, previews, and deployment interfaces.",
        "Integrated AI image generation APIs for real-time customization.",
        "Implemented wallet connections and blockchain interactions (Web3).",
      ],
    },
  ],
  education: [
    {
      school: "Sanghvi Innovative Academy",
      degree: "Bachelor of Technology",
      location: "Indore, MP",
      timeframe: "2012 – 2016",
    },
  ],
} as const;

export type Resume = typeof resume;
