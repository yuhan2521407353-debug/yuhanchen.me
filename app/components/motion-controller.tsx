"use client";

import { useEffect } from "react";

const sectionIds = ["about", "education", "experience", "skills", "contact"];

export default function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const revealTargets = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );
    revealTargets.forEach((target) => revealObserver.observe(target));

    const navLinks = new Map(sectionIds.map((id) => [id, document.querySelector<HTMLAnchorElement>(`[data-nav="${id}"]`)]));
    const setActiveNav = (id: string) => navLinks.forEach((link, key) => link?.toggleAttribute("data-active", key === id));
    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveNav(entry.target.id)),
      { rootMargin: "-38% 0px -52%", threshold: 0 },
    );
    sectionIds.forEach((id) => document.getElementById(id) && sectionObserver.observe(document.getElementById(id)!));

    const header = document.querySelector<HTMLElement>("[data-site-header]");
    let previousScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      header?.toggleAttribute("data-scrolled", currentScrollY > 12);
      header?.toggleAttribute("data-hidden", currentScrollY > 180 && currentScrollY > previousScrollY);
      previousScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const hero = document.querySelector<HTMLElement>("[data-hero-motion]");
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const onPointerMove = (event: PointerEvent) => {
      if (!hero) return;
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      hero.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      hero.classList.add("is-pointer-active");
    };
    const onPointerLeave = () => hero?.classList.remove("is-pointer-active");
    if (hero && supportsFinePointer) {
      hero.addEventListener("pointermove", onPointerMove, { passive: true });
      hero.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      root.classList.remove("motion-ready");
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (hero && supportsFinePointer) {
        hero.removeEventListener("pointermove", onPointerMove);
        hero.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, []);

  return null;
}
