"use client";
import {
  HiMiniHome,
  HiClipboardDocumentCheck,
  HiMiniUser,
  HiBriefcase,
  HiMiniEnvelopeOpen,
} from "react-icons/hi2";
import { NavItem } from "@/models/navigation";
import Link from "next/link";

const Sidebar = () => {
  const navItems: NavItem[] = [
    { id: "about", label: "about", icon: HiMiniHome },
    { id: "skills", label: "skills", icon: HiClipboardDocumentCheck },
    { id: "works", label: "works", icon: HiMiniUser },
    { id: "resume", label: "resume", icon: HiBriefcase },
    { id: "contact", label: "contact", icon: HiMiniEnvelopeOpen },
  ];
  return (
    <div className="h-screen w-20 bg-white flex items-center justify-center">
      <nav className="text-cyan-500 flex flex-col justify-between gap-5">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
            href={`/${item.id}`}
              key={item.id}
              className="flex flex-col items-center justify-center group"
              onClick={() => {
                console.log(item.id);
              }}
            >
              <Icon size={20} className="group-hover:-translate-y-1"/>
              <span className="text-[12px] invisible -translate-y-0.5 group-hover:visible group-hover:translate-y-1 active:visible duration-300 ease-in">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
