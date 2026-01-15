"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  HiMiniHome,
  HiMiniUser,
  HiClipboardDocumentCheck,
  HiMiniDocumentText,
  HiBriefcase,
  HiMiniEnvelopeOpen,
} from "react-icons/hi2";
import { NavItem } from "@/models/navigation";

const navItems: NavItem[] = [
  { id: "home", label: "home", icon: HiMiniHome },
  { id: "about", label: "about", icon: HiMiniUser },
  { id: "skills", label: "skills", icon: HiMiniDocumentText },
  { id: "works", label: "works", icon: HiClipboardDocumentCheck },
  { id: "resume", label: "resume", icon: HiBriefcase },
  { id: "contact", label: "contact", icon: HiMiniEnvelopeOpen },
];

const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // la sección está activa cuando 50% visible
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
    <div className="fixed h-screen w-16 bg-animated flex items-center justify-center">
      <nav className="text-cyan-500 flex flex-col gap-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="flex flex-col items-center group"
            >
              <Icon
                size={20}
                className={`transition ${
                  isActive ? "text-cyan-500" : "text-gray-400"
                } group-hover:text-cyan-400`}
              />
              <span
                className={`text-[12px] transition-all duration-300
                ${
                  isActive
                    ? "visible translate-y-1"
                    : "invisible -translate-y-0.5"
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
    </div>
  );
};

export default Sidebar;
