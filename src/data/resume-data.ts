import { IconType } from "react-icons";
import { HiBriefcase, HiAcademicCap, HiMiniUserCircle } from "react-icons/hi2";

export interface TimelineItem {
  title: string;
  year: string;
  description: string;
}

export interface TimelineGroup {
  heading: string;
  icon: IconType;
  items: TimelineItem[];
}

export interface SkillItem {
  name: string;
  /** Color del dot de acento (formato CSS, ej. "#ff5380"). */
  color: string;
}

export interface SkillGroup {
  heading: string;
  /** Texto que va después del heading, coloreado. */
  accent: string;
  skills: SkillItem[];
}

export type LanguageLevel =
  | "native"
  | "fluent"
  | "advanced"
  | "intermediate"
  | "basic";

export interface LanguageItem {
  name: string;
  level: LanguageLevel;
  /** 0–5 estrellas (puede ser decimal, p.ej. 4.5). */
  stars: number;
  color: string;
}

// =============================================================
// TIMELINE — Education & Experience
// =============================================================

export const TIMELINE: TimelineGroup[] = [
  {
    heading: "Profile",
    icon: HiMiniUserCircle,
    items: [
      {
        title: "Developer Front-End",
        year: "React · Next.js · TypeScript",
        description:
          "I build accessible, responsive interfaces with a strong focus on component architecture and design systems.",
      },
      {
        title: "Visual Communication",
        year: "Branding · Editorial · Illustration",
        description:
          "Graphic designer background. I approach every layout with attention to hierarchy, rhythm and visual identity.",
      },
      {
        title: "Teacher",
        year: "Design & IT",
        description:
          "Taught Illustrator, Photoshop and web tools in formal institutions. I enjoy making complex ideas clear.",
      },
    ],
  },
  {
    heading: "Education",
    icon: HiAcademicCap,
    items: [
      {
        title: "Teacher training course",
        year: "2011",
        description: "E.S.I.P - Cordoba",
      },
      {
        title: "Diploma in Visual Communication",
        year: "2009",
        description: "Monserrat college - Cordoba",
      },
      {
        title: "Graphic designer",
        year: "2006",
        description: "C.E.N.T. 35 - Tierra del fuego",
      },
      {
        title: "Diploma in Specialized Drawing",
        year: "2002",
        description: "Monserrat college - Cordoba",
      },
    ],
  },
  {
    heading: "Experience",
    icon: HiBriefcase,
    items: [
      {
        title: "Front-End Developer — Welfi",
        year: "2023 — 2025",
        description:
          "Built Webapp for a wellness app with React. Integrated REST APIs.",
      },
      {
        title: "Front-End Developer — Gorilla",
        year: "2022 — 2023",
        description:
          "Developer building interfaces and design systems. Focused on accessibility and performance.",
      },
      {
        title: "Front-End Developer — Freelance",
        year: "2022 — Present",
        description:
          "Building React + Next.js sites for freelance clients. Design, layout and Firebase integration.",
      },
      {
        title: "Freelance in design and layout.",
        year: "2018 — Present",
        description:
          "Brand identity for clients across industries: clothing, construction, advertising and editorial.",
      },
      {
        title: "Teacher in IT education",
        year: "2017 — 2018",
        description:
          "IT teacher. Taught programming basics, web design and digital tools to students.",
      },
      {
        title: "Independent graphic designer",
        year: "2010 — 2019",
        description:
          "Brand identity and design work for clients across different industries.",
      },
      {
        title: "Teacher Illustrator & Photoshop I.E.S. y I.S.M.M.",
        year: "2008 — 2010",
        description:
          "Taught Illustrator and Photoshop. Guided students through design fundamentals and projects.",
      },
    ],
  },
];

// =============================================================
// SKILLS — agrupados en 3 categorías con nombres narrativos.
// =============================================================

export const SKILLS: SkillGroup[] = [
  {
    heading: "Crafted with",
    accent: "",
    skills: [
      { name: "React", color: "#0cc0de" },
      { name: "Next.js", color: "#0bceaf" },
      { name: "TypeScript", color: "#0cc0de" },
      { name: "JavaScript", color: "#fbdd62" },
      { name: "Tailwind CSS", color: "#fbdd62" },
      { name: "Styled Components", color: "#ff5380" },
    ],
  },
  {
    heading: "Design toolkit",
    accent: "",
    skills: [
      { name: "Figma", color: "#f9d74c" },
      { name: "Illustrator", color: "#f9d74c" },
      { name: "Photoshop", color: "#f9d74c" },
      { name: "InDesign", color: "#0cc0de" },
      { name: "Brand Identity", color: "#ff5380" },
      { name: "Editorial Design", color: "#0bceaf" },
    ],
  },
  {
    heading: "Workflow & beyond",
    accent: "",
    skills: [
      { name: "Git & GitHub", color: "#ff5380" },
      { name: "Firebase", color: "#fbdd62" },
      { name: "Vercel", color: "#0bceaf" },
      { name: "QA & Testing", color: "#0cc0de" },
      { name: "Agile / Scrum", color: "#f9d74c" },
      { name: "Communication", color: "#ff5380" },
    ],
  },
];

// =============================================================
// LANGUAGES — estrellas (0–5)
// =============================================================

export const LANGUAGES: LanguageItem[] = [
  { name: "Spanish", level: "native", stars: 5, color: "#ff5380" },
  { name: "English", level: "advanced", stars: 4, color: "#fbdd62" },
  { name: "French", level: "intermediate", stars: 3, color: "#0bceaf" },
  { name: "Portuguese", level: "basic", stars: 2, color: "#0bceaf" },
];
