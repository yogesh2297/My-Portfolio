"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const outer = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const tick = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      outer.current.x = lerp(outer.current.x, mouse.current.x, 0.1);
      outer.current.y = lerp(outer.current.y, mouse.current.y, 0.1);

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouse.current.x - 3}px, ${mouse.current.y - 3}px)`;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outer.current.x - 16}px, ${outer.current.y - 16}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const hover = () => outerRef.current?.classList.add("cursor-hover");
    const unhover = () => outerRef.current?.classList.remove("cursor-hover");

    const els = document.querySelectorAll("a, button, [data-hover]");
    els.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unhover);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" />
    </>
  );
}
