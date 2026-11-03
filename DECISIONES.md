# Registro de Decisiones de Arquitectura - Proyecto IKOMI
**Estudiante:** Luz Uriol Izquierdo

| Opción elegida | Alternativa descartada | Justificación |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript plano | Permite autocompletado y tipado estático para los datos de los repuestos de IKOMI PERÚ, reduciendo errores antes de la ejecución. |
| **Tailwind CSS** | CSS Modules / Bootstrap | Facilita la recreación ágil y responsive de las vistas de IKOMI mediante clases utilitarias, manteniendo la paleta de colores azul y rojo de la marca. |
| **Carpeta `src/`** | Raíz del proyecto | Organiza el código fuente en un solo lugar y separa la lógica de la aplicación de los archivos globales de configuración de Next.js. |
| **App Router** | Pages Router | Es la arquitectura estándar actual de Next.js. Permite layouts anidados, metadata dinámica y renderizado optimizado en el servidor (RSC). |
| **ESLint** | Sin linter | Detecta automáticamente posibles errores sintácticos y asegura un código limpio y estandarizado según las buenas prácticas. |

## Justificación de Estructura de Rutas (Parte 2.4)

### ¿Se utilizó Layout Anidado en `/productos`?
* **Decisión:** No  utilice un layout anidado específico para `/productos`.
* **Justificación:** La estructura visual del catálogo y del detalle de producto mantiene la misma línea estética y navegación que el resto del sitio web. Usar el `RootLayout` global es suficiente y evita sobrecargar la jerarquía de renderizado innecesariamente.

### ¿Se utilizaron Route Groups (ej. `(marketing)`)?
* **Decisión:** No  utilice Route Groups en esta etapa.
* **Justificación:** Al tratarse de una aplicación académica de 6 rutas principales con la misma identidad visual, la agrupación por carpetas directas en el App Router (`/nosotros`, `/servicios`, `/productos`, `/contacto`) proporciona una estructura clara, limpia y fácil de mantener sin añadir capas abstractas en la arquitectura de carpetas.

## Justificación de Componentes de Cliente vs Servidor (Parte 3.2)

### ¿Por qué `Navbar.tsx` debe ser un Client Component (`"use client"`)?
* **Razones técnicas:**
  1. Utiliza el hook `usePathname()` de Next.js para detectar la ruta activa y resaltar el enlace actual.
  2. Maneja estado local con `useState()` para abrir y cerrar el menú hamburguesa en dispositivos móviles.
  3. Los hooks y el manejo de eventos del DOM solo funcionan en componentes del lado del cliente.

### ¿Por qué el resto del sitio se mantiene como Server Components?
* **Razones técnicas:**
  1. **Rendimiento:** Reduce el tamaño del bundle de JavaScript enviado al navegador.
  2. **SEO:** Genera el HTML en el servidor, facilitando la indexación de productos en motores de búsqueda.
  3. **Seguridad:** Mantiene la lógica de datos y recursos del lado del servidor sin exponerla al cliente.

## Estrategia de Estilos y Componentes (Parte 4)

### Justificación de Tailwind CSS (Punto 4.2)
* **Elección:** Se seleccionó **Tailwind CSS**.
* **Comparativa frente a CSS Modules y Bootstrap:**
  * **Frente a Bootstrap:** Tailwind ofrece mayor flexibilidad sin sobrecargar el código con temas predeterminados rígidos ni JavaScript innecesario, permitiendo un diseño único e identitario para IKOMI PERÚ.
  * **Frente a CSS Modules:** Evita la creación excesiva de archivos `.module.css` individuales y acelera el desarrollo mediante clases de utilidad estandarizadas con paleta de colores y tipografía centralizadas en la configuración global.

### Beneficios de `next/image` y `next/font` (Punto 4.3)
* **`next/font`:** Carga tipografías de Google Fonts (`Inter`) con cero *Cumulative Layout Shift* (CLS) al alojar la fuente en el mismo servidor de la aplicación sin peticiones externas adicionales.
* **`next/image`:** Optimiza de forma automática el tamaño, formato (WebP/AVIF) y resolución de las imágenes según el dispositivo que las solicite, además de incorporar *lazy loading* nativo.

### Animaciones con Propósito (Punto 4.5)
* **Efecto Hover en Tarjetas (`transition-all`, `hover:shadow-xl`):**
  * **Propósito:** Brinda *feedback* visual inmediato al usuario indicando que la tarjeta de producto es interactiva, mejorando notablemente la experiencia de navegación (UX).