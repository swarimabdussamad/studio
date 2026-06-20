"use client";

import { useState } from "react";
import Honeypot from "@/components/Honeypot";

// Early-access email capture for AutoWaba. Posts to /api/autowaba. Shared by
// the /apps page and the WhatsApp CRM landing pages so there is one form to
// maintain. `cta` sets the button label; `source` is sent along so we know
// which page the lead came from.
export default function AutoWabaForm({ cta = "Join early access", source = "apps" }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/autowaba", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      } else {
        setStatus("success");
        setMessage("You're on the list! We'll reach out when it's ready.");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return <p className="text-sm font-medium text-green-600">{message}</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center gap-x-4 gap-y-3"
    >
      <Honeypot value={website} onChange={(e) => setWebsite(e.target.value)} />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="block rounded-2xl border border-neutral-300 bg-transparent px-5 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : cta}
      </button>
      {status === "error" && (
        <p className="w-full text-sm text-red-500">{message}</p>
      )}
    </form>
  );
}
