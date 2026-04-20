"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)] mb-6 font-mono">
          Alexander Gouyet · Austin, TX
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-4xl">
          Cross-disciplinary builder shipping{" "}
          <span className="text-[color:var(--accent)]">sales pipelines</span>,{" "}
          <span className="text-[color:var(--accent)]">autonomous agents</span>, and{" "}
          <span className="text-[color:var(--accent)]">mobile apps</span> across drones, agtech,
          and corporate wellness.
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-[color:var(--fg-dim)]">
          <a
            href="https://github.com/AlexGouyet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--accent)] transition-colors"
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-gouyet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--accent)] transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:alexandergouyet@gmail.com"
            className="hover:text-[color:var(--accent)] transition-colors"
          >
            Email →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
