import type { Brief } from "./types";

export const tallerDeArte: Brief = {
  slug: "taller-de-arte",
  title: "Brief · Taller de arte",
  eyebrow: "Brief · Taller de arte",
  heading: "Sitio web",
  headingAccent: "taller de arte",
  intro:
    "Este brief está pensado para responderse con tranquilidad y a tu ritmo. Se pueden elegir las respuestas que mejor representen, agregar palabras propias y dejar para después lo que se prefiera. El avance queda guardado en este dispositivo.",
  sections: [
    {
      title: "El taller y la propuesta",
      note: "¿Qué hace que pintar en el taller sea una experiencia especial?",
      questions: [
        {
          id: "feel",
          q: "¿Cómo se describirían las clases de pintura y qué sensaciones debería transmitir el taller?",
          options: [
            "Calma y meditación",
            "Juego y alegría",
            "Libertad creativa",
            "Calidez y bienvenida",
            "Técnica y foco",
            "Comunidad y compartir",
          ],
        },
        {
          id: "audience",
          q: "¿Para quién son las clases?",
          options: [
            "Niños",
            "Adolescentes",
            "Adultos",
            "Adultos mayores",
            "Principiantes",
            "Nivel avanzado",
          ],
        },
      ],
    },
    {
      title: "Las clases y cómo funcionan",
      note: "Espacio para programas, técnicas que se enseñan o listas de materiales.",
      questions: [
        {
          id: "types",
          q: "¿Qué tipo de talleres se van a ofrecer?",
          options: [
            "Clases semanales regulares",
            "Seminarios de fin de semana",
            "Intensivos",
            "Clases particulares",
            "Clases online",
            "Eventos / experiencias para regalar",
          ],
        },
        {
          id: "booking",
          q: "¿Cómo se organizan los cupos, los horarios y las inscripciones?",
          options: [
            "Horario fijo semanal",
            "Cupos limitados por grupo",
            "Inscripción por WhatsApp",
            "Inscripción por email",
            "Reserva y pago online",
            "Cuota mensual",
          ],
        },
        {
          id: "techniques",
          q: "¿Qué técnicas se enseñan?",
          options: [
            "Óleo",
            "Acrílico",
            "Acuarela",
            "Dibujo",
            "Técnica mixta",
            "Tinta",
          ],
        },
      ],
    },
    {
      title: "La página web",
      note: "Espacio para links de webs o perfiles de Instagram de otros talleres que sirvan de referencia.",
      questions: [
        {
          id: "goal",
          q: "¿Qué debería hacer un visitante al entrar a la web?",
          options: [
            "Conocer la propuesta",
            "Escribir por WhatsApp",
            "Escribir por email",
            "Reservar un cupo",
            "Ver el calendario",
            "Seguir en Instagram",
          ],
        },
        {
          id: "sections",
          q: "¿Qué secciones necesita la web?",
          options: [
            "Inicio",
            "Sobre mí",
            "Clases / Talleres",
            "Galería de obras y alumnos",
            "Calendario",
            "Testimonios",
            "Preguntas frecuentes",
            "Contacto",
          ],
        },
      ],
    },
    {
      title: "Estilo visual y universo de la marca",
      note: "Espacio para referencias de Instagram/Pinterest como guía.",
      questions: [
        {
          id: "style",
          q: "¿Qué estilo visual se imagina para la web?",
          options: [
            "Cálido",
            "Minimalista",
            "Moderno",
            "Colorido",
            "Bohemio",
            "Elegante",
          ],
        },
        {
          id: "palette",
          q: "¿Hay preferencia por alguna paleta de colores en particular?",
          options: [
            "Pasteles",
            "Tonos tierra",
            "Vibrantes",
            "Rosa",
            "Violeta",
            "Neutros",
          ],
        },
        {
          id: "assets",
          q: "¿Hay imágenes disponibles para usar como guía?",
          options: [
            "Fotos de mis obras",
            "Fotos del taller",
            "Trabajos de alumnos",
            "Referencias de Instagram",
            "Tablero de Pinterest",
            "Todavía no",
          ],
        },
      ],
    },
  ],
};
