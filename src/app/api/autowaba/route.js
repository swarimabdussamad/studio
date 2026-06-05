import { sendEmail } from "@/lib/email";
import {
  getClientIp,
  rateLimit,
  isBot,
  canSendEmail,
  recordEmailSent,
} from "@/lib/guard";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "autowaba.json");

function readEntries() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveEntries(list) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Honeypot — silently accept bots so they don't retry
    if (isBot(body)) return Response.json({ success: true });

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Block rapid repeated submissions from the same visitor
    if (!rateLimit(getClientIp(req))) {
      return Response.json(
        { error: "Too many attempts. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const entries = readEntries();

    const alreadyExists = entries.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );
    if (alreadyExists) {
      return Response.json(
        { error: "That email is already on the list." },
        { status: 409 }
      );
    }

    entries.push({
      email,
      joinedAt: new Date().toISOString(),
    });
    saveEntries(entries);

    // New signup is already saved to autowaba.json above — no need to email
    // ourselves (that would spend Resend quota on data we already have).
    // We only send the confirmation email to the person who signed up.
    try {
      // Confirmation email to subscriber (skip if we've hit the daily cap —
      // the signup is already saved, so nothing is lost)
      if (canSendEmail()) {
      await sendEmail({
        from: `AutoWaba <hello@autotechify.com>`,
        to: email,
        subject: `You're on the AutoWaba early access list`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;color:#0a0a0a;">
            <h2 style="margin-bottom:8px;">You're in. 🎉</h2>
            <p style="color:#737373;margin-top:0;">Thanks for joining the AutoWaba early access list.</p>
            <p style="color:#404040;line-height:1.6;">
              AutoWaba is a SaaS dashboard for managing WhatsApp business communications
              using the Meta Cloud API — send broadcasts, build chatbot flows, manage
              conversations, and track campaign analytics all in one place.
            </p>
            <p style="color:#404040;line-height:1.6;">
              What makes it different: you can train it on your own business. Upload
              your product catalog, FAQs, or any document — and AutoWaba's AI will
              automatically answer your customers' WhatsApp questions from that
              knowledge, in your tone, without you lifting a finger. No more
              answering the same questions manually. No more missing messages.
            </p>
            <p style="color:#404040;line-height:1.6;">
              We're still building. When it's ready, you'll be the first to know.
            </p>
            <p style="margin-top:32px;color:#a3a3a3;font-size:12px;">
              — Swarim, AutoTechify<br/>
              <a href="https://autotechify.com" style="color:#a3a3a3;">autotechify.com</a>
            </p>
          </div>
        `,
      });
        recordEmailSent(1);
      }
    } catch (mailErr) {
      console.error("AutoWaba notification email failed:", mailErr.message);
    }

    return Response.json({ success: true, total: entries.length });
  } catch (err) {
    console.error("AutoWaba signup error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
