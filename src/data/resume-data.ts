// =============================================================
// resume-data.ts
// Datos de la sección Resume de Elisa B. Lange.
// Estructura inspirada en el portfolio Arshia (timeline + skills
// bars + language stars), pero con la estética neumórfica del
// portfolio original.
// =============================================================

export interface TimelineItem {
  title: string;
  year: string;
  description: string;
  /** Color del punto/acento del item (formato CSS, ej. "#ff5380"). */
  color: string;
}

export interface TimelineGroup {
  heading: string;
  icon: "graduation" | "pencil" | "briefcase";
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

export type LanguageLevel = "native" | "fluent" | "advanced" | "intermediate" | "basic";

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
    heading: "Education",
    icon: "graduation",
    items: [
      {
        title: "QA Tester — Nahual IT",
        year: "2023 — 2024",
        description:
          "Certified in Quality Assurance at Nahual IT. Covered manual testing, test case design, defect reporting and basic automation. Worked on real projects with agile teams.",
        color: "#ff5380",
      },
      {
        title: "Front-End Development Bootcamp",
        year: "2021 — 2022",
        description:
          "Intensive program focused on HTML5, CSS3, JavaScript, React and Styled Components. Built multiple production-ready projects as freelance and practice work.",
        color: "#fbdd62",
      },
      {
        title: "Graphic Design Degree",
        year: "2014 — 2018",
        description:
          "Formal education in branding, editorial design, illustration and visual identity. Strong foundation on Illustrator, Photoshop and InDesign.",
        color: "#0bceaf",
      },
    ],
  },
  {
    heading: "Experience",
    icon: "pencil",
    items: [
      {
        title: "Front-End Developer — Freelance",
        year: "2022 — Present",
        description:
          "Building React + Next.js + Tailwind sites for freelance clients (Tecnobox, Elise y Roque, Checo, Bruna). Responsible for design, layout and integration with backends like Firebase.",
        color: "#ff5380",
      },
      {
        title: "Brand & Graphic Designer — Freelance",
        year: "2018 — Present",
        description:
          "Brand identity development for clients across industries: children's clothing (Barquito de papel), construction (Tikal), advertising (Ampersand), editorial and illustration work.",
        color: "#fbdd62",
      },
      {
        title: "React Native — In progress",
        year: "2024 — Present",
        description:
          "Currently studying React Native to expand into mobile development. Combining previous React experience with native patterns and mobile UX principles.",
        color: "#0bceaf",
      },
    ],
  },
];

// =============================================================
// SKILLS — agrupados en 3 categorías con nombres narrativos.
// Sin porcentajes: cada skill es un chip con un dot de color.
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
  { name: "English", level: "fluent", stars: 4.5, color: "#fbdd62" },
  { name: "Portuguese", level: "intermediate", stars: 3, color: "#0bceaf" },
];
