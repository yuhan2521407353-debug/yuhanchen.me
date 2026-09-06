import { profile } from "../data/profile";

export default function SystemFooter() {
  return <footer className="system-footer"><div><strong>YUHAN<span>.OS</span></strong><p>PERSONAL INTELLIGENCE SYSTEM</p></div><div className="footer-status"><i /> SYSTEM STATUS <b>ONLINE</b></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><span>Built with Next.js</span></div><small>© 2026 Yuhan Chen</small></footer>;
}
