export type BriefQuestion = {
  id: string;
  q: string;
  options: string[];
};

export type BriefSection = {
  title: string;
  /** Texto de ayuda sobre el espacio de links / comentarios libres */
  note: string;
  questions: BriefQuestion[];
};

export type Brief = {
  /** Va en la URL: /brief/<slug> */
  slug: string;
  /** Título corto: pestaña del navegador, resumen copiado y asunto del email */
  title: string;
  /** Texto chico sobre el título */
  eyebrow: string;
  heading: string;
  /** Parte del título resaltada con el color de acento */
  headingAccent?: string;
  intro: string;
  sections: BriefSection[];
};
