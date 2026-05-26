import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { KeyboardNav } from "@/components/KeyboardNav";

const SECTION_IDS = [
  "agenda",
  "origin",
  "demos",
  "questions-from",
  "my-questions",
  "commitment",
];

const SITE_URL = "https://alexandergouyet.com";

export const metadata: Metadata = {
  title: "Superbuilders x Alexander Gouyet | interview, May 26 2026",
  description:
    "Live interview page. Superbuilders x Alexander Gouyet — May 26, 2026.",
  openGraph: {
    title: "Superbuilders x Alexander Gouyet",
    description: "interview, May 26th, 2026",
    url: `${SITE_URL}/superbuilders`,
    siteName: "Alexander Gouyet",
    type: "website",
  },
};

// ─── External resource URLs ────────────────────────────────────────────────
const ASL_DEMO_URL = "https://asl-cv-pilot.vercel.app/";
const ASL_REPO_URL = "https://github.com/AlexGouyet/asl-cv-pilot";
// TODO: swap to Workflowy URL once the brainlift is published there.
const BRAINLIFT_URL =
  "https://www.proofeditor.ai/d/w0z8n57f?token=740b2745-d78b-451c-9314-2cb29abf2941";
const STRATEGY_MD_URL =
  "https://github.com/AlexGouyet/asl-cv-pilot/blob/main/STRATEGY.md";
const NOTION_LEARNING_SYSTEMS_URL =
  "https://www.notion.so/Dashboard-c6aea347ed438334b2c5015fc74af175?source=copy_link";
const SNIPD_PODCAST_DASHBOARD_URL =
  "https://www.notion.so/Podcast-Dashboard-359ea347ed43808bae38cab714b9c321?source=copy_link";
const NOTEBOOKLM_URL = "https://notebooklm.google.com/";
const CALENDLY_URL = "#calendly-tbd";
const LINKEDIN_URL = "#linkedin-tbd";
const GITHUB_PROFILE_URL = "https://github.com/AlexGouyet";
const EMAIL = "alexandergouyet@gmail.com";

// ─── Visually obvious placeholder for inline text we'll fill in ────────────
function Placeholder({ name }: { name: string }) {
  return (
    <span className="inline-block px-2 py-0.5 mx-0.5 rounded font-mono text-[11px] uppercase tracking-wider bg-[color:var(--accent)]/10 text-[color:var(--accent)] border border-[color:var(--accent)]/30 align-middle">
      {`{{${name}}}`}
    </span>
  );
}

// ─── Collapsible section primitive ────────────────────────────────────────
// All sections start COLLAPSED. Designed to be opened live in the room.
function Section({
  num,
  label,
  fullTitle,
  children,
  id,
}: {
  num: string;
  label: string;
  fullTitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <details
      id={id}
      className="group border-t border-[color:var(--border)] py-6 [&[open]]:py-10 transition-[padding] duration-200"
    >
      <summary className="cursor-pointer list-none flex items-baseline gap-6 select-none -mx-2 px-2 py-2 rounded-lg hover:bg-[color:var(--bg-raised)]/40 transition-colors">
        <span className="font-mono text-2xl md:text-3xl font-light tabular-nums text-[color:var(--fg-muted)] group-open:text-[color:var(--accent)] transition-colors min-w-[42px]">
          {num}
        </span>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight flex-1 leading-tight text-[color:var(--fg)] group-open:text-[color:var(--accent)] transition-colors">
          {label}
        </h2>
        <span className="font-mono text-xs text-[color:var(--fg-muted)] self-center transition-transform duration-200 group-open:rotate-90">
          ▶
        </span>
      </summary>
      {fullTitle && (
        <div className="md:pl-[66px] mt-3 text-sm font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)]">
          {fullTitle}
        </div>
      )}
      <div className="md:pl-[66px] mt-6 space-y-4 text-[color:var(--fg-dim)] leading-relaxed">
        {children}
      </div>
    </details>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-md border border-[color:var(--border)] text-[color:var(--fg-dim)]">
      {children}
    </span>
  );
}

function Tile({
  label,
  children,
  href,
}: {
  label: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--fg-muted)] mb-2">
        {label}
      </div>
      <div className="text-[color:var(--fg)] leading-relaxed">{children}</div>
    </>
  );
  const className =
    "block rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] p-5 transition-colors hover:border-[color:var(--fg-muted)] hover:bg-[color:var(--bg-raised)]";
  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}

function ActionLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const external = href.startsWith("http");
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono uppercase tracking-wider transition-colors";
  const style = primary
    ? "bg-[color:var(--accent)] text-black font-bold hover:opacity-90"
    : "border border-[color:var(--border)] text-[color:var(--fg-dim)] hover:border-[color:var(--fg-muted)] hover:text-[color:var(--fg)]";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${style}`}
      >
        {children} <span aria-hidden>↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${style}`}>
      {children} <span aria-hidden>→</span>
    </Link>
  );
}

// ─── Q&A block for the "Questions from Superbuilders" section ─────────────
function QA({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-[color:var(--border)] pl-5 py-1 hover:border-[color:var(--accent)] transition-colors">
      <div className="text-[color:var(--fg)] font-medium mb-2 leading-snug">
        {q}
      </div>
      <div className="text-[color:var(--fg-dim)] text-[15px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function SuperbuildersPage() {
  return (
    <main className="relative z-10 flex-1 w-full">
      <KeyboardNav sectionIds={SECTION_IDS} />

      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[color:var(--fg-muted)] hover:text-[color:var(--accent)] transition-colors mb-12"
        >
          ← Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 leading-[1.05] text-balance">
          Superbuilders{" "}
          <span className="text-[color:var(--fg-muted)] font-light">x</span>{" "}
          Alex Gouyet
        </h1>
        <p className="text-lg md:text-xl text-[color:var(--fg-dim)] italic leading-snug mb-8">
          Interview, May 26th, 2026
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip>Gauntlet AI · Cohort 5</Chip>
          <Chip>Austin, TX</Chip>
          <Chip>Day 30 of 70</Chip>
        </div>
      </section>

      {/* ─── Collapsible sections ──────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Keyboard navigation hint — subtle, mono, presenter-focused */}
        <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)] flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>↑↓ ← → navigate</span>
          <span>·</span>
          <span>esc overview</span>
          <span>·</span>
          <span>f fullscreen</span>
        </div>

        {/* 01 — Agenda (the table of contents itself) */}
        <Section num="01" id="agenda" label="Agenda">
          <ol className="space-y-3 list-none counter-reset-agenda">
            <li className="flex gap-4">
              <span className="font-mono text-[color:var(--fg-muted)] min-w-[24px]">
                1.
              </span>
              <span className="text-[color:var(--fg)]">
                Origin story / my fit for the role
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-[color:var(--fg-muted)] min-w-[24px]">
                2.
              </span>
              <span className="text-[color:var(--fg)]">Demos</span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-[color:var(--fg-muted)] min-w-[24px]">
                3.
              </span>
              <span className="text-[color:var(--fg)]">
                Questions from Superbuilders
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-[color:var(--fg-muted)] min-w-[24px]">
                4.
              </span>
              <span className="text-[color:var(--fg)]">
                My questions for Superbuilders
              </span>
            </li>
          </ol>
        </Section>

        {/* 02 — Origin / Fit for Learning Science Engineer */}
        <Section
          num="02"
          id="origin"
          label="Origin"
          fullTitle="Origin story / my fit for the role"
        >
          {/* Opening framing — the distillation */}
          <div className="space-y-4">
            <p>
              Five years ago, this program wouldn&apos;t have been an option
              for me. I didn&apos;t have the technical chops to hang with the
              other engineers here. Today,{" "}
              <span className="font-semibold text-[color:var(--fg)]">
                code is no longer the bottleneck
              </span>
              . The bottleneck is research and validating claims.
            </p>
            <p>
              Which is the same shape as sales. The least important thing in
              sales is drafting the proposal. The most important thing is
              slowing down, sitting with your customer, understanding their
              deepest truths, desires, and fears. Engineering is converging on
              that posture.
            </p>
            <p>
              I might actually have an advantage here because I don&apos;t
              carry the limitations of what &ldquo;the code can or can&apos;t
              do.&rdquo; In that way I&apos;m coming in with{" "}
              <span className="font-semibold text-[color:var(--fg)]">
                beginner&apos;s mind
              </span>{" "}
              — a child stepping into a new world.
            </p>
          </div>

          {/* Three blocks mapped to the role's 3 stated criteria */}
          <div className="mt-12 space-y-10">
            {/* Mission alignment */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[color:var(--accent)] mb-3">
                Mission alignment
              </div>
              <div className="space-y-3">
                <p>
                  One of my deepest passions is understanding how we learn.
                  Over the past five years I&apos;ve listened to{" "}
                  <span className="font-semibold text-[color:var(--fg)]">
                    ~160 Huberman Lab episodes
                  </span>{" "}
                  — many on the nervous system — and developed my own
                  note-taking system (my only note-taking system) so I could
                  ground any claim I made as a breathwork coach back to a
                  specific timestamp.
                </p>
                <p>
                  Through that and Jordan Peterson&apos;s lectures on the
                  Bible analyzed through the lens of a psychologist, I keep
                  returning to the same foundations:{" "}
                  <span className="text-[color:var(--fg)]">awareness</span>,{" "}
                  <span className="text-[color:var(--fg)]">
                    the zone of proximal development
                  </span>{" "}
                  (Vygotsky),{" "}
                  <span className="text-[color:var(--fg)]">Piaget</span> —
                  how we first perceive the physical world, then represent it
                  in symbols, then abstract it, and how we make meaning from
                  that whole stack.
                </p>
                <p className="text-[color:var(--fg)] italic">
                  There is nothing better I could be doing with my time than
                  working in ed-tech and helping people develop high levels of
                  agency.
                </p>
                <p className="text-sm text-[color:var(--fg-muted)] italic">
                  <Placeholder name="HUBERMAN_BREATHWORK_DETAIL_QUEUED" />
                </p>
              </div>
            </div>

            {/* High agency */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[color:var(--accent)] mb-3">
                High agency
              </div>
              <div className="space-y-3">
                <p>
                  Best evidence: how I got into this program in the first
                  place. Fourteen days from holding a door open at Modern
                  Market to an acceptance letter. The story —{" "}
                  <Link
                    href="/blog/the-doorway"
                    className="text-[color:var(--accent)] hover:underline"
                  >
                    The Doorway →
                  </Link>
                </p>
                <p>
                  I&apos;ve always been comfortable doing my own thing — not
                  worrying about what people think, while still caring about
                  my customer. That&apos;s the same posture I&apos;d bring to
                  a Superbuilders pilot.
                </p>
              </div>
            </div>

            {/* Engineering skills */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[color:var(--accent)] mb-3">
                Engineering skills
              </div>
              <div className="space-y-3">
                <p>
                  Not a traditional software background — but I have{" "}
                  <span className="font-semibold text-[color:var(--fg)]">
                    great organization
                  </span>
                  . The systems I run today:
                </p>
              </div>

              {/* Systems-I-run tiles — proof of organization */}
              <div className="grid md:grid-cols-3 gap-3 mt-4">
                <Tile
                  label="Podcast dashboard"
                  href={SNIPD_PODCAST_DASHBOARD_URL}
                >
                  Snipd + Notion + NotebookLM stack indexing 160+ Huberman
                  episodes, organized around nervous-system regulation. Live
                  walk-through in <em>Demo · 3</em>.
                </Tile>
                <Tile
                  label="Second brain (PARA)"
                  href={NOTION_LEARNING_SYSTEMS_URL}
                >
                  Notion second brain organized by Tiago Forte&apos;s
                  Projects–Areas–Resources–Archives. Every reference, every
                  project, every recurring system queryable in one place.
                </Tile>
                <Tile label="NotebookLM" href={NOTEBOOKLM_URL}>
                  Research-grade knowledge base. 120+ sources for ASL Learning
                  CV — PRDs, primary papers, interview transcripts, Slack
                  threads. The substrate behind the Mirror brainlift.
                </Tile>
              </div>

              <div className="space-y-3 mt-6">
                <p>
                  The most ambitious of these systems is the{" "}
                  <span className="font-semibold text-[color:var(--fg)]">
                    Claude Code plugin
                  </span>{" "}
                  I built for my sales team at Swift Fit — Swift Fit Cowork —
                  now the operating system of that sales motion.
                </p>
                <p>How it started: voice-journaling twice a day via OpenClaw on five prompts —</p>
                <ul className="list-disc pl-6 space-y-1 text-[color:var(--fg-dim)]">
                  <li>what did I do today</li>
                  <li>how did I spend my time</li>
                  <li>where did I get blocked</li>
                  <li>what am I proud of</li>
                  <li>how should I learn for the future</li>
                </ul>
                <p>
                  From those journals I built a map of every task in the role
                  and decided which should be{" "}
                  <span className="text-[color:var(--fg)]">
                    fully automated
                  </span>
                  , which should be{" "}
                  <span className="text-[color:var(--fg)]">
                    human-AI hybrid
                  </span>
                  , and which should remain{" "}
                  <span className="text-[color:var(--fg)]">pure-human</span>.
                  The plugin that came out the other side is what runs there
                  now.
                </p>
              </div>

              {/* Methodology tiles — sub-evidence under Engineering Skills */}
              <div className="grid gap-3 mt-6">
                <Tile label="Methodology · 1" href={STRATEGY_MD_URL}>
                  <span className="font-semibold text-[color:var(--fg)]">
                    Spec is the work, code validates.
                  </span>{" "}
                  STRATEGY.md → brainstorm → plan → build. 90/10 time split
                  between writing the spec and writing the code.
                </Tile>
                <Tile label="Methodology · 2">
                  <span className="font-semibold text-[color:var(--fg)]">
                    Ingest smoke gate (the lesson).
                  </span>{" "}
                  After the first training run, accuracy was ~7% and I
                  thought it was a hard 80-way problem. It wasn&apos;t —
                  absent hands in PopSign were filling with phantom zeros and
                  corrupting the feature vector. I wrote a 3-check gate that{" "}
                  <code>train.py</code> now exits non-zero against. Defended
                  by design, not by luck.
                </Tile>
                <Tile label="Methodology · 3">
                  <span className="font-semibold text-[color:var(--fg)]">
                    The Felipe move.
                  </span>{" "}
                  I reached out to a Superbuilders engineer at 10 p.m. to
                  stress-test the PRD before I trained anything. Ran the
                  conversation through NotebookLM. That&apos;s why{" "}
                  <Placeholder name="FELIPE_DECISION" />.
                </Tile>
              </div>
            </div>
          </div>

          {/* Texture tiles — kept for the "different by design" signal */}
          <div className="mt-12">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)] mb-3">
              Other context
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <Tile label="Drones" href="/projects/drones">
                <Placeholder name="DRONES_ONE_LINER" />
              </Tile>
              <Tile label="Viticulture" href="/projects/grape">
                <Placeholder name="VITICULTURE_ONE_LINER" />
              </Tile>
              <Tile label="Men's group">
                <Placeholder name="MENS_GROUP_ONE_LINER" />
              </Tile>
              <Tile
                label="Huberman dashboard"
                href={NOTION_LEARNING_SYSTEMS_URL}
              >
                The Snipd + Notion + NotebookLM stack I use to keep 160
                episodes queryable (see Demo · 3 for the live walk-through).
              </Tile>
            </div>
          </div>
        </Section>

        {/* 03 — Demos & methodology (3 demos: software, knowledge base, thesis) */}
        <Section
          num="03"
          id="demos"
          label="Demos"
          fullTitle="Demos / Methodology"
        >
          {/* Demo 1: ASL CV pilot — the V1 deliverable (with brainlift + NotebookLM as supporting refs) */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--fg-muted)] mb-2">
              Demo · 1 · Software
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--fg)] mb-3">
              ASL CV pilot — browser harness for ASL 1 students
            </h3>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-[color:var(--fg)]">
                  The problem.
                </span>{" "}
                ASL 1 students drill from textbooks and YouTube. They have no
                feedback loop. So they reward mush.
              </p>
              <p>
                <span className="font-semibold text-[color:var(--fg)]">
                  The approach.
                </span>{" "}
                Browser-only. Webcam stays local (R13). Confidence shown
                transparently.{" "}
                <span className="font-semibold text-[color:var(--fg)]">
                  Biased toward fail when unsure
                </span>{" "}
                — so learners absorb correct form, not approximate hand-shapes.
              </p>
              <p>
                <span className="font-semibold text-[color:var(--fg)]">
                  The metric.
                </span>{" "}
                False-pass rate — % of &ldquo;pass&rdquo; verdicts a human
                grader would overturn. Without that number under control, the
                trust posture is performative.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              <ActionLink href={ASL_DEMO_URL} primary>
                Live demo
              </ActionLink>
              <ActionLink href={NOTEBOOKLM_URL}>NotebookLM</ActionLink>
              <ActionLink href={BRAINLIFT_URL}>Mirror brainlift</ActionLink>
            </div>
          </div>

          {/* Demo 2: Knowledge base — Notion overview + Snipd dashboard merged */}
          <div className="mt-10 pt-8 border-t border-[color:var(--border)]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--fg-muted)] mb-2">
              Demo · 2 · System
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--fg)] mb-3">
              Knowledge base — PARA, Notion, and the Snipd dashboard
            </h3>
            <div className="space-y-3">
              <p>
                I&apos;ll walk through my second-brain setup: how I organize{" "}
                <span className="font-semibold text-[color:var(--fg)]">
                  Projects, Areas, Resources, Archives
                </span>{" "}
                in Notion (Tiago Forte&apos;s PARA), how it composts into a
                daily query layer, and how the whole thing got me into Gauntlet
                in 14 days from the Modern Market doorway.
              </p>
              <p>
                Then the{" "}
                <span className="font-semibold text-[color:var(--fg)]">
                  Snipd podcast dashboard
                </span>{" "}
                — 160+ Huberman episodes indexed by AI-extracted highlights,
                organized around{" "}
                <span className="font-semibold text-[color:var(--fg)]">
                  nervous-system regulation
                </span>{" "}
                (HRV, sleep, breath, cold exposure, stress recovery). Six weeks
                of commute listening into a working mental model of the
                autonomic nervous system.
              </p>
              <p className="border-l-2 border-[color:var(--accent)] pl-4 italic text-[color:var(--fg)]">
                Both are biofeedback. Notion + Snipd is <em>information</em>{" "}
                biofeedback for the mind. Mirror is <em>motor</em> biofeedback
                for the body. Same loop primitive.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              <ActionLink href={NOTION_LEARNING_SYSTEMS_URL}>
                Notion overview
              </ActionLink>
              <ActionLink href={SNIPD_PODCAST_DASHBOARD_URL}>
                Podcast dashboard
              </ActionLink>
            </div>
          </div>

          {/* Demo 3: Mirror infrastructure — the company thesis */}
          <div className="mt-10 pt-8 border-t border-[color:var(--border)]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--fg-muted)] mb-2">
              Demo · 3 · Thesis
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--fg)] mb-3">
              Mirror — visual biofeedback infrastructure
            </h3>
            <p>
              The wedge is the ASL drill. The company is the SDK every
              motion-coaching product will embed in V2+ — telerehab, connected
              fitness, music education, surgical training, dance, and the
              embodied-learning layer of AI-native schools (Alpha School / 2
              Hour Learning).
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <ActionLink href={BRAINLIFT_URL} primary>
                Full brainlift
              </ActionLink>
            </div>
          </div>
        </Section>

        {/* 04 — Questions from Superbuilders (3 fallback prompts; bring-your-own preferred) */}
        <Section
          num="04"
          id="questions-from"
          label="Questions"
          fullTitle="Questions from Superbuilders"
        >
          <ol className="space-y-4 list-decimal pl-6 marker:text-[color:var(--fg-muted)] marker:font-mono">
            <li className="pl-2 text-[color:var(--fg)]">
              What would you build next?
            </li>
            <li className="pl-2 text-[color:var(--fg)]">
              Where&apos;s the gap in your background you&apos;d want us to push
              you on?
            </li>
            <li className="pl-2 text-[color:var(--fg)]">
              Describe a challenging moment at work.
            </li>
            <li className="pl-2 text-[color:var(--fg)]">
              Do you have any doubts about my candidacy?
            </li>
          </ol>
        </Section>

        {/* 05 — My questions for Superbuilders */}
        <Section
          num="05"
          id="my-questions"
          label="Yours"
          fullTitle="My questions for Superbuilders"
        >
          <ol className="space-y-5 list-decimal pl-6 marker:text-[color:var(--fg-muted)] marker:font-mono">
            <li className="pl-2">How am I measured?</li>
            <li className="pl-2">
              How are you deciding what to work on right now? It feels like
              massive greenfield. What&apos;s the prioritization framework?
            </li>
            <li className="pl-2">
              How are you evaluating the success of a learning program in
              TimeBack today? What&apos;s the metric you&apos;d swap if you
              could?
            </li>
            <li className="pl-2">What&apos;s the worst thing that can happen?</li>
            <li className="pl-2">
              What does the first 30 days look like for a Learning Science
              Engineer?
            </li>
            <li className="pl-2">
              What&apos;s the GPU-for-AI moment that could happen with
              Superbuilders&apos; tech? What might it get used for that
              nobody&apos;s planning for?
            </li>
            <li className="pl-2">What&apos;s the biggest bottleneck right now?</li>
          </ol>
        </Section>

        {/* 06 — Commitment (replaces Contact; QR back to this page + post-interview commitments) */}
        <Section
          num="06"
          id="commitment"
          label="Commitment"
          fullTitle="My follow-up commitment to you"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start mt-2">
            <div className="space-y-4">
              <p>
                By the time you wake up Wednesday morning, you&apos;ll have
                from me:
              </p>
              <ol className="space-y-2 list-decimal pl-6 marker:text-[color:var(--fg-muted)] marker:font-mono">
                <li className="pl-2">
                  <Placeholder name="COMMITMENT_1" />
                </li>
                <li className="pl-2">
                  <Placeholder name="COMMITMENT_2" />
                </li>
                <li className="pl-2">
                  <Placeholder name="COMMITMENT_3" />
                </li>
              </ol>
              <p className="text-sm text-[color:var(--fg-muted)] italic mt-4">
                Scan to keep this page handy. Everything we discussed — the
                demo, the brainlift, the methodology, the artifacts — lives
                here.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 md:pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=https%3A%2F%2Falexandergouyet.com%2Fsuperbuilders"
                alt="QR code linking to alexandergouyet.com/superbuilders"
                width={260}
                height={260}
                className="rounded-xl bg-white p-3 border border-[color:var(--border)]"
              />
              <div className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--fg-muted)]">
                alexandergouyet.com/superbuilders
              </div>
            </div>
          </div>
        </Section>

        <div className="h-px bg-[color:var(--border)] mt-2" />
      </div>

      <Footer />
    </main>
  );
}
