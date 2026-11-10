"use client";
import { useState } from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";

const WHATSAPP_URL = "https://wa.me/97471427415";
const INSTAGRAM_URL = "https://instagram.com/autotechify.com_";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {open && (
        <div className="flex flex-col items-end gap-2.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-[#1ebe59]"
            aria-label="Chat on WhatsApp"
          >
            <BsWhatsapp className="h-5 w-5 shrink-0" />
            <span>WhatsApp</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:scale-105 hover:opacity-90"
            aria-label="Follow on Instagram"
          >
            <BsInstagram className="h-5 w-5 shrink-0" />
            <span>Instagram</span>
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact options" : "Contact us"}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-200 hover:scale-110 ${
          open
            ? "bg-neutral-800 text-white hover:bg-neutral-700"
            : "bg-neutral-950 text-white hover:bg-neutral-800"
        }`}
      >
        {open ? (
          <IoMdClose className="h-6 w-6" />
        ) : (
          <HiChatBubbleOvalLeft className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
