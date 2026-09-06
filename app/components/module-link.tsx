"use client";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
export function openModule(label: string) { window.dispatchEvent(new CustomEvent("yuhan:open-module", { detail: label })); }
export default function ModuleLink({ href, label, className, children }: { href: string; label: string; className?: string; children: ReactNode }) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => { if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) openModule(label); };
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}
