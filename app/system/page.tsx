import type { Metadata } from "next";
import SystemMap from "../components/system-map";
import { skills, verifiedCapabilities } from "../data/profile";

export const metadata: Metadata = {
  title: "Skills & Technologies | Yuhan Chen",
  description: "Explore Yuhan Chen’s programming languages, tools, technical foundations, and FTC robotics project work.",
  alternates: { canonical: "/system" },
  openGraph: {
    url: "/system",
    title: "Skills & Technologies | Yuhan Chen",
    description: "Explore Yuhan Chen’s programming languages, tools, technical foundations, and FTC robotics project work.",
  },
};

const systemAreas = [
  {
    title: "Languages",
    description: "Programming languages currently listed across coursework and technical experience.",
    items: skills.Languages,
    capability: "JavaScript was applied to autonomous and teleoperated robot control in FTC competition work.",
  },
  {
    title: "Tools & Platforms",
    description: "Core tools used to support programming, coursework, project organization, and documentation.",
    items: skills["Tools & Platforms"],
    capability: "Git, VS Code, IntelliJ IDEA, and Microsoft Office Suite form the current working toolkit.",
  },
  {
    title: "Foundations",
    description: "Computer-science concepts that guide the approach to programming and practical problem-solving.",
    items: skills["Technical Foundations"],
    capability: "Applied FTC work reinforces iterative testing, debugging, control logic, and cross-team collaboration.",
  },
  {
    title: "Data & Persistence",
    description: "Relational data foundations verified through implemented persistence, schema, and repository work.",
    items: verifiedCapabilities["Data & Persistence"],
    capability: "Built with explicit database configuration, migrations, transactions, and query-backed repository patterns.",
  },
  {
    title: "AI & Realtime",
    description: "Real-time AI integrations that pair model responses with constrained structured data.",
    items: verifiedCapabilities["AI & Realtime"],
    capability: "Uses structured schemas and asynchronous request handling to keep model output within application-owned contracts.",
  },
  {
    title: "Integration & Automation",
    description: "Backend interfaces and browser-driven workflows for connecting systems and inspecting live DOM state.",
    items: verifiedCapabilities["Integration & Automation"],
    capability: "Implemented HTTP and event-based integrations alongside Playwright locator, DOM evaluation, and webhook validation work.",
  },
  {
    title: "Architecture",
    description: "Explicit state and event boundaries for workflows that coordinate multiple asynchronous steps.",
    items: verifiedCapabilities.Architecture,
    capability: "Uses reducers, session-scoped coordination, and bounded async work to keep workflow transitions deliberate and traceable.",
  },
  {
    title: "Reliability & Testing",
    description: "Validation, observability, recovery, and test practices for dependable system behavior.",
    items: verifiedCapabilities["Reliability & Testing"],
    capability: "Covers pytest-based regression and integration testing, structured telemetry, timing measurement, stale-event rejection, and fail-closed checks.",
  },
];

export default function SystemPage() {
  return (
    <>
      <section className="module-hero">
        <p className="eyebrow">MODULE 03 / SYSTEM</p>
        <h1>Technical<br /><span>foundations.</span></h1>
        <p>A clear record of programming foundations and verified technical capabilities across data, real-time systems, automation, architecture, and reliability work.</p>
      </section>
      <SystemMap />
      <section data-reveal className="system-areas">
        {systemAreas.map((area) => (
          <article key={area.title}>
            <p className="eyebrow">{area.title.toUpperCase()}</p>
            <p>{area.description}</p>
            <div>{area.items.map((item) => <span key={item}>{item}</span>)}</div>
            <small>{area.capability}</small>
          </article>
        ))}
      </section>
      <section data-reveal className="system-evidence">
        <div><p className="eyebrow">APPLIED TECHNICAL WORK</p><h2>FTC Robotics Autonomous System</h2><p>Implemented autonomous and teleoperated control programs in JavaScript, collaborating with hardware and design teammates while testing and debugging robot logic for FIRST Tech Challenge competitions.</p></div>
        <div><p className="eyebrow">CURRENT TOOLKIT</p><ul><li><strong>Languages</strong><span>{skills.Languages.join(" · ")}</span></li><li><strong>Tools &amp; platforms</strong><span>{skills["Tools & Platforms"].join(" · ")}</span></li><li><strong>Foundations</strong><span>{skills["Technical Foundations"].join(" · ")}</span></li><li><strong>Systems</strong><span>Data · AI &amp; realtime · integrations · automation · reliability</span></li></ul></div>
      </section>
    </>
  );
}
