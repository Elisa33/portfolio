import { IconType } from "react-icons";

export type sectionId =
  | "about"
  | "skills"
  | "works"
  | "resume"
  | "contact";

export interface NavItem {
  id: sectionId;
  label: string;
  icon: IconType;
}
