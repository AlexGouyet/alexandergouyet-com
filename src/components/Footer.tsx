export function Footer() {
  return (
    <footer className="relative z-10 max-w-5xl mx-auto px-6 py-12 border-t border-[color:var(--border)] mt-16">
      <div className="grid md:grid-cols-[180px_1fr] gap-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)] font-mono">
          Contact
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[color:var(--fg-dim)]">
          <a
            href="mailto:alexandergouyet@gmail.com"
            className="hover:text-[color:var(--accent)] transition-colors"
          >
            alexandergouyet@gmail.com
          </a>
          <a
            href="https://github.com/AlexGouyet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--accent)] transition-colors"
          >
            github.com/AlexGouyet
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-gouyet"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--accent)] transition-colors"
          >
            linkedin.com/in/alexander-gouyet
          </a>
        </div>
      </div>
      <div className="mt-10 text-xs text-[color:var(--fg-muted)] font-mono">
        © {new Date().getFullYear()} · Built with Next.js + Claude Code
      </div>
    </footer>
  );
}
