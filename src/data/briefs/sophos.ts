import type { Brief } from "./types";

export const sophos: Brief = {
  slug: "sophos",
  title: "Brief · Sophos 3D",
  eyebrow: "Brief · Sophos 3D",
  heading: "Sitio web",
  headingAccent: "Sophos 3D",
  intro:
    "Este brief está armado para completarse con tranquilidad y a su ritmo. Pueden elegir las opciones que mejor los representen, escribir con sus palabras y dejar para después lo que prefieran pensar o consultar. No se preocupen por responder todo perfecto: las respuestas cortas, audios o ejemplos simples también sirven. El avance queda guardado en este dispositivo.",
  sections: [
    {
      title: "El emprendimiento",
      note: "Espacio para contar la historia de Sophos 3D, lo que hay detrás del nombre o cualquier cosa que quieran que la web transmita.",
      questions: [
        {
          id: "what",
          q: "¿Qué es Sophos 3D y qué los hace distintos de otros que imprimen en 3D?",
          options: [
            "Diseño propio",
            "Personalización",
            "Calidad de acabado",
            "Atención cercana",
            "Piezas únicas",
            "Precio",
          ],
        },
        {
          id: "motivation",
          q: "¿Qué los motiva y qué quieren que la gente sienta al conocer la marca?",
          options: [
            "Confianza",
            "Curiosidad",
            "Creatividad",
            "Cercanía",
            "Innovación",
            "Cuidado por el detalle",
          ],
        },
        {
          id: "name",
          q: "¿Qué hay detrás del nombre?",
          options: [],
        },
      ],
    },
    {
      title: "Los productos",
      note: "Todo detalle sobre materiales (como PLA, PETG, resina) ayuda mucho a estructurar las fichas de producto en la web.",
      questions: [
        {
          id: "products",
          q: "¿Qué productos ofrecen y cuáles son sus favoritos?",
          options: [
            "Decoración",
            "Regalos",
            "Accesorios",
            "Piezas funcionales",
            "Figuras y miniaturas",
            "Prototipos",
          ],
        },
        {
          id: "custom",
          q: "¿Qué se puede personalizar y qué no? ¿Hay mínimos o condiciones para pedidos personalizados?",
          options: [
            "Tamaño",
            "Color",
            "Forma",
            "Texto o nombre",
            "Diseño completo a medida",
          ],
        },
        {
          id: "materials",
          q: "¿Qué materiales y acabados usan? ¿Algo que el cliente deba saber (resistencia, cuidado, durabilidad)?",
          options: [
            "PLA",
            "PETG",
            "Resina",
            "ABS",
            "TPU (flexible)",
            "Acabado pintado o lijado",
          ],
        },
      ],
    },
    {
      title: "Los clientes y la venta",
      note: "Espacio para zonas de envío, preguntas frecuentes de los clientes o un ejemplo de pedido real.",
      questions: [
        {
          id: "clients",
          q: "¿Quién les compra hoy y para qué ocasiones?",
          options: [
            "Personas",
            "Empresas",
            "Regalos",
            "Cumpleaños y fechas especiales",
            "Merchandising",
            "Uso propio",
          ],
        },
        {
          id: "channels",
          q: "¿Cómo venden ahora y cuál es el proceso de un pedido, del primer mensaje a la entrega? ¿Tiempos y zonas de envío/retiro?",
          options: [
            "Instagram",
            "WhatsApp",
            "Ferias",
            "Email",
            "Envío a domicilio",
            "Retiro en persona",
          ],
        },
        {
          id: "pricing",
          q: "¿Cómo manejan precios y qué dudas frecuentes tienen los clientes antes de comprar?",
          options: [
            "Catálogo con precios fijos",
            "Presupuesto a medida",
            "Mixto",
          ],
        },
      ],
    },
    {
      title: "La web",
      note: "Si vieron algún sitio web que les haya gustado por sus colores, animaciones o sencillez, peguen los links acá directamente.",
      questions: [
        {
          id: "goal",
          q: "¿Qué quieren que pueda hacer una persona al entrar a la web?",
          options: [
            "Solo ver y contactar",
            "Pedir un presupuesto",
            "Comprar directo",
            "Personalizar un producto",
            "Escribir por WhatsApp",
            "Seguir en Instagram",
          ],
        },
        {
          id: "pages",
          q: "¿Qué páginas o secciones imaginan que necesita el sitio?",
          options: [
            "Inicio",
            "Productos",
            "Personalización",
            "Sobre nosotros",
            "Preguntas frecuentes",
            "Contacto",
          ],
        },
        {
          id: "refs",
          q: "¿Tienen referencias de webs o marcas cuyo estilo les guste? (no necesariamente de impresión 3D)",
          options: [],
        },
      ],
    },
    {
      title: "Identidad y estética",
      note: "Espacio para links a los archivos del logo, paletas, tipografías o imágenes que los inspiren (por ejemplo, un link a una carpeta de Drive).",
      questions: [
        {
          id: "logo",
          q: "¿Cómo hicieron el logo? ¿Lo armaron ustedes, con qué herramienta, o lo encargaron? ¿Hay algo que les guste o no les guste de cómo quedó?",
          options: [
            "Lo hicimos nosotros",
            "Lo encargamos",
            "Quizás lo renovaríamos",
            "Nos gusta como está",
          ],
        },
        {
          id: "personality",
          q: "Si tuvieran que describir la personalidad de Sophos en 3 adjetivos, ¿cuáles serían?",
          options: [
            "Artesanal",
            "Técnico",
            "Lúdico",
            "Serio",
            "Cálido",
            "Minimalista",
            "Elegante",
          ],
        },
        {
          id: "look",
          q: "¿Qué sensaciones quieren que la web transmita? ¿Tienen paleta de colores o tipografía definida más allá del logo, o les gustaría que proponga algo coherente con él?",
          options: [
            "Tengo paleta y tipografía definidas",
            "Prefiero que propongan algo",
            "Colores vivos",
            "Colores sobrios",
            "Moderno y tecnológico",
            "Cálido y cercano",
          ],
        },
      ],
    },
  ],
};
