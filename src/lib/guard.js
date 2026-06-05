// Simple in-memory abuse guard for the public form routes.
//
// All state lives in memory, so it resets when the server restarts and is
// per-instance. That's intentionally simple — it's plenty for an early-stage,
// low-traffic site. If you later deploy across multiple instances (e.g. on
// Vercel) and need shared limits, swap this for a tiny Redis store like
// Upstash (free tier) without changing the call sites below.

const WINDOW_MS = 10 * 60 * 1000; // 10-minute window
const MAX_PER_WINDOW = 3; // max submissions per IP per window
const DAILY_EMAIL_CAP = 90; // stay safely under Resend's free 100/day

const ipHits = new Map(); // ip -> number[] of request timestamps

let dailyCount = 0;
let dailyDate = new Date().toDateString();

/** Best-effort client IP from proxy headers. */
export function getClientIp(req) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/**
 * Returns false if this IP has exceeded MAX_PER_WINDOW submissions in the
 * current window. Otherwise records the hit and returns true.
 */
export function rateLimit(ip) {
  const now = Date.now();
  const recent = (ipHits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return false;
  recent.push(now);
  ipHits.set(ip, recent);
  return true;
}

/** True while we're still under today's email cap (resets each calendar day). */
export function canSendEmail() {
  const today = new Date().toDateString();
  if (today !== dailyDate) {
    dailyDate = today;
    dailyCount = 0;
  }
  return dailyCount < DAILY_EMAIL_CAP;
}

/** Call after a successful send so the daily counter stays accurate. */
export function recordEmailSent(count = 1) {
  canSendEmail(); // roll the date over if needed
  dailyCount += count;
}

/**
 * Honeypot check. Our forms include a hidden `website` field that real users
 * never see or fill; bots auto-fill every input. If it arrives non-empty,
 * treat the request as spam.
 */
export function isBot(body) {
  return Boolean(body && body.website);
}
