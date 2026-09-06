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
    const nav = document.querySelector<HTMLElement>("[data-site-nav]");
    const navIndicator = document.querySelector<HTMLElement>("[data-nav-indicator]");
    const setActiveNav = (id: string) => {
      navLinks.forEach((link, key) => link?.toggleAttribute("data-active", key === id));
      const activeLink = navLinks.get(id);
      if (nav && navIndicator && activeLink) {
        navIndicator.style.width = `${activeLink.offsetWidth}px`;
        navIndicator.style.transform = `translateX(${activeLink.offsetLeft}px)`;
        navIndicator.classList.add("is-ready");
      }
    };
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
      hero.style.setProperty("--pointer-x-percent", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      hero.style.setProperty("--pointer-y-percent", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
      hero.classList.add("is-pointer-active");
    };
    const onPointerLeave = () => hero?.classList.remove("is-pointer-active");
    if (hero && supportsFinePointer) {
      hero.addEventListener("pointermove", onPointerMove, { passive: true });
      hero.addEventListener("pointerleave", onPointerLeave);
    }

    const spotlightTargets = [...document.querySelectorAll<HTMLElement>("[data-spotlight]")];
    const onSpotlightMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const bounds = target.getBoundingClientRect();
      target.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
      target.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    };
    const magneticTargets = [...document.querySelectorAll<HTMLElement>("[data-magnetic]")];
    const onMagneticMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const bounds = target.getBoundingClientRect();
      target.style.setProperty("--magnetic-x", `${((event.clientX - bounds.left) / bounds.width - .5) * 7}px`);
      target.style.setProperty("--magnetic-y", `${((event.clientY - bounds.top) / bounds.height - .5) * 7}px`);
    };
    const resetMagnetic = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--magnetic-x", "0px");
      target.style.setProperty("--magnetic-y", "0px");
    };
    if (supportsFinePointer) {
      spotlightTargets.forEach((target) => target.addEventListener("pointermove", onSpotlightMove, { passive: true }));
      magneticTargets.forEach((target) => {
        target.addEventListener("pointermove", onMagneticMove, { passive: true });
        target.addEventListener("pointerleave", resetMagnetic);
      });
    }

    const timeline = document.querySelector<HTMLElement>("[data-timeline]");
    const timelineItems = [...document.querySelectorAll<HTMLElement>("[data-timeline-item]")];
    const timelineObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-timeline-active");
    }), { threshold: .28, rootMargin: "0px 0px -20%" });
    timelineItems.forEach((item) => timelineObserver.observe(item));
    const updateTimeline = () => {
      if (!timeline) return;
      const bounds = timeline.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight * .62 - bounds.top) / bounds.height));
      timeline.style.setProperty("--timeline-progress", `${progress}`);
    };
    window.addEventListener("scroll", updateTimeline, { passive: true });
    updateTimeline();

    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty("transform", `scaleX(${documentHeight ? window.scrollY / documentHeight : 0})`);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      root.classList.remove("motion-ready");
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (hero && supportsFinePointer) {
        hero.removeEventListener("pointermove", onPointerMove);
        hero.removeEventListener("pointerleave", onPointerLeave);
      }
      if (supportsFinePointer) {
        spotlightTargets.forEach((target) => target.removeEventListener("pointermove", onSpotlightMove));
        magneticTargets.forEach((target) => {
          target.removeEventListener("pointermove", onMagneticMove);
          target.removeEventListener("pointerleave", resetMagnetic);
        });
      }
      timelineObserver.disconnect();
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span data-scroll-progress /></div>;
}
