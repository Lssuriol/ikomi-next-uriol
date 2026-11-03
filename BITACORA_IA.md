# Bitácora de Uso de Inteligencia Artificial (Parte 5)

## 5.1 Entradas de interacción con la IA

### Entrada 1: Estructura del App Router y Rutas
* **Objetivo:** Definir la arquitectura de rutas para IKOMI PERÚ en Next.js.
* **Prompt utilizado:** "Genera la estructura de carpetas para el sitio IKOMI PERÚ con App Router de Next.js incluyendo inicio, nosotros, servicios, productos, marcas y contacto."
* **Resumen de la respuesta:** La IA propuso crear las carpetas correspondientes dentro de `src/app/` con un archivo `page.tsx` para cada ruta.
* **Decisión tomada:** Aceptado.
* **Justificación:** Cumple de manera directa con las convenciones estándar del App Router de Next.js.

### Entrada 2: Estilos Globales con Tailwind CSS v4
* **Objetivo:** Configurar los estilos base del proyecto.
* **Prompt utilizado:** "Proporciona el código de `globals.css` para integrar Tailwind CSS en Next.js."
* **Resumen de la respuesta:** La IA sugirió las directivas tradicionales `@tailwind base; @tailwind components; @tailwind utilities;`.
* **Decisión tomada:** Modificado.
* **Justificación:** La versión 4 de Tailwind utiliza la directiva `@import "tailwindcss";`, por lo que la propuesta inicial generaba un error de compilación.

### Entrada 3: Barra de Navegación Interactiva
* **Objetivo:** Crear un componente `Navbar` con resaltado de la ruta activa y menú responsive.
* **Prompt utilizado:** "Crea un componente Navbar responsive con menú hamburguesa que resalte el link activo en Next.js."
* **Resumen de la respuesta:** Entregó un componente con `useState` y el hook `usePathname()`, pero omitió la directiva `"use client"`.
* **Decisión tomada:** Modificado.
* **Justificación:** Sin `"use client"`, Next.js arroja un error en tiempo de ejecución al intentar usar hooks en un Server Component.

### Entrada 4: Catálogo y Ruta Dinámica de Productos
* **Objetivo:** Implementar `/productos` y la ruta de detalle `/productos/[slug]` con manejo de 404.
* **Prompt utilizado:** "Cómo implementar una ruta dinámica en Next.js que busque un producto por slug en un array local y use notFound() si no existe."
* **Resumen de la respuesta:** La IA generó la estructura de `[slug]/page.tsx` importando `notFound` desde `next/navigation`.
* **Decisión tomada:** Aceptado.
* **Justificación:** La solución aplica correctamente las funciones nativas de Next.js para rutas dinámicas.

### Entrada 5: Metadatos y SEO Dinámico
* **Objetivo:** Configurar títulos y descripciones para cada página y generar metadatos dinámicos en el catálogo.
* **Prompt utilizado:** "Genera ejemplos de metadata estáticos para las páginas y generateMetadata para la ruta dinámica."
* **Resumen de la respuesta:** Proporcionó los objetos de metadata estáticos y la función `generateMetadata` asíncrona para la vista de productos.
* **Decisión tomada:** Aceptado.
* **Justificación:** Mejora la indexación SEO y personaliza la experiencia del usuario en el navegador.

---

## 5.2 Casos de código incorrecto / desactualizado

### Caso 1: Configuración de Tailwind CSS v4
* **Antes (Propuesto por la IA):**
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

* **Después (Corrección aplicada):**
  ```css
  @import "tailwindcss";

### Caso 2: Omisión de la Directiva "use client" en Componentes Interactivos
* **Antes (Propuesto por la IA):**
  ```css
   import { useState } from 'react';
   import { usePathname } from 'next/navigation';

   export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
    return ( <nav>...</nav> );
   }

* **Después (Corrección aplicada):**
  ```css
  'use client';

  import { useState } from 'react';
  import { usePathname } from 'next/navigation';

  export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return ( <nav>...</nav> );
   }


### Gracias al acompañamiento de la Inteligencia Artificial pude comprender de manera clara como es la arquitectura del App Router en Next.js, justamente la separación entre Server Components y Client Components para asi se mejora  el rendimiento del sitio. Sin embargo, considero que  la IA no resolvió todo correctamente: con frecuencia propuso código basado en versiones anteriores, como la sintaxis obsoleta de Tailwind CSS v4 y la omisión de directivas de cliente. Tuve que razonar bien concetrada  por mi cuenta analizando las alertas de la consola y la documentación oficial para corregir las importaciones y asegurar la compilación del proyecto IKOMI PERÚ.