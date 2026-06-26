import { IconType } from "react-icons";

export type sectionId = "home" | "skills" | "works" | "resume" | "contact";

export interface NavItem {
  id: sectionId;
  label: string;
  icon: IconType;
  color: string;
}
