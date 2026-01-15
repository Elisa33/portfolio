import { IconType } from "react-icons";

export type sectionId = "home" | "about" | "skills" | "works" | "resume" | "contact";

export interface NavItem {
  id: sectionId;
  label: string;
  icon: IconType;
}
