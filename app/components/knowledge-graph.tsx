"use client";

const nodes = [
  { label: "Stony Brook", target: "education", x: "15%", y: "28%" },
  { label: "Computer Science", target: "about", x: "72%", y: "20%" },
  { label: "Java", target: "skills", x: "12%", y: "69%" },
  { label: "Python", target: "skills", x: "76%", y: "70%" },
  { label: "FTC Robotics", target: "robotics", x: "47%", y: "84%" },
  { label: "Experience", target: "experience", x: "86%", y: "47%" },
];

export default function KnowledgeGraph() {
  const navigate = (target: string) => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return <section data-reveal className="knowledge-section relative border-y border-white/[.07] bg-white/[.012] py-20 lg:py-24" aria-labelledby="knowledge-title">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="section-label">System map</div>
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><h2 id="knowledge-title" className="text-3xl font-medium tracking-[-.04em] text-white sm:text-4xl">Knowledge graph</h2><p className="max-w-sm text-sm leading-6 text-zinc-500">A compact view of the coursework, tools, and experiences shaping my path.</p></div>
      <div className="knowledge-graph mt-10" aria-label="Interactive portfolio knowledge graph">
        <svg className="knowledge-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 50 15 28M50 50 72 20M50 50 12 69M50 50 76 70M50 50 47 84M50 50 86 47" /></svg>
        <button type="button" className="graph-node graph-core" onClick={() => navigate("top")}>Yuhan Chen</button>
        {nodes.map((node) => <button key={node.label} type="button" className="graph-node" style={{ left: node.x, top: node.y }} onClick={() => navigate(node.target)}>{node.label}</button>)}
      </div>
    </div>
  </section>;
}
