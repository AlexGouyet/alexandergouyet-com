import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/lib/projects";
import { Footer } from "@/components/Footer";
import { SectionBlock } from "@/components/SectionBlock";

const SITE_URL = "https://alexandergouyet.com";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — Alexander Gouyet`;
  const description = project.tagline;
  const hero = project.hero
    ? `${SITE_URL}${project.hero}`
    : `${SITE_URL}/icon-512.png`;
  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Alexander Gouyet",
      type: "article",
      images: [
        {
          url: hero,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [hero],
    },
  };
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
          {project.brand && (
            <span className="text-xs font-mono text-[color:var(--fg-muted)] tracking-widest uppercase">
              {project.brand}
            </span>
          )}
          <span className="text-xs font-mono text-[color:var(--fg-muted)] tracking-widest uppercase ml-auto">
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
