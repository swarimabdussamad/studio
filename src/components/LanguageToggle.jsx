import Link from "next/link";

// Small EN <-> Arabic switch shown at the top of the WhatsApp CRM landing
// pages. `href` is the other language's URL; `label` is what to show (e.g.
// "عربية" on the English page, "English" on the Arabic page).
export default function LanguageToggle({ href, label }) {
  return (
    <Link
      href={href}
      hrefLang={href.startsWith("/ar/") ? "ar" : "en"}
      className="inline-flex items-center gap-x-2 rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
    >
      <span aria-hidden="true">🌐</span>
      {label}
    </Link>
  );
}
