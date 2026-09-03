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

## Reemplazar los placeholders por capturas reales (Cloudinary)

Las secciones "Sobre mí" y "Proyectos" usan `PlaceholderFrame.astro` (marco rayado con texto
`[ ... ]`) mientras no hay imágenes reales. El componente ya sabe mostrar una imagen real en
vez del marco rayado — solo hay que pegar la URL:

1. Sube la imagen a Cloudinary y copia su URL (la que empieza con
   `https://res.cloudinary.com/...`).
2. Para tu foto: pégala en `fotoUrl` dentro de `src/data/site.ts`.
3. Para la captura de un proyecto: pégala en el campo `imagenUrl` de ese proyecto, dentro de
   `src/data/proyectos.ts`.
4. Guarda. Mientras el campo esté vacío (`""`) se sigue viendo el marco rayado — no hay que
   tocar ningún componente, y puedes ir subiendo las capturas de a una.

No hace falta configurar nada de Astro para esto: Cloudinary ya sirve las imágenes optimizadas
y por CDN, así que el sitio simplemente las carga con un `<img>` normal (con `loading="lazy"`).
Si quieres redimensionar o comprimir distinto, se ajusta directo en la URL de Cloudinary
(por ejemplo agregando `w_800,q_auto,f_auto` a la transformación) antes de pegarla.

## Publicar en Vercel

Conecta el repo de GitHub en Vercel — detecta el framework Astro automáticamente
(`npm run build`, salida en `dist/`). No requiere configuración adicional (sitio 100% estático).

## Contacto

luissyhaimar1@gmail.com · Medellín, Colombia
