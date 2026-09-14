"use client";

import { useEffect, useRef } from "react";

const FOLLOW = 0.16;

/**
 * Custom pointer: a 16px dot pinned to the pointer and a 40px circle that
 * trails behind it. The wrapper blends with `exclusion`, so the shapes invert
 * whatever they cross — see globals.css for the styling.
 */
export default function Cursor() {
  const layer = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layerEl = layer.current;
    const dotEl = dot.current;
    const ringEl = ring.current;
    if (!layerEl || !dotEl || !ringEl) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let active = false;

    const place = (el: HTMLElement, px: number, py: number) => {
      el.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
    };

    const frame = () => {
      rx += (x - rx) * FOLLOW;
      ry += (y - ry) * FOLLOW;
      place(ringEl, rx, ry);
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      place(dotEl, x, y);
      if (!active) {
        active = true;
        rx = x;
        ry = y;
        layerEl.classList.add("is-visible");
      }
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onOut = (e: MouseEvent) => {
      if (e.relatedTarget === null) {
        active = false;
        layerEl.classList.remove("is-visible");
      }
    };

    const onOver = (e: Event) => {
      const target = e.target instanceof Element ? e.target : null;
      const view = target?.closest("[data-cursor='view']");
      const interactive = target?.closest("a, button, [role='button'], input, textarea, select, label");
      layerEl.classList.toggle("is-view", Boolean(view));
      layerEl.classList.toggle("is-hover", Boolean(interactive) && !view);
    };

    const onDown = () => layerEl.classList.add("is-down");
    const onUp = () => layerEl.classList.remove("is-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div ref={layer} className="cursor-layer" aria-hidden="true">
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </div>
  );
}
