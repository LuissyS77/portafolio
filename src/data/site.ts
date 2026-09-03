import type { AboutStat, NavLink } from "../types/content";

export const site = {
  nombre: "Luissy Angulo",
  nombreCompleto: "Luissy Yhaimar Angulo Suárez",
  rol: "Dev web & móvil",
  ubicacion: "Medellín, CO",
  ubicacionFooter: "Medellín, Colombia",
  email: "luissyhaimar1@gmail.com",
  github: "https://github.com/LuissyS77",
  linkedin: "https://www.linkedin.com/in/luissy-suarez-a6aa06356",
  // Coloca tu PDF en public/cv.pdf (mismo nombre) para que este botón funcione.
  cvHref: "/cv.pdf",
  disponible: true,
  anioCopyright: 2026,
};

// Frases que rota el efecto typewriter del hero.
export const heroWords: string[] = [
  "Desarrollador web & móvil",
  "Vue 3 · React · Expo",
  "Practicante en Portada Inmobiliaria",
  "Construyendo con IA",
];

export const navLinks: NavLink[] = [
  { href: "#sobre", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

// Selección curada para la cinta del marquee (no todo el stack, solo lo más vistoso).
export const marqueeItems: string[] = [
  "Vue 3",
  "React",
  "Expo",
  "TypeScript",
  "Node",
  "PHP",
  "MySQL",
  "Docker",
];

export const aboutStats: AboutStat[] = [
  { valor: "6", label: "meses en producto" },
  { valor: "2", label: "plataformas: web + móvil" },
  { valor: "∞", label: "ganas de aprender" },
];

// Apaga esto si el cursor personalizado llega a estorbar en algún feedback.
export const CUSTOM_CURSOR_ENABLED = true;
