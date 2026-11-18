import { Redis } from "@upstash/redis";

// Vercel's Upstash marketplace integration provisions KV_REST_API_URL / KV_REST_API_TOKEN.
// Same pattern as grill-me-app/src/lib/store.ts.
const restUrl = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const restToken = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = restUrl && restToken ? new Redis({ url: restUrl, token: restToken }) : null;

// Local dev only. Not durable across serverless cold starts, so production refuses
// signups instead of silently losing them when the store isn't connected.
const memory = new Map<string, Signup>();

export type Signup = { email: string; source: string; createdAt: string; sentAt?: string };

const KEY = "blog:signups";

export const signupsEnabled = () => !!redis || process.env.NODE_ENV !== "production";

export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (email.length > 254) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

export async function addSignup(email: string, source: string): Promise<"added" | "exists"> {
  const signup: Signup = { email, source, createdAt: new Date().toISOString() };
  if (redis) {
    // hsetnx keeps the first signup (and its sentAt) if the same email submits twice.
    const added = await redis.hsetnx(KEY, email, JSON.stringify(signup));
    return added ? "added" : "exists";
  }
  if (memory.has(email)) return "exists";
  memory.set(email, signup);
  return "added";
}

export async function listSignups(): Promise<Signup[]> {
  if (redis) {
    const all = (await redis.hgetall<Record<string, Signup | string>>(KEY)) ?? {};
    return Object.values(all).map((v) => (typeof v === "string" ? (JSON.parse(v) as Signup) : v));
  }
  return [...memory.values()];
}

export async function markSent(email: string): Promise<void> {
  const list = await listSignups();
  const s = list.find((x) => x.email === email);
  if (!s) return;
  const updated = { ...s, sentAt: new Date().toISOString() };
  if (redis) await redis.hset(KEY, { [email]: JSON.stringify(updated) });
  else memory.set(email, updated);
}
