import { addSignup, normalizeEmail, signupsEnabled } from "@/lib/signups";

export async function POST(request: Request) {
  if (!signupsEnabled()) {
    return Response.json({ error: "Signups aren't open yet." }, { status: 503 });
  }
  let body: { email?: unknown; source?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Bad request." }, { status: 400 });
  }
  // Honeypot: real people never fill the hidden "company" field.
  if (typeof body.company === "string" && body.company.trim()) {
    return Response.json({ ok: true });
  }
  const email = normalizeEmail(body.email);
  if (!email) return Response.json({ error: "That email doesn't look right." }, { status: 400 });
  const source = typeof body.source === "string" ? body.source.slice(0, 64) : "unknown";
  try {
    const result = await addSignup(email, source);
    return Response.json({ ok: true, result });
  } catch {
    return Response.json({ error: "Couldn't save that. Try again in a minute." }, { status: 500 });
  }
}
