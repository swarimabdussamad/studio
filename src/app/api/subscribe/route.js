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

      // Notify yourself
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

      // Confirmation email to subscriber
      await transporter.sendMail({
        from: `"AutoTechify" <swarimabdussamad@gmail.com>`,
        to: email,
        subject: `You're subscribed to AutoTechify`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;color:#0a0a0a;line-height:1.7;">
            <h2 style="margin-bottom:4px;font-size:22px;">Welcome to AutoTechify.</h2>
            <p style="color:#737373;margin-top:0;font-size:14px;">You're now on the list — glad to have you.</p>

            <p style="color:#404040;">
              Whether you run a 3-person shop or a 300-person operation, one thing stays
              the same: time is your most expensive resource. Wasted on repetitive tasks,
              manual processes, and work that could easily be handled by the right system.
            </p>

            <p style="color:#404040;">
              That's what I focus on — practical automation that fits real businesses.
              Not theory. Not overengineered solutions. Just tools and systems you can
              actually implement to free up your team, reduce overhead, and get more done
              without hiring more people.
            </p>

            <p style="color:#404040;">
              You'll hear from me when I ship something new, write something worth
              reading, or find an approach that's making a real difference. No noise —
              only things that can move the needle in your business.
            </p>

            <p style="margin-top:32px;color:#a3a3a3;font-size:12px;">
              — Swarim, AutoTechify<br/>
              <a href="https://autotechify.com" style="color:#a3a3a3;">autotechify.com</a>
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
