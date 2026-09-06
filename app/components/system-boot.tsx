"use client";
import { useEffect, useState } from "react";
const sessionKey = "yuhan-os-booted";
export default function SystemBoot() {
  const [visible, setVisible] = useState(false); const [stage, setStage] = useState(0);
  useEffect(() => { const skip = window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 640px)").matches || sessionStorage.getItem(sessionKey); if (skip) return; const timers = [window.setTimeout(() => setVisible(true), 0), window.setTimeout(() => setStage(1), 160), window.setTimeout(() => setStage(2), 390), window.setTimeout(() => setStage(3), 690), window.setTimeout(() => { sessionStorage.setItem(sessionKey, "true"); setVisible(false); }, 980)]; const dismiss = () => { sessionStorage.setItem(sessionKey, "true"); setVisible(false); }; window.addEventListener("keydown", dismiss, { once: true }); window.addEventListener("pointerdown", dismiss, { once: true }); return () => { timers.forEach(window.clearTimeout); window.removeEventListener("keydown", dismiss); window.removeEventListener("pointerdown", dismiss); }; }, []);
  if (!visible) return null;
  return <div className="system-boot" aria-label="Yuhan OS is starting. Press any key or click to skip."><div className="boot-core"><p className="boot-mark">YUHAN.OS</p><p className="boot-subtitle">SYSTEM INITIALIZATION</p><div className="boot-circuit" aria-hidden="true"><i /><i /><i /></div>{stage > 0 && <div className="boot-records"><span>INITIALIZING CORE SYSTEM</span><p>CORE <b>READY</b></p><p>NETWORK <b>READY</b></p><p>INTERFACE <b>READY</b></p></div>}{stage > 2 && <strong className="boot-online">SYSTEM ONLINE</strong>}</div></div>;
}
