import type { Brief } from "./types";
import { tallerDeArte } from "./taller-de-arte";
import { sophos } from "./sophos";

// Para agregar un brief nuevo: crea su archivo en esta carpeta
// (copia taller-de-arte.ts) y agrégalo a esta lista.
export const briefs: Brief[] = [tallerDeArte, sophos];

export const getBrief = (slug: string) => briefs.find((b) => b.slug === slug);
