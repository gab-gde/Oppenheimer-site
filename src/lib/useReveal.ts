"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    ref.current?.querySelectorAll(".reveal,.reveal-fade,.stagger").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}
