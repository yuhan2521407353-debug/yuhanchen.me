import Image from "next/image";
import headshot from "../public/yuhan-chen.jpg";
import { experience, projects, technicalSkills } from "./data/portfolio";
import { profile } from "./data/profile";
import styles from "./portfolio.module.css";

const sections = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <header id="top" className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a className={styles.brand} href="#top" aria-label="Yuhan Chen, back to top">{profile.name}</a>
          <nav className={styles.nav} aria-label="Main navigation">
            {sections.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
        </div>
      </header>

      <main id="main" className={styles.container} tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="name">
          <div className={styles.intro}>
            <p className={styles.focus}>Software Engineering &amp; Applied AI</p>
            <h1 id="name">{profile.name}</h1>
            <p className={styles.summary}>
              I’m a computer science student building real-time voice applications and tools that automate manual workflows.
            </p>
            <div className={styles.actions}>
              <a className={styles.button} href="#projects">View projects <span aria-hidden="true">↓</span></a>
              <a className={styles.textLink} href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <aside id="education" className={styles.education} aria-labelledby="education-title">
            <div className={styles.educationIdentity}>
              <Image
                className={styles.portrait}
                src={headshot}
                alt="Portrait of Yuhan Chen"
                sizes="(max-width: 844px) 76px, (max-width: 1244px) 9vw, 112px"
                loading="eager"
              />
              <div>
                <h2 id="education-title">Education</h2>
                <p className={styles.university}>{profile.university}</p>
                <p className={styles.degree}>{profile.program}</p>
              </div>
            </div>
            <dl>
              <div><dt>Expected graduation</dt><dd>{profile.graduation}</dd></div>
              <div><dt>Based in</dt><dd>{profile.location}</dd></div>
            </dl>
          </aside>
        </section>

        <section id="projects" className={styles.section} aria-labelledby="projects-title">
          <h2 id="projects-title">Selected Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.project}>
                <div className={styles.projectHeading}>
                  <h3>{project.title}</h3>
                  <p className={styles.date}>{project.dates}</p>
                </div>
                <p className={styles.projectLead}>{project.description}</p>
                <ul className={styles.details}>
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <ul className={styles.stack} aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {"source" in project && (
                  <a className={styles.textLink} href={project.source}>View source on GitHub <span aria-hidden="true">↗</span></a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.section} aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <div className={styles.experience}>
            {experience.map((entry) => (
              <article key={entry.role} className={styles.experienceRow}>
                <p className={styles.date}>{entry.dates}</p>
                <div>
                  <h3>{entry.role}</h3>
                  <p className={styles.organization}>{entry.organization} <span>· {entry.location}</span></p>
                  <p className={styles.roleDetail}>{entry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className={styles.section} aria-labelledby="skills-title">
          <h2 id="skills-title">Technical Skills</h2>
          <dl className={styles.skillGrid}>
            {technicalSkills.map((group) => (
              <div key={group.name}>
                <dt>{group.name}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Contact</h2>
            <p>Open to software engineering and applied AI internships.</p>
          </div>
          <div className={styles.contactLinks}>
            <a className={styles.button} href={`mailto:${profile.email}`}>Email me <span aria-hidden="true">↗</span></a>
            <a className={styles.textLink} href={profile.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a className={styles.textLink} href={profile.github}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <p>{profile.name}</p>
          <section className={styles.staff} aria-labelledby="frontdesk-access-title">
            <h2 id="frontdesk-access-title">Clinic staff access</h2>
            <a href="https://frontdesk.yuhanchen.me/staff/login" rel="noreferrer">Staff login / 前台平台登录</a>
            <p>Authorized staff sign-in required.</p>
          </section>
        </div>
      </footer>
    </>
  );
}
