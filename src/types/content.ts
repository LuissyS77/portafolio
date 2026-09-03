export interface Proyecto {
  numero: string;
  categoria: string;
  /** Un string para título de una línea, o un array de strings para varias líneas. */
  titulo: string | string[];
  descripcion: string;
  tags: string[];
  link: string;
  linkTexto: string;
  imagenAlt: string;
  /** Si se omite, el layout alterna automáticamente según la posición en el array. */
  imagenPosicion?: "izquierda" | "derecha";
  /** URL de Cloudinary de la captura. Sin este campo se muestra el marco rayado. */
  imagenUrl?: string;
}

export interface HerramientaCategoria {
  categoria: string;
  items: string[];
}

export interface ExperienciaItem {
  periodo: string;
  rol: string;
  lugar: string;
  descripcion: string;
}

export interface AboutStat {
  valor: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}
