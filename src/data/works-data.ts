export type CardVariant = "web" | "brand" | "graphic";
export type HoverEffect = "translate" | "scale";

export interface WorkProject {
  id: string;
  client: string;
  img: string;
  variant: CardVariant;
  hover: HoverEffect;
  rol: string;
  techs: string;
  icons: IconName[];
  mode: string;
  description: string;
  site?: string;
  code?: string;
}

export interface WorkGroup {
  group: string;
  items: WorkProject[];
}

export type IconName =
  | "react"
  | "js"
  | "styled"
  | "firebase"
  | "html5"
  | "css3"
  | "tailwind"
  | "nextjs"
  | "ai"
  | "ps"
  | "id"
  | "eye"
  | "github";

// =============================================================
// SVGs inline — colores de la marca de cada tecnología
// (mantienen la estética neumórfica porque son monocromos
//  y solo ocupan 22×22 px en las cards)
// =============================================================

export const ICONS: Record<IconName, string> = {
  react: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" fill="#00caee"/><g fill="none" stroke="#00caee" strokeWidth="1"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></g></svg>`,
  js: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#f7df1e"/><path d="M9 17.5c0 1.5-.9 2.2-2.2 2.2-1.2 0-1.9-.6-2.2-1.4l1.5-.9c.2.4.4.7.9.7.5 0 .8-.2.8-1V11.5H9v6zM14.6 19.7c-1.4 0-2.3-.7-2.7-1.6l1.5-.9c.3.5.7.9 1.4.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.8-1.1-1.8-2.3 0-1.2.9-2.1 2.3-2.1 1 0 1.7.3 2.2 1.2l-1.2.8c-.3-.5-.6-.7-1-.7s-.7.3-.7.7c0 .5.3.7 1 1l.4.2c1.3.5 2 1.1 2 2.4 0 1.3-1.1 2.1-2.5 2.1z" fill="#000"/></svg>`,
  styled: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="#00caee" strokeWidth="1.4" fill="none"/><circle cx="12" cy="12" r="3" fill="#00caee"/></svg>`,
  firebase: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffca28"><path d="M4.5 21l1.5-16.5 5.5 7 1 4.5L4.5 21z"/><path d="M4.5 21L17 9.5l3-1L4.5 21z" fill="#ff8f00"/><path d="M4.5 21L17 9.5l-1.5 9L4.5 21z" fill="#f57c00"/></svg>`,
  html5: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#e34f26"><path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.5 6H9l.2 2.4h8.1l-.6 6.6-3.7 1-3.7-1-.3-2.8h2.2l.1.8 2 .5 2-.5.2-2.4H7.7L7 4h11l-.5 4z"/></svg>`,
  css3: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1572b6"><path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.4 5.5H8.4l.2 2.1h8.6l-.6 6.7-3.6 1-3.6-1-.3-2.7h2.1l.1.8 2.1.6 2-.5.2-2.2H7.7L7 4.5h10.6l-.2 3z"/></svg>`,
  tailwind: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#38bdf8"><path d="M12 4c-2 4-3 6-5 7 1 1 1.5 2 2 3 .5 1 1 2 3 3 2-1 2.5-2 3-3 .5-1 1-2 2-3-2-1-3-3-5-7z"/></svg>`,
  nextjs: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000"><circle cx="12" cy="12" r="11" fill="#000"/><path d="M8 7v10M8 7l9 12M16 7v6" stroke="#fff" strokeWidth="1.5" fill="none"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ff7f18"><rect width="24" height="24" rx="3" fill="#ff7f18"/><path d="M10 16h-1l3-8h1l3 8h-1l-.8-2h-3.4L10 16zm1.2-3h2.6L12.5 9.5 11.2 13z" fill="#1a0000"/></svg>`,
  ps: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#001e36"><rect width="24" height="24" rx="3" fill="#001e36"/><path d="M9 16V8M9 7h2.5c1.4 0 2.5.9 2.5 2.3 0 1.4-1.1 2.3-2.5 2.3H9M14 13.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.3c0-3-5-2-5-4 0-.8.6-1.3 1.5-1.3.8 0 1.5.4 1.5 1.2" stroke="#31a8ff" strokeWidth="1.3" fill="none"/></svg>`,
  id: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#49021f"><rect width="24" height="24" rx="3" fill="#49021f"/><path d="M7 16V8h2.5c2 0 3.5 1.5 3.5 4s-1.5 4-3.5 4H7zM14 8v8M14 12h2.5" stroke="#ff3366" strokeWidth="1.3" fill="none"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>`,
};

// =============================================================
// PROYECTOS — mismos 12 del portfolio original
// =============================================================

export const WORKS: WorkGroup[] = [
  {
    group: "React Projects",
    items: [
      {
        id: "js1",
        client: "Tecnobox",
        img: "img/react/screencapt-tecnobox.png",
        variant: "web",
        hover: "translate",
        rol: "Frontend developer",
        techs: "React - CSS modules - Forms - FetchAPI",
        icons: ["react", "js"],
        mode: "Freelance",
        description:
          "This system allows you to enter as admin, upload, edit and delete products, read customer orders. As a customer, you can see the products, select them and place the order.",
        site: "https://tecnobox.vercel.app/",
        code: "https://github.com/Elisa33/tecnobox-react",
      },
      {
        id: "js2",
        client: "La mochila de paseo",
        img: "img/react/screencapt-mochila.png",
        variant: "web",
        hover: "translate",
        rol: "Designer & React developer",
        techs: "React - ReactRouter - Styled Components - Figma",
        icons: ["react", "styled"],
        mode: "Work",
        description:
          "I am building this site in React, I implement react-router and handle css with styled-components. As a designer I create new sections and recommend styles to the client.",
        site: "https://mochila.vercel.app/",
        code: "https://github.com/Elisa33/mochila",
      },
      {
        id: "js3",
        client: "Nutrición",
        img: "img/react/screencapt-nutricion.png",
        variant: "web",
        hover: "translate",
        rol: "React developer",
        techs: "React - Tailwind - Firebase",
        icons: ["react", "firebase"],
        mode: "Practice",
        description:
          "This application is for patients to complete online forms, the data is saved in firebase and then can be viewed by the doctor from the patient view.",
        site: "https://nutricion-seven.vercel.app/",
        code: "https://github.com/Elisa33/nutricion",
      },
    ],
  },
  {
    group: "Layout",
    items: [
      {
        id: "web1",
        client: "Gunavati",
        img: "img/web/screencapt-gunavati.png",
        variant: "web",
        hover: "translate",
        rol: "Web developer",
        techs: "NextJs",
        icons: ["nextjs"],
        mode: "Freelance",
        description:
          "Working as developer customizing this site, with my colleague as a team.",
        site: "https://gunavati.art/",
      },
      {
        id: "web2",
        client: "Elise y Roque",
        img: "img/web/screencapt-elise.png",
        variant: "web",
        hover: "translate",
        rol: "Web developer & designer",
        techs: "Html 5 - Tailwind",
        icons: ["html5", "tailwind"],
        mode: "Freelance",
        description:
          "Working as a Designer and layout this site with html/tailwind.",
        site: "https://eliseyroque.vercel.app",
      },
      {
        id: "web3",
        client: "Checo site",
        img: "img/web/screencapt-checo.png",
        variant: "web",
        hover: "translate",
        rol: "Web developer & designer",
        techs: "NextJs - Tailwind",
        icons: ["nextjs", "tailwind"],
        mode: "Freelance",
        description: "Working as a Designer and Developer — Coming soon page.",
        site: "https://www.checo.com.ar",
      },
    ],
  },
  {
    group: "Branding Creative",
    items: [
      {
        id: "barquito",
        client: "Barquito de papel",
        img: "img/brand/brand-barquito.png",
        variant: "brand",
        hover: "scale",
        rol: "Brand Designer",
        techs: "Illustrator",
        icons: ["ai"],
        mode: "Freelance",
        description:
          "Working as a Designer, developing the brand for a client that sells children's clothing.",
      },
      {
        id: "tikal",
        client: "Tikal",
        img: "img/brand/brand-tikal.png",
        variant: "brand",
        hover: "scale",
        rol: "Brand Designer",
        techs: "Illustrator",
        icons: ["ai"],
        mode: "Freelance",
        description:
          "Working as a Designer, developing the brand for a construction company.",
      },
      {
        id: "ampersand",
        client: "Ampersand",
        img: "img/brand/brand-ampersand.png",
        variant: "brand",
        hover: "scale",
        rol: "Brand Designer",
        techs: "Illustrator",
        icons: ["ai"],
        mode: "Freelance",
        description:
          "Working as a Designer, developing the brand for an advertising agency.",
      },
    ],
  },
  {
    group: "Graphic Design",
    items: [
      {
        id: "graph1",
        client: "Onix",
        img: "img/graphic/graph-onix.png",
        variant: "graphic",
        hover: "scale",
        rol: "Graphic Designer",
        techs: "Illustrator",
        icons: ["ai"],
        mode: "Freelance",
        description: "Working as a Designer.",
      },
      {
        id: "graph2",
        client: "Kúspide",
        img: "img/graphic/graph-kuspide.png",
        variant: "graphic",
        hover: "scale",
        rol: "Graphic Designer",
        techs: "Photoshop - InDesign",
        icons: ["ps", "id"],
        mode: "Freelance",
        description: "Working as a Designer.",
      },
      {
        id: "graph3",
        client: "Birthday",
        img: "img/graphic/graph-birthday.png",
        variant: "graphic",
        hover: "scale",
        rol: "Graphic Designer",
        techs: "Illustrator",
        icons: ["ai"],
        mode: "Freelance",
        description: "Illustrations and design.",
      },
    ],
  },
];
