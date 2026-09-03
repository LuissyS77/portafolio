import type { HerramientaCategoria } from "../types/content";

// Para agregar una herramienta: añade el string al array `items` de su
// categoría. Para una categoría nueva, agrega un objeto { categoria, items }.
export const stack: HerramientaCategoria[] = [
  {
    categoria: "Front-end",
    items: ["React", "React Native / Expo", "TypeScript", "Tailwind", "Vue 3", "Bootstrap"],
  },
  {
    categoria: "Back-end & datos",
    items: ["Node", "Express", "MySQL", "Sequelize", "REST APIs", "PHP"],
  },
  {
    categoria: "IA en el flujo",
    items: ["Claude", "GitHub Copilot", "Prompting", "APIs de IA"],
  },
  {
    categoria: "Proceso",
    items: ["Git / GitHub", "Vite", "Scrum", "Code review", "Astro", "Docker", "Despliegues"],
  },
];
