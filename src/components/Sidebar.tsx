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
  { id: "home", label: "home", icon: HiMiniHome },
  { id: "skills", label: "skills", icon: HiMiniDocumentText },
  { id: "works", label: "works", icon: HiClipboardDocumentCheck },
  { id: "resume", label: "resume", icon: HiBriefcase },
  { id: "contact", label: "contact", icon: HiMiniEnvelopeOpen },
];

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
    <nav className="fixed w-screen bg-sky-50 pt-2 pb-1 md:h-screen md:w-16 flex items-center lg:justify-center shadow z-50text-cyan-500 md:flex-col justify-evenly gap-5">
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
              className={`transition h-6 w-6 ${
                isActive ? "text-cyan-500" : "text-gray-400"
              } group-hover:text-cyan-400`}
            />
            <span
              className={`text-[12px] transition-all duration-300 text-cyan-400
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
