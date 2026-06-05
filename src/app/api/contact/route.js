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

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

function readContacts() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveContacts(list) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, topic } = body;

    // Honeypot — silently accept bots so they don't retry
    if (isBot(body)) return Response.json({ success: true });

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Block rapid repeated submissions from the same visitor
    if (!rateLimit(getClientIp(req))) {
      return Response.json(
        { error: "Too many messages. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    // Save the message first so it's never lost — even if the email below
    // fails or we've hit the daily cap. You can always read data/contacts.json.
    const contacts = readContacts();
    contacts.push({
      name,
      email,
      topic: topic || "",
      message,
      receivedAt: new Date().toISOString(),
    });
    saveContacts(contacts);

    // Notify yourself by email (skip if we've hit the daily cap — the message
    // is already saved above, so nothing is lost)
    try {
      if (canSendEmail()) {
        await sendEmail({
          from: `AutoTechify Contact <hello@autotechify.com>`,
          to: "hello@autotechify.com",
          replyTo: email,
          subject: `[AutoTechify] ${topic ? `[${topic}] ` : ""}Message from ${name}`,
          html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0a0a0a;border-bottom:1px solid #e5e5e5;padding-bottom:12px;">
            New message from AutoTechify
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#737373;width:80px;">Name</td>
              <td style="padding:8px 0;color:#0a0a0a;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#737373;">Email</td>
              <td style="padding:8px 0;color:#0a0a0a;">
                <a href="mailto:${email}" style="color:#0a0a0a;">${email}</a>
              </td>
            </tr>
            ${topic ? `
            <tr>
              <td style="padding:8px 0;color:#737373;">Topic</td>
              <td style="padding:8px 0;color:#0a0a0a;">${topic}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top:24px;padding:16px;background:#f5f5f5;border-radius:8px;">
            <p style="margin:0;color:#0a0a0a;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:24px;color:#a3a3a3;font-size:13px;">
            Reply to this email to respond directly to ${name}.
          </p>
        </div>
      `,
        });
        recordEmailSent(1);
      }
    } catch (mailErr) {
      // Email failed but the message was saved above — not critical
      console.error("Contact notification email failed:", mailErr.message);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
