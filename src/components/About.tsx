export function About() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 border-t border-[color:var(--border)]">
      <div className="grid md:grid-cols-[180px_1fr] gap-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)] font-mono pt-1">
          About
        </div>
        <div className="space-y-6 text-lg text-[color:var(--fg-dim)] leading-relaxed max-w-3xl">
          <p className="text-[color:var(--fg)]">
            Builder and sales operator based in Austin.
          </p>
          <p>
            I&apos;ve shipped iOS apps, got McGill AERO Drones on the front page of the{" "}
            <em>Montreal Gazette</em>, podiumed in national UAV competitions, and most recently
            built AI-first sales systems — including{" "}
            <a
              href="https://github.com/AlexGouyet/pipeline-lobster"
              className="text-[color:var(--accent)] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Pipeline Lobster
            </a>
            , a lead-to-proposal engine that won the Sales Molty at Moltathon ATX 2025.
          </p>
          <p className="text-sm text-[color:var(--fg-muted)]">
            US / French dual citizen · English, French, Spanish
          </p>
        </div>
      </div>
    </section>
  );
}
