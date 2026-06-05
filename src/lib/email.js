const RESEND_API_URL = "https://api.resend.com/emails";

/**
 * Send an email via the Resend REST API.
 *
 * Uses a direct fetch rather than the `resend` SDK so the route bundles
 * cleanly (the SDK pulls in an optional `@react-email/render` dependency we
 * don't use) and runs on any runtime.
 *
 * @param {Object} params
 * @param {string} params.from    - Sender, e.g. `AutoTechify <hello@autotechify.com>`
 * @param {string|string[]} params.to
 * @param {string} params.subject
 * @param {string} params.html
 * @param {string} [params.replyTo]
 * @returns {Promise<Object>} Parsed Resend response (contains the message id)
 */
export async function sendEmail({ from, to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error (${res.status}): ${body}`);
  }

  return res.json();
}
