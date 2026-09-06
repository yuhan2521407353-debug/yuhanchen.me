"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "yuhan-os-booted";

export default function SystemBoot() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    if (reduceMotion || mobile || window.sessionStorage.getItem(SESSION_KEY)) return;

    const startTimer = window.setTimeout(() => setVisible(true), 0);
    const endTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, 780);
    return () => { window.clearTimeout(startTimer); window.clearTimeout(endTimer); };
  }, []);

  if (!visible) return null;

  return <div className="system-boot" aria-hidden="true">
    <div className="system-boot-copy">
      <p>INITIALIZING YUHAN.OS</p>
      <span>Loading profile...</span>
      <span>Loading interface...</span>
    </div>
  </div>;
}
