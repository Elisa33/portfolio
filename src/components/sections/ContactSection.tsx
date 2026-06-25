"use client";

import { useState } from "react";

interface ContactProps {
  title?: string;
  subtitle?: string;
  id?: string;
  email?: string;
  telegramHandle?: string;
  telegramUrl?: string;
}

/* ---------- Datos de contacto (edita aquí) ---------- */

const DEFAULT_EMAIL = "elisablange.tdf@gmail.com";
const DEFAULT_TELEGRAM_HANDLE = "@elisa_lange";
const DEFAULT_TELEGRAM_URL = "https://t.me/elisa_lange";

/* ---------- Iconos SVG inline ---------- */

const MailIcon = () => (
  <svg
    className="w-10 h-10 stroke-lime-500 stroke-2"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-10 h-10 fill-lime-500" viewBox="0 0 24 24" aria-hidden>
    <path d="M9.78 18.65 10.06 14.42 17.74 7.5C18.08 7.19 17.67 7.04 17.22 7.31L7.74 13.3 3.64 12C2.76 11.75 2.75 11.14 3.84 10.7L19.81 4.54C20.54 4.21 21.24 4.72 20.96 5.84L18.24 18.65C18.05 19.56 17.5 19.78 16.74 19.36L12.6 16.3 10.61 18.23C10.38 18.46 10.19 18.65 9.78 18.65Z" />
  </svg>
);

const CopyIcon = () => (
  <svg
    className="w-5 h-5 stroke-lime-500 stroke-1"
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

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 6 9 17l-5-5" />
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
        text-lime-200
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
            text-lime-500
            text-[0.78rem] font-medium
            uppercase tracking-[0.12em]
          "
        >
          {label}
        </span>
        <span
          className="
            text-[1.05rem] font-medium
            text-lime-200
            break-all
          "
        >
          {value}
        </span>
      </div>

      <div className="flex items-center gap-3 mt-1">
        <span className="text-lime-500 text-[0.95rem] font-medium">{cta}</span>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copiar ${label}`}
            className="
              inline-flex items-center justify-center
              w-8 h-8
              rounded-full
              text-lime-500
              cursor-pointer border-none
              shadow-(--little-shadow)
              transition-[box-shadow,transform] duration-200 ease-out
              hover:shadow-(--down-shadow)
              active:translate-y-px
            "
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
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
  telegramHandle = DEFAULT_TELEGRAM_HANDLE,
  telegramUrl = DEFAULT_TELEGRAM_URL,
}: ContactProps) {
  return (
    <section
      id={id}
      className="
       
        pt-8 pb-24
        text-lime-200
        bg-linear-to-b from-lime-200 to-lime-200      "
    >
      <div
        className=" w-[90%] max-w-275
        mx-auto"
      >
        <h2
          className="
          text-center
          text-lime-500
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
            m-0 mx-auto mb-12
            max-w-150
          "
          >
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-200 mx-auto">
          <ContactCard
            icon={<MailIcon />}
            label="Email"
            value={email}
            href={`mailto:${email}`}
            cta="Send a message"
            copyable
          />
          <ContactCard
            icon={<TelegramIcon />}
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
          text-[0.85rem] font-light opacity-60
        "
        >
          Usually replies within 24 hours · Based in Argentina · Open to remote
          work
        </p>
      </div>
    </section>
  );
}
