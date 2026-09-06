"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import MotionController from "./motion-controller";
import SystemBoot from "./system-boot";
import PortfolioControls from "./portfolio-controls";
import SystemNavigation from "./system-navigation";
import SystemDock from "./system-dock";
import SystemFooter from "./system-footer";

const moduleNames: Record<string, string> = { "/": "CONTROL_00", "/profile": "PROFILE_01", "/journey": "JOURNEY_02", "/system": "SYSTEM_03", "/connect": "CONNECT_04" };

export default function SystemShell({ children }: { children: ReactNode }) {
  const pathname = usePathname(); const [transition, setTransition] = useState("");
  useEffect(() => {
    const open = (event: Event) => { const label = (event as CustomEvent<string>).detail || moduleNames[pathname]; setTransition(label); window.setTimeout(() => setTransition(""), 380); };
    window.addEventListener("yuhan:open-module", open); return () => window.removeEventListener("yuhan:open-module", open);
  }, [pathname]);
  return <main className="os-shell"><MotionController /><SystemBoot /><div className="system-backdrop" aria-hidden="true" /><SystemNavigation /><div className="page-surface" key={pathname}>{children}</div><SystemFooter /><SystemDock /><PortfolioControls />
    {transition && <div className="module-transition" aria-live="polite"><span>OPENING MODULE</span><strong>{transition}</strong></div>}
  </main>;
}
