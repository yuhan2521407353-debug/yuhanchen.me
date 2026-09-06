import type { Metadata } from "next";
import { coursework } from "../data/profile";

export const metadata: Metadata = {
  title: "Education & Experience | Yuhan Chen",
  description: "Explore Yuhan Chen’s education, work experience, professional development, and FTC robotics project work.",
  alternates: { canonical: "/journey" },
  openGraph: {
    url: "/journey",
    title: "Education & Experience | Yuhan Chen",
    description: "Explore Yuhan Chen’s education, work experience, professional development, and FTC robotics project work.",
  },
};

const records = [
  {
    kind: "ENGINEERING PROJECT",
    year: "2023–2024",
    title: "FTC Robotics Autonomous System",
    org: "Tottenville High School Robotics Team",
    summary: "Worked on autonomous and teleoperated robot control for FIRST Tech Challenge competitions.",
    facts: [
      "Implemented robot control logic in JavaScript.",
      "Developed autonomous and driver-controlled behavior.",
      "Tested and debugged robot behavior under competition constraints.",
      "Collaborated with hardware and design teammates.",
    ],
    themes: ["JavaScript", "Robotics", "Control logic", "Debugging", "Team collaboration"],
  },
  {
    kind: "EDUCATION",
    year: "August 2024–Present",
    title: "B.S. in Computer Science",
    org: "Stony Brook University · Expected May 2028",
    summary: "Building a formal foundation in computer science with growing interests in software systems, algorithms, and AI systems.",
    facts: [
      "Studying Data Structures and Object-Oriented Programming.",
      "Developing programming foundations through Programming Abstractions.",
      "Applying mathematical reasoning in Linear Algebra.",
      "Building probability foundations through Probability & Statistics.",
    ],
    themes: coursework,
  },
  {
    kind: "PROFESSIONAL DEVELOPMENT",
    year: "Summer 2024",
    title: "Program Intern",
    org: "NYCCP — Operation: ADULTing™",
    summary: "Completed structured professional-development training focused on workplace readiness.",
    facts: [
      "Participated in financial literacy workshops.",
      "Developed resume-writing and workplace communication skills.",
      "Practiced mock job applications and interviews.",
      "Delivered a personal development presentation.",
    ],
    themes: ["Communication", "Professional development", "Presentation", "Career readiness"],
  },
  {
    kind: "WORK EXPERIENCE",
    year: "2025–Present",
    title: "Medical Office Staff",
    org: "Wang’s Medical PC",
    summary: "Support daily office operations in a fast-paced professional environment.",
    facts: [
      "Support patient intake and scheduling.",
      "Maintain records and administrative documentation.",
      "Coordinate communication between patients and medical staff.",
      "Contribute to organized day-to-day office operations.",
    ],
    themes: ["Operations", "Scheduling", "Documentation", "Communication", "Organization"],
  },
];

export default function JourneyPage() {
  return (
    <>
      <section className="module-hero journey-hero">
        <p className="eyebrow">MODULE 02 / JOURNEY</p>
        <h1>Experience in<br /><span>motion.</span></h1>
        <p>A chronological record that separates academic progress, project work, professional development, and work experience.</p>
      </section>
      <section data-timeline className="journey-timeline">
        {records.map((record, index) => (
          <article data-timeline-item data-reveal className="journey-record" key={record.title}>
            <span className="journey-year" aria-hidden="true">{record.year.slice(0, 4)}</span>
            <div className="timeline-node" aria-hidden="true" />
            <div className="record-time">{record.year}</div>
            <div className="record-card" data-spotlight>
              <header>
                <div><p>{record.kind}</p><h2>{record.title}</h2><small>{record.org}</small></div>
                <span>{record.kind === "ENGINEERING PROJECT" ? "PROJECT RECORD" : "ACTIVE RECORD"}</span>
              </header>
              <p>{record.summary}</p>
              <div className="record-content">
                <div><span className="record-label">DETAILS</span><ul>{record.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></div>
                <div><span className="record-label">RELATED SKILLS</span><div className="record-tags">{record.themes.map((theme) => <span key={theme}>{theme}</span>)}</div></div>
              </div>
            </div>
            {index < records.length - 1 && <span className="timeline-link" aria-hidden="true" />}
          </article>
        ))}
      </section>
    </>
  );
}
