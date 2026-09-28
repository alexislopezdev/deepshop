"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!element || reduceMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    document.documentElement.classList.add("motion-enabled");
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.dataset.reveal =
      element.getBoundingClientRect().top < window.innerHeight * 0.9
        ? "visible"
        : "hidden";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
