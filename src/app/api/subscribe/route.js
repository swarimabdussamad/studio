import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");

function readSubscribers() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function saveSubscribers(list) {
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

    const subscribers = readSubscribers();

    const alreadyExists = subscribers.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );
    if (alreadyExists) {
      return Response.json(
        { error: "That email is already subscribed." },
        { status: 409 }
      );
    }

    subscribers.push({
      email,
      subscribedAt: new Date().toISOString(),
    });
    saveSubscribers(subscribers);

    // Notify yourself via Gmail
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

      await transporter.sendMail({
        from: `"AutoTechify" <swarimabdussamad@gmail.com>`,
        to: "swarimabdussamad@gmail.com",
        subject: `[AutoTechify] New subscriber: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;">
            <h2 style="color:#0a0a0a;">New subscriber</h2>
            <p style="color:#737373;">Someone just subscribed on AutoTechify.</p>
            <p style="font-size:18px;font-weight:600;color:#0a0a0a;">${email}</p>
            <p style="color:#a3a3a3;font-size:13px;margin-top:24px;">
              Total subscribers: ${subscribers.length}
            </p>
          </div>
        `,
      });
    } catch (mailErr) {
      // Email notification failed but subscription was saved — not critical
      console.error("Subscriber notification email failed:", mailErr.message);
    }

    return Response.json({ success: true, total: subscribers.length });
  } catch (err) {
    console.error("Subscribe error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
