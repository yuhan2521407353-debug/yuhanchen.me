"use client";
import { useRouter } from "next/navigation";
import { openModule } from "./module-link";
export default function SystemDock() {
  const router = useRouter();
  return <aside className="system-dock" aria-label="System dock"><button type="button" onClick={() => window.dispatchEvent(new Event("yuhan:open-palette"))}><kbd>⌘K</kbd><span>ASK</span></button><button type="button" onClick={() => window.dispatchEvent(new Event("yuhan:open-terminal"))}><b>&gt;_</b><span>TERMINAL</span></button><button type="button" onClick={() => { openModule("CONTROL_00"); router.push("/#graph"); }}><b>◎</b><span>GRAPH</span></button><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><b>↑</b><span>TOP</span></button></aside>;
}
