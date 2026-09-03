import type { ExperienciaItem } from "../types/content";

// Se muestran en el orden del array (no se ordenan por fecha automáticamente).
// Para agregar una entrada nueva, insértala donde deba aparecer.
export const experiencia: ExperienciaItem[] = [
  {
    periodo: "2026",
    rol: "Practicante de desarrollo",
    lugar: "Portada Inmobiliaria",
    descripcion:
      "Desarrollo de vistas y componentes en Vue 3, ajustes sobre la API en PHP, corrección de incidencias y participación en revisiones de código y despliegues.",
  },
  {
    periodo: "2025",
    rol: "Proyecto formativo",
    lugar: "Conv3rTech · SENA",
    descripcion:
      "Construcción en equipo de Conv3rTech: front en React, API en Node/Express con MySQL y app móvil en Expo, desde los requisitos hasta la sustentación.",
  },
  {
    periodo: "2024 — 2025",
    rol: "Análisis y desarrollo",
    lugar: "SENA",
    descripcion:
      "Formación técnica en desarrollo de software: bases de datos, programación orientada a objetos y desarrollo de aplicaciones.",
  },
];
