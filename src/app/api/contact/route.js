import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, topic } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

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
      from: `"AutoTechify Contact" <swarimabdussamad@gmail.com>`,
      to: "swarimabdussamad@gmail.com",
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

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
