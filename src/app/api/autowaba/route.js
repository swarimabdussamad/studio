import nodemailer from "nodemailer";
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
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
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

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "swarimabdussamad@gmail.com",
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Notify yourself
      await transporter.sendMail({
        from: `"AutoTechify" <swarimabdussamad@gmail.com>`,
        to: "swarimabdussamad@gmail.com",
        subject: `[AutoWaba] New early access signup: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;">
            <h2 style="color:#0a0a0a;">New AutoWaba signup</h2>
            <p style="color:#737373;">Someone just joined the early access list.</p>
            <p style="font-size:18px;font-weight:600;color:#0a0a0a;">${email}</p>
            <p style="color:#a3a3a3;font-size:13px;margin-top:24px;">
              Total signups: ${entries.length}
            </p>
          </div>
        `,
      });

      // Confirmation email to subscriber
      await transporter.sendMail({
        from: `"AutoWaba" <swarimabdussamad@gmail.com>`,
        to: email,
        subject: `You're on the AutoWaba early access list`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;color:#0a0a0a;">
            <h2 style="margin-bottom:8px;">You're in. 🎉</h2>
            <p style="color:#737373;margin-top:0;">Thanks for joining the AutoWaba early access list.</p>
            <p style="color:#404040;line-height:1.6;">
              AutoWaba is a SaaS dashboard for managing WhatsApp business communications
              using the Meta Cloud API — send broadcasts, build chatbot flows, manage
              conversations, and track analytics without needing an official BSP license.
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
