export const profile = {
  name: "Yuhan Chen",
  email: "Yuhan2521407353@gmail.com",
  github: "https://github.com/yuhan2521407353-debug",
  linkedin: "https://www.linkedin.com/in/yuhan-chen-5630592a4/",
  university: "Stony Brook University",
  program: "B.S. in Computer Science",
  location: "Staten Island, NY",
  educationDates: "August 2024 – Present",
  graduation: "May 2028",
} as const;

export const modules = [
  { id: "00", name: "CONTROL", path: "/", title: "Control Center", description: "Personal Intelligence System" },
  { id: "01", name: "PROFILE", path: "/profile", title: "Identity & Background", description: "Open Profile" },
  { id: "02", name: "JOURNEY", path: "/journey", title: "Education & Experience", description: "Explore Timeline" },
  { id: "03", name: "SYSTEM", path: "/system", title: "Skills & Technologies", description: "Inspect System" },
  { id: "04", name: "CONNECT", path: "/connect", title: "Communication Channels", description: "Establish Connection" },
] as const;

export const skills = {
  Languages: ["Java", "C", "Python", "JavaScript"],
  "Tools & Platforms": ["Git", "VS Code", "IntelliJ IDEA", "Microsoft Office Suite"],
  "Technical Foundations": ["Object-Oriented Programming", "Data Structures & Algorithms", "FTC Robotics Programming"],
} as const;

export const verifiedCapabilities = {
  "Data & Persistence": ["PostgreSQL", "SQL"],
  "AI & Realtime": ["OpenAI APIs", "OpenAI Realtime", "Structured Outputs"],
  "Integration & Automation": ["HTTP APIs", "WebSockets", "Webhooks", "Twilio", "Browser Automation", "DOM Parsing"],
  Architecture: ["State Machines", "Event-Driven Architecture", "Async Workflows", "Session Management", "Workflow Orchestration"],
  "Reliability & Testing": ["pytest", "Regression Testing", "Integration Testing", "Deterministic Validation", "Structured Logging", "Latency Instrumentation", "Failure Recovery", "Stale Event Protection", "Fail-Closed Validation"],
} as const;

export const verifiedCapabilitySnapshot = ["PostgreSQL", "OpenAI Realtime", "WebSockets", "State Machines", "pytest"] as const;

export const coursework = ["Data Structures", "Object-Oriented Programming", "Programming Abstractions", "Linear Algebra", "Probability & Statistics"];

export const interests = ["AI Systems", "Software Engineering", "Algorithms", "Practical Systems"];
export const currentThemes = ["Programming", "Algorithms", "Robotics", "Practical Systems"];
export const activities = ["National Honor Society", "Key Club", "Asian American Association", "ENL Club"];
export const honors = ["4-Year Perfect Attendance Award", "Outstanding Robotics Team Member Award", "Excellence in English Award", "High School GPA: 4.0"];
