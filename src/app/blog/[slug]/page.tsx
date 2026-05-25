import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "@/lib/posts";
import { Footer } from "@/components/Footer";
import { SectionBlock } from "@/components/SectionBlock";

const SITE_URL = "https://alexandergouyet.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = `${post.title} — Alexander Gouyet`;
  const description = post.excerpt;
  const hero = post.hero
    ? `${SITE_URL}${post.hero}`
    : `${SITE_URL}/icon-512.png`;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Alexander Gouyet",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: hero,
          width: 1200,
          height: 630,
          alt: post.title,
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="relative z-10 flex-1 w-full">
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)] hover:text-[color:var(--accent)] transition-colors mb-10"
        >
          ← All writing
        </Link>

        <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)]">
          <span>{post.displayDate}</span>
          {post.readingTime && <span>· {post.readingTime}</span>}
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 leading-[1.1]">
          {post.emoji && <span className="mr-3">{post.emoji}</span>}
          {post.title}
        </h1>

        {post.hero && (
          <figure className="my-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero}
              alt={post.title}
              className="w-full max-h-[600px] object-contain mx-auto rounded-xl border border-[color:var(--border)]"
            />
          </figure>
        )}

        <div className="border-t border-[color:var(--border)] pt-8">
          {post.body.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}
