"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { openModule } from "./module-link";

const nodes = [
  { label: "Computer Science", path: "/profile", x: "18%", y: "23%" }, { label: "Data Structures", path: "/profile", x: "76%", y: "18%" }, { label: "OOP", path: "/system", x: "13%", y: "67%" }, { label: "Java", path: "/system", x: "75%", y: "66%" }, { label: "FTC Robotics", path: "/journey", x: "49%", y: "85%" }, { label: "Work Experience", path: "/journey", x: "88%", y: "45%" },
];

export default function KnowledgeGraph() {
  const router = useRouter(); const [active, setActive] = useState("");
  const go = (path: string) => { openModule(path === "/" ? "CONTROL_00" : path.slice(1).toUpperCase()); router.push(path); };
  return <section id="graph" data-reveal className="graph-section"><div className="section-intro"><div><p className="eyebrow">KNOWLEDGE MAP</p><h2>Connected foundations</h2></div><p>A small map of the academic foundations, languages, project work, and experience represented in this portfolio.</p></div><div className="knowledge-graph" aria-label="Interactive portfolio knowledge graph"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{nodes.map((node) => <line key={node.label} className={active && active !== node.label ? "dim" : ""} x1="50" y1="50" x2={node.x.replace("%", "")} y2={node.y.replace("%", "")} />)}</svg><button type="button" className="graph-node graph-core" onClick={() => go("/")}>Yuhan Chen</button>{nodes.map((node) => <button key={node.label} type="button" className={`graph-node ${active === node.label ? "active" : ""}`} style={{ left: node.x, top: node.y }} onFocus={() => setActive(node.label)} onBlur={() => setActive("")} onMouseEnter={() => setActive(node.label)} onMouseLeave={() => setActive("")} onClick={() => go(node.path)}>{node.label}</button>)}</div></section>;
}
