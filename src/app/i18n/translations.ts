export const translations = {
  en: {
    nav: {
      skills: "Skills",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },

    hero: {
      title: "Sheyla Aguilar",
      phrases: [
        "Frontend developer",
        "Application logic",
        "State management",
        "Interaction flows",
      ],
      description:
        "I build thoughtful frontend experiences, with a strong focus on logic, state and interaction design.",
      cta: "View projects",
      scroll: "Scroll ↓",
    },

    skills: {
      label: "Skills",
      title: "Tech Stack",
      description:
        "Technologies and tools I use to build structured, scalable and elegant frontend experiences.",
      band1: "Languages & Styling",
      band2: "Frameworks & Tools",
    },

    projects: {
      label: "Projects",
      title: "Featured Works",
      description:
        "A selection of digital experiences crafted with intention, precision and a passion for beautiful interfaces.",
      previous: "Previous project",
      next: "Next project",
      viewGithub: "View project on GitHub",
      items: [
        {
          title: "NextCommerce Analytics Dashboard",
          description:
            "A collaborative e-commerce project with an integrated analytics dashboard. I focused on state management, application logic and persistence using Zustand.",
        },
        {
          title: "Digital Wedding Invitation",
          description:
            "Web platform for managing wedding invitations. It allows sharing event details and offers guests a private system to RSVP, featuring real-time synchronization and response tracking.",
        },
        {
          title: "Cocinillas - Order Management App",
          description:
            "Web application designed for restaurant staff. It facilitates digital and agile order taking and ticket management, optimizing dining room service and reducing errors.",
        },
      ],
    },

    about: {
      label: "About",
      title: "My approach to building",
      description:
        "I care about working with clarity, responsibility and a thoughtful approach to every project.",
      qualities: [
        {
          title: "Versatility",
          description: "I adapt easily to new contexts and ways of working.",
        },
        {
          title: "Passion",
          description:
            "I approach each project with care and genuine involvement.",
        },
        {
          title: "Commitment",
          description:
            "I take responsibility for my work and pay attention to detail.",
        },
        {
          title: "Creative vision",
          description: "I enjoy finding thoughtful and elegant solutions.",
        },
      ],
    },

    footer: {
      label: "Contact",
      title: "Let’s build interfaces with intention and logic 👩🏻‍💻",
      description:
        "Open to collaborating on thoughtful frontend experiences, interfaces with intention and projects where detail matters.",
      cta: "Get in touch",
      backToTop: "Back to top ↑",
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      skills: "Habilidades",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },

    hero: {
      title: "Sheyla Aguilar",
      phrases: [
        "Desarrolladora frontend",
        "Lógica de aplicación",
        "Gestión de estado",
        "Flujos de interacción",
      ],
      description:
        "Diseñando sistemas frontend donde la lógica, el estado y la interacción trabajan juntos.",
      cta: "Ver proyectos",
      scroll: "Desliza ↓",
    },

    skills: {
      label: "Habilidades",
      title: "Stack Técnico",
      description:
        "Tecnologías y herramientas que uso para construir experiencias frontend estructuradas, escalables y elegantes.",
      band1: "Lenguajes y estilos",
      band2: "Frameworks y herramientas",
    },

    projects: {
      label: "Proyectos",
      title: "Trabajos destacados",
      description:
        "Una selección de experiencias digitales creadas con intención, precisión y pasión por las interfaces.",
      previous: "Proyecto anterior",
      next: "Siguiente proyecto",
      viewGithub: "Ver proyecto en GitHub",
      items: [
        {
          title: "NextCommerce Analytics Dashboard",
          description:
            "Proyecto colaborativo de e-commerce con un dashboard analítico integrado. Me centré en la gestión de estado, la lógica de aplicación y la persistencia usando Zustand.",
        },
        {
          title: "Invitación digital de boda",
          description:
            "Plataforma web para gestionar invitaciones de boda con confirmación de asistencia y sincronización en tiempo real.",
        },
        {
          title: "Cocinillas - App de gestión de pedidos",
          description:
            "Aplicación web para restauración que optimiza la toma de comandas y la gestión de pedidos en sala.",
        },
      ],
    },

    about: {
      label: "Sobre mí",
      title: "Mi forma de construir",
      description:
        "Trabajo con claridad, responsabilidad y un enfoque cuidado en cada proyecto.",
      qualities: [
        {
          title: "Versatilidad",
          description:
            "Me adapto fácilmente a nuevos contextos y formas de trabajo.",
        },
        {
          title: "Pasión",
          description:
            "Afronto cada proyecto con implicación real y atención al detalle.",
        },
        {
          title: "Compromiso",
          description:
            "Asumo responsabilidad sobre mi trabajo y cuido cada detalle.",
        },
        {
          title: "Visión creativa",
          description:
            "Disfruto encontrando soluciones elegantes y bien pensadas.",
        },
      ],
    },

    footer: {
      label: "Contacto",
      title: "Construyamos interfaces con intención y lógica 👩🏻‍💻",
      description:
        "Abierta a colaborar en experiencias frontend cuidadas, interfaces con intención y proyectos donde el detalle importa.",
      cta: "Contactar",
      backToTop: "Volver arriba ↑",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Language = keyof typeof translations;
