"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";

const WHATSAPP_URL = "https://wa.me/97471427415";
const EMAIL_URL = "mailto:hello@autotechify.com";

const SayHello = ({ invert = false, align = "right" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onClick(event) {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    }
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={clsx(
          "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
          invert
            ? "bg-white text-neutral-950 hover:bg-neutral-200"
            : "bg-neutral-950 text-white hover:bg-neutral-800"
        )}
      >
        Say hello
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={clsx(
              "absolute z-50 mt-3 w-48 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-neutral-950/5",
              align === "right"
                ? "right-0 origin-top-right"
                : "left-0 origin-top-left"
            )}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-x-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
            >
              <BsWhatsapp className="h-5 w-5 shrink-0 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href={EMAIL_URL}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-x-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100"
            >
              <HiOutlineEnvelope className="h-5 w-5 shrink-0 text-neutral-500" />
              Email
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SayHello;
