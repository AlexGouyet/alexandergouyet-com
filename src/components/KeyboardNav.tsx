"use client";

import { useEffect } from "react";

/**
 * KeyboardNav — presenter-style keyboard navigation for the
 * `/superbuilders` page (and any page that uses the same Section IDs).
 *
 *   → / ↓ / Space  advance to next section (close previous, open + scroll to next)
 *   ← / ↑          go to previous section
 *   Esc            collapse all sections (TOC overview, scroll to top)
 *   F              toggle fullscreen
 *
 * Mount once near the top of the page (renders nothing).
 */
export function KeyboardNav({ sectionIds }: { sectionIds: string[] }) {
  useEffect(() => {
    function getSection(id: string): HTMLDetailsElement | null {
      return document.getElementById(id) as HTMLDetailsElement | null;
    }

    function currentIndex(): number {
      // Pick the open section closest to (but not below) the viewport top.
      // Fallback: first section that is currently open.
      const viewportTop = window.scrollY + 80;
      let bestIdx = -1;
      let bestDist = Infinity;
      sectionIds.forEach((id, idx) => {
        const el = getSection(id);
        if (!el || !el.open) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const dist = Math.abs(top - viewportTop);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      return bestIdx;
    }

    function gotoSection(idx: number) {
      if (idx < 0 || idx >= sectionIds.length) return;
      sectionIds.forEach((id, i) => {
        const el = getSection(id);
        if (!el) return;
        el.open = i === idx;
      });
      const target = getSection(sectionIds[idx]);
      if (target) {
        // requestAnimationFrame so the open state lands before scroll measures.
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }

    function collapseAll() {
      sectionIds.forEach((id) => {
        const el = getSection(id);
        if (el) el.open = false;
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => undefined);
      } else {
        document.exitFullscreen?.().catch(() => undefined);
      }
    }

    function handler(e: KeyboardEvent) {
      // Never intercept when the user is typing into a form control.
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (target?.isContentEditable) return;

      // Respect browser-level shortcuts (Cmd+F, Cmd+L, etc.)
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const cur = currentIndex();

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "PageDown":
          e.preventDefault();
          gotoSection(cur === -1 ? 0 : Math.min(cur + 1, sectionIds.length - 1));
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          gotoSection(cur <= 0 ? 0 : cur - 1);
          break;
        case "Escape":
          e.preventDefault();
          collapseAll();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "Home":
          e.preventDefault();
          gotoSection(0);
          break;
        case "End":
          e.preventDefault();
          gotoSection(sectionIds.length - 1);
          break;
      }
    }

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [sectionIds]);

  return null;
}
