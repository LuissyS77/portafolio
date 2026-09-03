# Portafolio — Luissy Yhaimar Angulo Suárez

Portafolio personal de una sola página, construido con **Astro + TypeScript**: desarrollo
web y móvil, proyectos (Conv3rTech · SENA y Portada Inmobiliaria) e integración de IA en
el flujo de trabajo.

- **Stack:** Astro, TypeScript, CSS con variables (sin frameworks de utilidades).
- **Animaciones:** reveals con IntersectionObserver, máscaras de texto en el hero, marquee,
  typewriter, cursor personalizado, tilt 3D y barra de progreso.
- **Tipografía:** Instrument Serif, Space Grotesk, JetBrains Mono — self-hosted en `public/fonts`.

## Comandos

| Comando           | Qué hace                                    |
| ------------------ | -------------------------------------------- |
| `npm install`       | Instala dependencias                          |
| `npm run dev`       | Levanta el servidor de desarrollo             |
| `npm run build`     | Genera el sitio estático en `dist/`           |
| `npm run preview`   | Sirve el build de producción localmente       |
| `npx astro check`   | Revisa tipos y errores en los `.astro`        |

## Estructura

```
src/
├── components/
│   ├── layout/     Nav.astro
│   ├── sections/   Hero, Marquee, About, Projects, Stack, Experience, Contact
│   └── ui/         Badge, ButtonPill, SectionHeader, PlaceholderFrame, ProjectCard, StackGroup, TimelineItem
├── data/           proyectos.ts · stack.ts · experiencia.ts · site.ts   ← el contenido editable
├── types/          content.ts (contratos TypeScript)
├── layouts/        BaseLayout.astro (SEO, fuentes, overlays globales)
├── styles/         global.css (variables, @font-face, @keyframes, clases utilitarias)
├── scripts/        un módulo por animación + index.ts (orquestador)
└── pages/          index.astro
```

## Cómo agregar un proyecto nuevo

1. Abre `src/data/proyectos.ts`.
2. Copia el último objeto del array y pégalo debajo.
3. Edita sus campos: `numero`, `categoria`, `titulo` (string, o array de strings para 2 líneas),
   `descripcion`, `tags`, `link`, `linkTexto`, `imagenAlt`, y opcionalmente `imagenPosicion`
   (`"izquierda"` | `"derecha"` — si lo omites, alterna solo).
4. Guarda. La tarjeta nueva aparece con las mismas animaciones y estilos que las demás, sin
   tocar ningún componente. TypeScript marca en rojo si falta un campo.

## Cómo agregar una herramienta o una entrada de experiencia

Mismo patrón: edita `src/data/stack.ts` (agrega un string a `items` de una categoría, o un
objeto `{ categoria, items }` nuevo) o `src/data/experiencia.ts` (agrega un objeto al array,
en el orden en que quieras que aparezca — no se ordena por fecha automáticamente).

## Cómo conectar el CV

Coloca tu PDF en `public/cv.pdf` (mismo nombre exacto). El botón "Descargar CV" ya apunta
ahí (`src/data/site.ts` → `cvHref`) — empieza a funcionar en el siguiente build sin tocar código.

## Reemplazar los placeholders por capturas reales

Las secciones "Sobre mí" y "Proyectos" usan `PlaceholderFrame.astro` (marco rayado con texto
`[ ... ]`) mientras no hay imágenes reales. Cuando tengas las capturas, se reemplaza ese
componente por un `<img>` dentro de cada sección.

## Publicar en Vercel

Conecta el repo de GitHub en Vercel — detecta el framework Astro automáticamente
(`npm run build`, salida en `dist/`). No requiere configuración adicional (sitio 100% estático).

## Contacto

luissyhaimar1@gmail.com · Medellín, Colombia
