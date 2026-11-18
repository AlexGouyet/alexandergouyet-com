"use client";

import { useState } from "react";

export function SignupForm({ source, cta = "Send me the build prompt" }: { source: string; cta?: string }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("done");
      setMessage("You're on the list. The prompt is coming to your inbox.");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="my-8 p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]"
    >
      <label htmlFor={`signup-${source}`} className="block text-sm font-medium text-[color:var(--fg)] mb-1">
        {cta}
      </label>
      <p className="text-xs text-[color:var(--fg-muted)] mb-3">
        Get the master prompt by email so you can start your build later. No spam, one email.
      </p>
      {state === "done" ? (
        <p role="status" className="text-sm text-[color:var(--accent)]">{message}</p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id={`signup-${source}`}
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 rounded-lg px-3 py-2 text-sm bg-[color:var(--bg)] border border-[color:var(--border)] text-[color:var(--fg)] focus:outline-none focus:border-[color:var(--accent)]"
          />
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="hidden"
            name="company"
          />
          <button
            type="submit"
            disabled={state === "sending"}
            className="rounded-lg px-4 py-2 text-sm font-semibold bg-[color:var(--accent)] text-[#0a0a0b] hover:opacity-90 disabled:opacity-50"
          >
            {state === "sending" ? "Sending…" : "Send it"}
          </button>
        </div>
      )}
      {state === "error" && <p role="alert" className="text-xs text-red-400 mt-2">{message}</p>}
    </form>
  );
}
