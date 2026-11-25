
export const projects = [
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
    role: "Medical Office Staff (Workflow Automation Developer)",
    organization: "Wang’s Medical PC",
    location: "Brooklyn, NY",
    dates: "2025 – Present",
    description: "Developed a Python application with FastAPI and PostgreSQL to automate recurring medical office workflows.",
    details: [
      "Designed workflow rules around scheduling, records management, and staff handoffs.",
      "Integrated AI into request handling, with input validation and staff handoff for unresolved cases.",
      "Built an asynchronous queue with idempotent retries to sync workflow events to a staff dashboard.",
      "Reproduced workflow failures with synthetic inputs. One release passed 3,996 regression checks.",
    ],
  },
  {
    role: "Program Intern",
    organization: "NYCCP Operation: ADULTing™",
    location: "New York, NY",
    dates: "Summer 2024",
    description: "Defined objectives, organized supporting materials, and presented a personal development project. I later applied the same approach in computer science projects, including defining what a workflow automation tool needed to do for clinic staff.",
    details: [
      "Completed workshops in financial literacy and workplace communication.",
    ],
  },
  {
    role: "Robotics Team Member",
    organization: "FIRST Tech Challenge",
    location: "Tottenville High School",
    dates: "2023 – 2024",
    description: "Programmed autonomous routines and driver controls in JavaScript for competition.",
    details: [
      "Tested and debugged robot controls with teammates. Earned the Outstanding Robotics Team Member Award.",
    ],
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
