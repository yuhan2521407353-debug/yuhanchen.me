
export const projects = [
  {
    title: "Voice Scheduling Automation",
    dates: "Jul 2026 – Present",
    description: "A phone-based workflow for scheduling appointments in English and Mandarin.",
    details: [
      "Streamed calls with Twilio Media Streams and OpenAI Realtime to support booking, lookup, rescheduling, and cancellations.",
      "Used Playwright to verify identity and availability, then checked the saved record before confirming each booking.",
      "Handled caller interruptions and synced call and booking activity to a PostgreSQL staff dashboard through a retryable queue.",
      "Used synthetic call replays to diagnose repeated prompts and early replies. One release passed 3,996 regression checks.",
    ],
    stack: ["Python", "FastAPI", "Twilio", "OpenAI Realtime", "PostgreSQL", "Playwright"],
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
    description: "Handle patient intake, appointment scheduling, and records. Coordinate scheduling requests and appointment updates with patients and clinic staff.",
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
