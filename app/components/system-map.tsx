"use client";
import { useState } from "react";
import { skills } from "../data/profile";

const groups = Object.entries(skills) as [string, readonly string[]][];
export default function SystemMap() {
  const [active, setActive] = useState("Java"); const group = groups.find(([, values]) => values.includes(active))?.[0] ?? "Languages";
  const type = group === "Languages" ? "Programming language" : group === "Tools & Platforms" ? "Tool or platform" : "Computer Science foundation";
  return <section data-reveal className="system-map-layout"><div className="technical-map" aria-label="Interactive technical foundations map"><div className="system-root"><span>YUHAN.OS</span><strong>TECHNICAL<br />FOUNDATIONS</strong></div>{groups.map(([name, values], index) => <section className={`system-branch branch-${index}`} key={name}><h2>{name}</h2>{values.map((value) => <button type="button" key={value} className={active === value ? "active" : ""} onFocus={() => setActive(value)} onMouseEnter={() => setActive(value)} onClick={() => setActive(value)}>{value}</button>)}</section>)}</div><aside className="system-detail" aria-live="polite"><p>SELECTED CAPABILITY</p><h2>{active}</h2><dl><div><dt>TYPE</dt><dd>{type}</dd></div><div><dt>GROUP</dt><dd>{group}</dd></div><div><dt>CONTEXT</dt><dd>Resume and portfolio record</dd></div></dl><footer>SELECT A NODE TO INSPECT</footer></aside></section>;
}
