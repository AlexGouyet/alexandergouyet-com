"use client";

import { useState } from "react";

const SITE_URL = "https://alexandergouyet.com";
// claude.ai/new?q= works for long text in most browsers, but very long URLs get
// cut by proxies and servers. Above this length we deep-link a short prompt that
// points at the public raw file, and put the full prompt on the clipboard too.
const MAX_URL_LENGTH = 6000;

type Props = {
  /** Full master prompt text (read from /public at build time). */
  prompt: string;
  /** Public path of the raw prompt file, e.g. "/prompts/rocky.md". */
  href: string;
  /** What the reader is rebuilding, used in the short fallback prompt. */
  subject: string;
  label?: string;
};

export function buildClaudeUrl(prompt: string, href: string, subject: string) {
  const full = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
  if (full.length <= MAX_URL_LENGTH) return { url: full, short: false };
  const short =
    `Help me rebuild ${subject}. Read the master prompt at ${SITE_URL}${href} and follow it step by step, ` +
    `starting with its question round. If you can't open links, tell me and I'll paste it in (it's on my clipboard).`;
  return { url: `https://claude.ai/new?q=${encodeURIComponent(short)}`, short: true };
}

export function PromptYourClaude({ prompt, href, subject, label = "Prompt your Claude" }: Props) {
  const [note, setNote] = useState<string | null>(null);
  const { url, short } = buildClaudeUrl(prompt, href, subject);

  async function copy(): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(prompt);
      return true;
    } catch {
      // Fallback for browsers or frames without clipboard permission.
      const ta = document.createElement("textarea");
      ta.value = prompt;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      ta.remove();
      return ok;
    }
  }

  function flash(text: string) {
    setNote(text);
    window.setTimeout(() => setNote(null), 5000);
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 max-w-[calc(100vw-2rem)]">
      <div className="flex items-stretch rounded-full shadow-lg shadow-black/40 overflow-hidden border border-[color:var(--accent)]">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          onClick={async () => {
            const ok = await copy();
            flash(
              short
                ? ok
                  ? "Opened Claude. The full prompt is also on your clipboard."
                  : "Opened Claude with a link to the full prompt."
                : "Opened Claude with the full prompt."
            );
          }}
          className="flex items-center gap-2 bg-[color:var(--accent)] text-[#0a0a0b] px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          title="Opens claude.ai with a master prompt that walks your Claude through the whole build"
        >
          <span aria-hidden>✳</span>
          {label}
        </a>
        <button
          type="button"
          onClick={async () => flash((await copy()) ? "Master prompt copied." : "Copy failed. Use View instead.")}
          className="px-3 text-xs font-mono uppercase tracking-wider bg-[color:var(--bg-card)] text-[color:var(--fg)] hover:text-[color:var(--accent)] transition-colors border-l border-[color:var(--accent)]"
          aria-label="Copy the master prompt"
        >
          Copy
        </button>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center px-3 text-xs font-mono uppercase tracking-wider bg-[color:var(--bg-card)] text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition-colors border-l border-[color:var(--border)]"
          aria-label="View the master prompt"
        >
          View
        </a>
      </div>
      {note && (
        <div
          role="status"
          className="text-xs rounded-lg px-3 py-2 bg-[color:var(--bg-card)] border border-[color:var(--border)] text-[color:var(--fg-dim)]"
        >
          {note}
        </div>
      )}
    </div>
  );
}
