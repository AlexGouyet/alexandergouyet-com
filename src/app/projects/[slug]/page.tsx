import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, type Section } from "@/lib/projects";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function SectionBlock({ section }: { section: Section }) {
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
          {section.text}
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
      const widthClass = section.aspect === "square" ? "max-w-md mx-auto" : "w-full";
      return (
        <figure className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={section.src}
            alt={section.alt}
            className={`${widthClass} ${aspectClass} rounded-xl border border-[color:var(--border)]`}
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="relative z-10 flex-1 w-full">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)] hover:text-[color:var(--accent)] transition-colors mb-10"
        >
          ← All projects
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{project.emoji}</span>
          <span className="text-xs font-mono text-[color:var(--fg-muted)] tracking-widest uppercase">
            {project.year}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-[color:var(--fg-dim)] leading-relaxed mb-8">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md border border-[color:var(--border)] text-[color:var(--fg-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-lg border border-[color:var(--border)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-colors"
              >
                {l.label} →
              </a>
            ))}
          </div>
        )}

        {project.body && (
          <div className="border-t border-[color:var(--border)] pt-8">
            {project.body.map((section, i) => (
              <SectionBlock key={i} section={section} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
