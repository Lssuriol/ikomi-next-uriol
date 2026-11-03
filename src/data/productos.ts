export interface Producto {
  id: string;
  slug: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

export const PRODUCTOS: Producto[] = [
  {
    id: "1",
    slug: "disco-plato-collarin",
    nombre: "Disco, Plato y Collarín de Embrague",
    categoria: "Embrague",
    descripcion: "Kit completo de embrague para camiones de alta resistencia. Garantiza un cambio de marchas suave y óptima durabilidad en rutas exigentes.",
    precio: "S/ 450.00",
    imagen: "https://via.placeholder.com/400x300?text=Kit+Embrague"
  },
  {
    id: "2",
    slug: "pastilla-zapata-freno",
    nombre: "Pastilla y Zapata de Freno",
    categoria: "Frenos",
    descripcion: "Frenos de fricción de alto rendimiento fabricados con material libre de asbesto para mayor seguridad en el frenado de camiones de carga.",
    precio: "S/ 180.00",
    imagen: "https://via.placeholder.com/400x300?text=Pastilla+Freno"
  },
  {
    id: "3",
    slug: "pinon-parte-caja",
    nombre: "Piñón y Parte de Caja de Cambio",
    categoria: "Transmisión",
    descripcion: "Engranajes de acero forjado de precisión para cajas de cambio manuales de camiones coreanos y japoneses.",
    precio: "S/ 320.00",
    imagen: "https://via.placeholder.com/400x300?text=Pinon+Caja"
  }
];