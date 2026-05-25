import Link from "next/link";
import type { Section } from "@/lib/projects";

/**
 * Parse `[label](href)` markdown-style links inside a paragraph text.
 * Internal hrefs (start with `/`) use next/link; external open in a new tab.
 */
function parseInlineLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isInternal = href.startsWith("/");
    const className =
      "text-[color:var(--accent)] font-medium underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity";
    if (isInternal) {
      parts.push(
        <Link key={key++} href={href} className={className}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noreferrer" className={className}>
          {label}
        </a>
      );
    }
    lastIndex = linkRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

export function SectionBlock({ section }: { section: Section }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl font-semibold tracking-tight mt-10 mb-3 text-[color:var(--fg)]">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p className="text-base leading-relaxed text-[color:var(--fg-dim)] mb-4">
          {parseInlineLinks(section.text)}
        </p>
      );
    case "italic-p":
      return (
        <p className="text-base leading-relaxed italic text-[color:var(--fg-dim)] mb-4">
          {parseInlineLinks(section.text)}
        </p>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-[color:var(--accent)] pl-4 my-6 italic text-[color:var(--fg)] leading-relaxed">
          {section.text}
        </blockquote>
      );
    case "list":
      return (
        <ul className="space-y-2 my-4 pl-0">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-base leading-relaxed text-[color:var(--fg-dim)]"
            >
              <span className="text-[color:var(--accent)] mt-0.5 select-none">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "kv":
      return (
        <div className="my-6 border border-[color:var(--border)] rounded-xl overflow-hidden">
          {section.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[140px_1fr] gap-4 px-4 py-3 border-b last:border-b-0 border-[color:var(--border)] text-sm"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--fg-muted)] pt-0.5">
                {row.label}
              </div>
              <div className="text-[color:var(--fg-dim)]">{row.value}</div>
            </div>
          ))}
        </div>
      );
    case "link":
      return (
        <a
          href={section.href}
          target="_blank"
          rel="noreferrer"
          className="block my-4 p-4 rounded-xl border border-[color:var(--border)] hover:border-[color:var(--accent)] transition-colors"
        >
          <div className="text-sm font-medium text-[color:var(--fg)]">
            {section.label} →
          </div>
          {section.description && (
            <div className="text-xs text-[color:var(--fg-muted)] mt-1">
              {section.description}
            </div>
          )}
        </a>
      );
    case "youtube":
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-xl overflow-hidden border border-[color:var(--border)] aspect-video bg-[color:var(--bg-card)]">
            <iframe
              src={`https://www.youtube.com/embed/${section.id}`}
              title={section.title ?? "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {section.caption && (
            <figcaption className="text-xs text-[color:var(--fg-muted)] mt-2 font-mono text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    case "loom":
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-xl overflow-hidden border border-[color:var(--border)] aspect-video bg-[color:var(--bg-card)]">
            <iframe
              src={`https://www.loom.com/embed/${section.id}`}
              title={section.title ?? "Loom video"}
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {section.caption && (
            <figcaption className="text-xs text-[color:var(--fg-muted)] mt-2 font-mono text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    case "pdf":
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--bg-card)]" style={{ height: "600px" }}>
            <iframe
              src={section.src}
              title={section.title ?? "PDF"}
              className="w-full h-full"
            />
          </div>
          {section.caption && (
            <figcaption className="text-xs text-[color:var(--fg-muted)] mt-2 font-mono text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    case "image": {
      const aspectClass =
        section.aspect === "square"
          ? "aspect-square object-cover"
          : section.aspect === "video"
          ? "aspect-video object-cover"
          : section.aspect === "portrait"
          ? "aspect-[3/4] object-cover"
          : "";
      // size overrides default width — small ≈ 25%, medium ≈ 50%, large = full
      const sizeClass =
        section.size === "small"
          ? "max-w-[200px] mx-auto"
          : section.size === "medium"
          ? "max-w-md mx-auto"
          : section.size === "large"
          ? "w-full"
          : section.aspect === "square"
          ? "max-w-md mx-auto"
          : "w-full";
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.src}
            alt={section.alt}
            className={`${sizeClass} ${aspectClass} rounded-xl border border-[color:var(--border)]`}
          />
          {section.caption && (
            <figcaption className="text-xs text-[color:var(--fg-muted)] mt-2 font-mono text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    case "gallery":
      return (
        <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {section.images.map((img, i) => (
            <figure key={i} className="space-y-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover rounded-lg border border-[color:var(--border)]"
              />
              {img.caption && (
                <figcaption className="text-[10px] text-[color:var(--fg-muted)] font-mono">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );
  }
}
