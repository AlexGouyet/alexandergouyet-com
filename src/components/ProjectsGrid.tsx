"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectsGrid() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 border-t border-[color:var(--border)]">
      <div className="grid md:grid-cols-[180px_1fr] gap-8 mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)] font-mono pt-1">
          Projects
        </div>
        <div className="text-[color:var(--fg-dim)] text-lg max-w-3xl">
          Seven things I&apos;ve shipped across the last ten years. Some have live demos, some
          have App Store links, some are case studies.
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="group block h-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-card)] overflow-hidden transition-all hover:border-[color:var(--fg-muted)] hover:bg-[color:var(--bg-raised)]"
              style={
                {
                  "--card-accent": p.accent,
                } as React.CSSProperties
              }
            >
              {p.hero ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--bg-raised)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.hero}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {p.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[color:var(--accent)]">
                      Featured
                    </span>
                  )}
                </div>
              ) : (
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[color:var(--bg-raised)] to-[color:var(--bg-card)] flex items-center justify-center overflow-hidden">
                  <span className="text-7xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                    {p.emoji}
                  </span>
                  {p.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-black/60 backdrop-blur text-[color:var(--accent)]">
                      Featured
                    </span>
                  )}
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{p.emoji}</span>
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-[color:var(--card-accent)] transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs font-mono text-[color:var(--fg-muted)] ml-auto">
                    {p.year}
                  </span>
                </div>
                <p className="text-sm text-[color:var(--fg-dim)] leading-relaxed mb-4">
                  {p.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-[color:var(--border)] text-[color:var(--fg-dim)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
