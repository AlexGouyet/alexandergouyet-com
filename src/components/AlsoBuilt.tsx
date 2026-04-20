import { alsoBuilt } from "@/lib/projects";

export function AlsoBuilt() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 border-t border-[color:var(--border)]">
      <div className="grid md:grid-cols-[180px_1fr] gap-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)] font-mono pt-1">
          Also built
        </div>
        <div className="space-y-4">
          {alsoBuilt.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{item.emoji}</span>
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[color:var(--fg-dim)] leading-relaxed mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded-md border border-[color:var(--border)] text-[color:var(--fg-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
