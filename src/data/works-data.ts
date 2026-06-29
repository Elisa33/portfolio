import { IconType } from "react-icons";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill, RiFirebaseFill } from "react-icons/ri";
import { PiFramerLogoFill } from "react-icons/pi";
import {
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";

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
  icons: IconType[];
  mode: string;
  description: string;
  site?: string;
  code?: string;
}

export interface WorkGroup {
  group: string;
  items: WorkProject[];
}

// =============================================================
// PROYECTOS — mismos 12 del portfolio original
// =============================================================

export const WORKS: WorkGroup[] = [
  {
    group: "Web",
    items: [
      {
        id: "web1",
        client: "Gunavati",
        img: "img/web/screencapt-gunavati.png",
        variant: "web",
        hover: "translate",
        rol: "Web developer & designer",
        techs: "NextJs- Tailwind",
        icons: [RiNextjsFill, SiTailwindcss],
        mode: "Freelance",
        description:
          "Collaborated closely with the client, building the site's design and development in perfect rhythm with her music and vision. Also integrated secure PayPal payment gateways.",
        site: "https://gunavati.art/",
      },
      {
        id: "web2",
        client: "Elise y Roque",
        img: "img/web/screencapt-elise.png",
        variant: "web",
        hover: "translate",
        rol: "Web developer & designer",
        techs: "NextJs- Tailwind",
        icons: [RiNextjsFill, SiTailwindcss],
        mode: "Freelance",
        description:
          "Designed and developed a custom website for this dance duo, capturing and integrating their unique artistic magic into the user experience.",
        site: "https://eliseyroque.vercel.app",
      },
      {
        id: "web3",
        client: "Checo site",
        img: "img/web/screencapt-checo.png",
        variant: "web",
        hover: "translate",
        rol: "Web developer & designer",
        techs: "NextJs - Framer Motion - Tailwind",
        icons: [RiNextjsFill, SiTailwindcss, PiFramerLogoFill],
        mode: "Freelance",
        description:
          "Responsible for the site's design and development, translating the brand identity established by <a href='http://www.grudisegno.com/' className='info no-underline' target='_blank' rel='noopener noreferrer'>Gru</a> into a fully customized web layout.",
        site: "https://www.checo.com.ar",
      },
    ],
  },
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
        icons: [FaReact, GrJs],
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
        icons: [FaReact, SiStyledcomponents],
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
        icons: [FaReact, RiFirebaseFill],
        mode: "Practice",
        description:
          "This application is for patients to complete online forms, the data is saved in firebase and then can be viewed by the doctor from the patient view.",
        site: "https://nutricion-seven.vercel.app/",
        code: "https://github.com/Elisa33/nutricion",
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
        icons: [TbBrandAdobeIllustrator],
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
        icons: [TbBrandAdobeIllustrator],
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
        icons: [TbBrandAdobeIllustrator],
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
        icons: [TbBrandAdobeIllustrator],
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
        icons: [TbBrandAdobePhotoshop, TbBrandAdobeIndesign],
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
        icons: [TbBrandAdobeIllustrator],
        mode: "Freelance",
        description: "Illustrations and design.",
      },
    ],
  },
];
