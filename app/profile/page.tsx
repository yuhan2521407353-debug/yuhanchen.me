import type { Metadata } from "next";
import { activities, coursework, honors, interests, profile, skills } from "../data/profile";

export const metadata: Metadata = {
  title: "About Yuhan Chen | Computer Science at Stony Brook University",
  description: "Learn about Yuhan Chen, a Computer Science student at Stony Brook University interested in AI systems, software engineering, and algorithms.",
  alternates: { canonical: "/profile" },
  openGraph: {
    url: "/profile",
    title: "About Yuhan Chen | Computer Science at Stony Brook University",
    description: "Learn about Yuhan Chen, a Computer Science student at Stony Brook University interested in AI systems, software engineering, and algorithms.",
  },
};

export default function ProfilePage() {
  return (
    <>
      <section className="module-hero">
        <p className="eyebrow">MODULE 01 / PROFILE</p>
        <h1>Identity<br /><span>record.</span></h1>
        <p>Yuhan Chen is a Computer Science student at Stony Brook University with interests in AI systems, software engineering, algorithms, and practical technology.</p>
      </section>
      <section data-reveal className="profile-layout">
        <article className="prose-card">
          <p className="eyebrow">ABOUT</p>
          <h2>Learning through systems, code, and applied work.</h2>
          <p>I&apos;m pursuing a B.S. in Computer Science at Stony Brook University. I&apos;m building a strong foundation in programming, object-oriented design, data structures, and mathematical problem-solving.</p>
          <p>I&apos;m especially interested in how reliable software systems bring together clear logic and intelligent technology in practical applications.</p>
          <div className="profile-focus"><span>Technical interests</span><p>{interests.join(" · ")}</p></div>
        </article>
        <aside className="identity-card" data-spotlight>
          <header><span>IDENTITY RECORD</span><strong>YC-2028</strong></header>
          <dl>
            <div><dt>IDENTITY</dt><dd>{profile.name}</dd></div>
            <div><dt>LOCATION</dt><dd>{profile.location}</dd></div>
            <div><dt>ACADEMIC AFFILIATION</dt><dd>{profile.university}</dd></div>
            <div><dt>PROGRAM</dt><dd>{profile.program}</dd></div>
            <div><dt>EDUCATION</dt><dd>{profile.educationDates}</dd></div>
            <div><dt>EXPECTED GRADUATION</dt><dd>{profile.graduation}</dd></div>
          </dl>
          <footer>PROFILE VERIFIED</footer>
        </aside>
      </section>
      <section data-reveal className="coursework-strip">
        <div><p className="eyebrow">ACADEMIC CONTEXT</p><h2>Relevant coursework</h2><p className="coursework-copy">A mix of programming, algorithmic thinking, and mathematical foundations that supports continued growth in computer science.</p></div>
        <div>{coursework.map((course) => <span key={course}>{course}</span>)}</div>
      </section>
      <section data-reveal className="profile-background">
        <div><p className="eyebrow">TOOLS &amp; FOUNDATIONS</p><p>{skills["Tools & Platforms"].join(" · ")}</p><p>{skills["Technical Foundations"].join(" · ")}</p></div>
        <div><p className="eyebrow">ACTIVITIES &amp; HONORS</p><p>{activities.join(" · ")}</p><p>{honors.join(" · ")}</p></div>
      </section>
    </>
  );
}
