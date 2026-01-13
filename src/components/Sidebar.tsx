"use client";

import {
  HiMiniHome,
  HiClipboardDocumentCheck,
  HiMiniUser,
  HiBriefcase,
  HiMiniEnvelopeOpen,
} from "react-icons/hi2";
import { NavItem } from "@/models/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navItems: NavItem[] = [
  { id: "about", label: "about", icon: HiMiniHome },
  { id: "skills", label: "skills", icon: HiClipboardDocumentCheck },
  { id: "works", label: "works", icon: HiMiniUser },
  { id: "resume", label: "resume", icon: HiBriefcase },
  { id: "contact", label: "contact", icon: HiMiniEnvelopeOpen },
];

const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState<string>("about");

  const goTo = (section: string) => {
    setActive(section);
    router.push(`/#${section}`);
  };

  return (
    <div className="fixed h-screen w-20 bg-white flex items-center justify-center">
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
                  isActive ? "text-cyan-600" : "text-gray-400"
                } group-hover:-translate-y-1`}
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
