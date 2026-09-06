"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { modules } from "../data/profile";
import ModuleLink from "./module-link";

export default function SystemNavigation() {
  const pathname = usePathname(); const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="site-header-inner"><ModuleLink href="/" label="CONTROL_00" className="brand">YUHAN<span>.OS</span></ModuleLink><nav className="desktop-nav" aria-label="Primary navigation">{modules.map((item) => <ModuleLink key={item.path} href={item.path} label={`${item.name}_${item.id}`} className={pathname === item.path ? "active" : ""}>{item.name}</ModuleLink>)}</nav><button className="mobile-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button></div>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{modules.map((item) => <ModuleLink key={item.path} href={item.path} label={`${item.name}_${item.id}`} className={pathname === item.path ? "active" : ""}>{item.id} / {item.name}</ModuleLink>)}</nav>}
  </header>;
}
