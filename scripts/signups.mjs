// Tonight's prompt send, step by step. Reads the same Upstash store as /api/signup.
//   vercel env pull .env.local          (once, after the store is connected)
//   node --env-file=.env.local scripts/signups.mjs list        -> count + pending emails
//   node --env-file=.env.local scripts/signups.mjs mark a@b.c  -> record a sent email
// Sending itself goes out from Alexander's Gmail, only after his yes on the count and text.
import { Redis } from "@upstash/redis";

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
if (!url || !token) {
  console.error("No store env. Run: vercel env pull .env.local");
  process.exit(1);
}
const redis = new Redis({ url, token });
const KEY = "blog:signups";
const [cmd, arg] = process.argv.slice(2);

const all = Object.values((await redis.hgetall(KEY)) ?? {}).map((v) => (typeof v === "string" ? JSON.parse(v) : v));

if (cmd === "list") {
  const pending = all.filter((s) => !s.sentAt);
  console.log(`Signups: ${all.length} total, ${pending.length} not sent yet`);
  for (const s of pending) console.log(`${s.email}\t${s.source}\t${s.createdAt}`);
} else if (cmd === "mark" && arg) {
  const s = all.find((x) => x.email === arg.toLowerCase());
  if (!s) throw new Error(`No signup for ${arg}`);
  await redis.hset(KEY, { [s.email]: JSON.stringify({ ...s, sentAt: new Date().toISOString() }) });
  console.log(`Marked sent: ${s.email}`);
} else {
  console.log("Usage: list | mark <email>");
}
