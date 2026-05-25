import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsSorted } from "@/lib/posts";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://alexandergouyet.com";

export const metadata: Metadata = {
  title: "Writing — Alexander Gouyet",
  description:
    "Notes from the field — Gauntlet AI, agent infrastructure, sales pipelines, and the chapter I'm currently inside.",
  openGraph: {
    title: "Writing — Alexander Gouyet",
    description:
      "Notes from the field — Gauntlet AI, agent infrastructure, sales pipelines, and the chapter I'm currently inside.",
    url: `${SITE_URL}/blog`,
    siteName: "Alexander Gouyet",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostsSorted();

  return (
    <main className="relative z-10 flex-1 w-full">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)] hover:text-[color:var(--accent)] transition-colors mb-10"
        >
          ← Home
        </Link>

        <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--fg-muted)] mb-4 font-mono">
          Writing
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Notes from the field
        </h1>
        <p className="text-lg text-[color:var(--fg-dim)] leading-relaxed mb-12">
          A series I&apos;m publishing weekly from inside Gauntlet AI&apos;s G5 cohort.
          Texture from the build, the cohort, and the chapter I&apos;m currently inside.
        </p>

        <div className="border-t border-[color:var(--border)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-[color:var(--border)] py-8 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)]">
                  {post.displayDate}
                </span>
                {post.readingTime && (
                  <span className="text-xs font-mono text-[color:var(--fg-muted)]">
                    · {post.readingTime}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-[color:var(--accent)] transition-colors">
                {post.emoji && <span className="mr-2">{post.emoji}</span>}
                {post.title}
              </h2>
              <p className="text-[color:var(--fg-dim)] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-3 text-xs font-mono text-[color:var(--fg-muted)] group-hover:text-[color:var(--accent)] transition-colors">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
