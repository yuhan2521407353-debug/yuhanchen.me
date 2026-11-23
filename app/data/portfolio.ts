
export const projects = [
  {
    title: "Workflow Automation",
    dates: "Jul 2026 – Present",
    description: "A program designed to simplify routine office work and reduce manual steps.",
    details: [
      "Identified recurring tasks that could be simplified or automated.",
      "Used AI to support structured workflows, with staff review for exceptions.",
      "Tested common and unusual scenarios to check reliability and consistency.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Personal Portfolio",
    dates: "Sep 2026",
    description: "A responsive website for my projects, experience, and technical background.",
    details: [
      "Built with Next.js and TypeScript and deployed on Vercel with a custom domain.",
      "Set up canonical URLs and a sitemap. Verified navigation and layouts across seven viewport widths.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    source: "https://github.com/yuhan2521407353-debug/yuhanchen.me",
  },
] as const;

export const experience = [
  {
    role: "Medical Office Staff",
    organization: "Wang’s Medical PC",
    location: "Brooklyn, NY",
    dates: "2025 – Present",
    description: "Support daily medical office operations across patient services, scheduling, records, and staff coordination. Use that experience to identify where software can simplify routine work.",
  },
  {
    role: "Program Intern",
    organization: "NYCCP Operation: ADULTing™",
    location: "New York, NY",
    dates: "Summer 2024",
    description: "Completed workshops in financial literacy, résumé writing, and workplace communication. Practiced job applications and interviews with peers and delivered a personal development presentation.",
  },
  {
    role: "Robotics Team Member",
    organization: "FIRST Tech Challenge",
    location: "Tottenville High School",
    dates: "2023 – 2024",
    description: "Programmed autonomous and driver-controlled routines and tested them with hardware teammates. Earned the Outstanding Robotics Team Member Award.",
  },
] as const;

export const technicalSkills = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
  },
  {
    name: "Frameworks and platforms",
    items: ["FastAPI", "React", "Next.js", "PostgreSQL", "OpenAI Realtime API", "Twilio", "Vercel"],
  },
  {
    name: "Tools and protocols",
    items: ["WebSockets", "Webhooks", "Playwright", "pytest", "Git", "Tailwind CSS"],
  },
] as const;
