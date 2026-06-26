"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  HiMiniHome,
  HiClipboardDocumentCheck,
  HiMiniDocumentText,
  HiBriefcase,
  HiMiniEnvelopeOpen,
} from "react-icons/hi2";
import { NavItem } from "@/models/navigation";

const navItems: NavItem[] = [
  { id: "home", label: "home", icon: HiMiniHome, color: "sky" },
  {
    id: "skills",
    label: "skills",
    icon: HiMiniDocumentText,
    color: "emerald",
  },
  {
    id: "works",
    label: "works",
    icon: HiClipboardDocumentCheck,
    color: "lime",
  },
  { id: "resume", label: "resume", icon: HiBriefcase, color: "sky" },
  {
    id: "contact",
    label: "contact",
    icon: HiMiniEnvelopeOpen,
    color: "purple",
  },
];

const COLOR_CLASSES: Record<
  string,
  { active: string; hover: string; label: string }
> = {
  emerald: {
    active: "text-sky-500",
    hover: "group-hover:text-sky-600",
    label: "text-sky-500",
  },
  lime: {
    active: "text-sky-500",
    hover: "group-hover:text-sky-600",
    label: "text-sky-500",
  },
  sky: {
    active: "text-sky-500",
    hover: "group-hover:text-sky-600",
    label: "text-sky-500",
  },
  purple: {
    active: "text-sky-500",
    hover: "group-hover:text-sky-600",
    label: "text-sky-500",
  },
};

const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px", // solo la franja central del 10% del viewport
        threshold: 0,
      },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(section);
    }
  };

  return (
    <nav className="fixed w-screen bg-sky-50 pt-2 pb-1 md:h-screen md:w-16 flex items-center lg:justify-center shadow z-50 md:flex-col justify-evenly gap-5">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        const colors = COLOR_CLASSES[item.color];
        return (
          <button
            key={item.id}
            onClick={() => goTo(item.id)}
            className="flex flex-col items-center group"
          >
            <Icon
              className={`transition h-6 w-6 ${
                isActive ? colors.active : "text-gray-400"
              } ${colors.hover}`}
            />
            <span
              className={`text-[12px] transition-all duration-300 ${colors.label}
                ${
                  isActive
                    ? "visible md:translate-y-1"
                    : "md:invisible md:-translate-y-0.5"
                }
                group-hover:visible group-hover:translate-y-1
              `}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Sidebar;
