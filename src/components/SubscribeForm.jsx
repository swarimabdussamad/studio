"use client";
import { useState } from "react";

const ArrowIcon = (props) => (
  <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3 10 .5v2H0v1h10v2L16 3Z"
    />
  </svg>
);

const SubscribeForm = ({ variant = "footer" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setErrorMsg("Could not reach the server. Check your connection.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-sm font-semibold text-neutral-950">
        You are in. I will reach out when something new drops.
      </p>
    );
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="max-w-sm w-full">
        <div className="relative mt-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address"
            required
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Subscribe"
              disabled={status === "loading"}
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-50"
            >
              <ArrowIcon className="w-4" />
            </button>
          </div>
        </div>
        {status === "error" && (
          <p className="mt-2 text-xs text-red-600">{errorMsg}</p>
        )}
      </form>
    );
  }

  // Blog page variant — larger, horizontal layout
  return (
    <form onSubmit={handleSubmit} className="mt-8 flex max-w-sm gap-x-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        autoComplete="email"
        aria-label="Email address"
        required
        className="block w-full rounded-2xl border border-neutral-300 bg-transparent px-5 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/5"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "..." : "Notify me"}
      </button>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-600">{errorMsg}</p>
      )}
    </form>
  );
};

export default SubscribeForm;
