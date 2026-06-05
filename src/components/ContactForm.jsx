"use client";
import { useId, useState } from "react";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Honeypot from "./Honeypot";

const TextInput = ({ label, ...props }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
};

const RadioInput = ({ label, ...props }) => (
  <label className="flex gap-x-3">
    <input
      type="radio"
      {...props}
      className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
    />
    <span className="text-base/6 text-neutral-950">{label}</span>
  </label>
);

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", topic: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "", topic: "", website: "" });
      }
    } catch {
      setErrorMsg("Could not reach the server. Check your connection.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <FadeIn className="lg:order-last">
        <div className="rounded-2xl border border-neutral-200 px-8 py-12 text-center">
          <p className="font-display text-2xl font-semibold text-neutral-950">
            Message sent.
          </p>
          <p className="mt-4 text-base text-neutral-600">
            Thanks for reaching out. I read every message and will get back to
            you soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-sm text-neutral-500 underline underline-offset-4 transition hover:text-neutral-950"
          >
            Send another message
          </button>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <Honeypot value={form.website} onChange={handleChange} />
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Send a message
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                What is this about?
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="A blog post" name="topic" value="A blog post" onChange={handleChange} />
                <RadioInput label="AutoWaba" name="topic" value="AutoWaba" onChange={handleChange} />
                <RadioInput label="Collaboration" name="topic" value="Collaboration" onChange={handleChange} />
                <RadioInput label="Just saying hi" name="topic" value="Just saying hi" onChange={handleChange} />
              </div>
            </fieldset>
          </div>
        </div>

        {status === "error" && (
          <p className="mt-4 text-sm text-red-600">{errorMsg}</p>
        )}

        <Button
          type="submit"
          className="mt-10"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
