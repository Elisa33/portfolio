"use client";

import { useState } from "react";
import { FaLinkedinIn, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { HiMiniCheck } from "react-icons/hi2";



interface ContactProps {
  title?: string;
  subtitle?: string;
  id?: string;
  email?: string;
  linkedinHandle?: string;
  linkedinUrl?: string;
  telegramHandle?: string;
  telegramUrl?: string;
}

/* ---------- Datos de contacto (edita aquí) ---------- */

const DEFAULT_EMAIL = "elisablange.tdf@gmail.com";
const DEFAULT_LINKEDIN_URL = "https://www.linkedin.com/in/elisabethblange/";
const DEFAULT_LINKEDIN_HANDLE = "in/elisabethblange";
const DEFAULT_TELEGRAM_HANDLE = "@elisa_lange";
const DEFAULT_TELEGRAM_URL = "https://t.me/elisa_lange";

/* ---------- Iconos SVG inline ---------- */




const CopyIcon = () => (
  <svg
    className="w-5 h-5 stroke-purple-500 stroke-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);



/* ---------- Card individual ---------- */

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  cta: string;
  copyable?: boolean;
}

function ContactCard({
  icon,
  label,
  value,
  href,
  cta,
  copyable,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard no disponible */
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex flex-col items-center text-center gap-4
        px-6 py-10
        rounded-2xl
        no-underline
        shadow-(--little-shadow)
        transition-[box-shadow,transform] duration-200 ease-out
        hover:shadow-(--down-shadow)
        active:translate-y-px
      "
    >
      {/* Icono neumórfico */}
      <span
        className="
          inline-flex items-center justify-center
          w-20 h-20
          rounded-full
          transition-transform duration-300 ease-out
          group-hover:scale-105
          shadow-(--little-shadow)
        "
      >
        {icon}
      </span>

      <div className="flex flex-col items-center gap-1">
        <span
          className="
            text-[0.78rem] font-medium
            uppercase tracking-[0.12em]
          "
        >
          {label}
        </span>
        <span
          className="
            text-sm font-medium
            break-all
          "
        >
          {value}
        </span>
      </div>

      <div className="flex items-end gap-3 mt-auto">
        <span className="text-slate-500 text-sm font-medium">{cta}</span>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copiar ${label}`}
            className="
              inline-flex items-center justify-center
              w-8 h-8
              cursor-pointer border-none              
              hover:-translate-y-px
            "
          >
            {copied ? <HiMiniCheck /> : <CopyIcon />}
          </button>
        )}
      </div>
    </a>
  );
}

/* ---------- Main component ---------- */

export default function Contact({
  title = "Contact",
  subtitle = "Have a project in mind or just want to say hi? My inbox is always open.",
  id = "contact",
  email = DEFAULT_EMAIL,
  linkedinHandle = DEFAULT_LINKEDIN_HANDLE,
  linkedinUrl = DEFAULT_LINKEDIN_URL,
  telegramHandle = DEFAULT_TELEGRAM_HANDLE,
  telegramUrl = DEFAULT_TELEGRAM_URL,
}: ContactProps) {
  return (
    <section
      id={id}
      className="py-8 lg:py-20
        text-slate-700
        bg-linear-to-l from-sky-100 to-sky-200    "
    >
      <div className="w-max-5xl mx-auto">
        <h2
          className="
          text-center
          text-[2.2rem] font-normal
          mx-0 mt-6 mb-1
        "
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="
            text-center text-base font-light opacity-75
            m-0 mx-auto mb-12 w-[90%]
            max-w-150
          "
          >
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ContactCard
            icon={<FaEnvelope className="text-slate-500 h-6 w-6" />}
            label="Email"
            value={email}
            href={`mailto:${email}`}
            cta="Send a message"
            copyable
          />
          <ContactCard
            icon={<FaLinkedinIn className="text-slate-500 h-6 w-6" />}
            label="Linkedin"
            value={linkedinHandle}
            href={linkedinUrl}
            cta="Go to /IN"
          />
          <ContactCard
            icon={<FaTelegramPlane className="text-slate-500 h-6 w-6" />}
            label="Telegram"
            value={telegramHandle}
            href={telegramUrl}
            cta="Open chat"
          />
        </div>

        <p
          className="
          text-center
          mt-10
          text-sm font-light
        "
        >
          Usually replies within 24 hours · Based in Switzerland · Open to
          remote work
        </p>
      </div>
    </section>
  );
}
