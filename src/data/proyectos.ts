import type { Proyecto } from "../types/content";

// Para agregar un proyecto nuevo: copia el último bloque de este array, pégalo
// debajo y edita sus campos. No hace falta tocar ningún otro archivo — la
// tarjeta se genera sola, con las mismas animaciones y estilos que las demás.
export const proyectos: Proyecto[] = [
  {
    numero: "01",
    categoria: "SENA · Equipo",
    titulo: "Conv3rTech",
    descripcion:
      "Plataforma para la gestión de servicios tecnológicos, construida en equipo durante la formación en el SENA. Web en React 19 + Vite con agendamiento (FullCalendar), exportación a PDF y Excel y carga de imágenes en Cloudinary; API en Node/Express con Sequelize y MySQL, autenticación JWT y correos transaccionales. La app móvil en Expo consume la misma API.",
    tags: ["React 19", "Expo", "Node + Express", "MySQL", "Equipo", "2025"],
    link: "https://github.com/LuissyS77/Conv3rTech_mobile",
    linkTexto: "Ver repositorio",
    imagenAlt: "captura de Conv3rTech — web + app",
    imagenPosicion: "derecha",
    imagenUrl: "https://res.cloudinary.com/inwvrzem/image/upload/v1788466710/unnamed.png",
  },
  {
    numero: "02",
    categoria: "Prácticas · 2026",
    titulo: ["Portada", "Inmobiliaria"],
    descripcion:
      "Portal inmobiliario en producción. Trabajo sobre el front en Vue 3 + Vite con Bootstrap 5 y Vue Router: vistas y buscador de propiedades, paginación y autocompletado, consumiendo la API en PHP. Equipo con commits convencionales, pruebas en Vitest y despliegues a producción.",
    tags: ["Vue 3", "Bootstrap 5", "PHP API", "Vitest", "6 meses", "2026"],
    link: "https://github.com/PORTADA-INMOBILIARIA-SAS",
    linkTexto: "Ver organización",
    imagenAlt: "captura de Portada Inmobiliaria",
    imagenPosicion: "izquierda",
    imagenUrl: "https://res.cloudinary.com/inwvrzem/image/upload/v1788468541/Captura_de_pantalla_2026-09-03_154804.png",
  },
];
