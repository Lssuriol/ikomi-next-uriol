# Proyecto Replicación IKOMI PERÚ - Next.js
**Estudiante:** Luz Uriol Izquierdo

## Respuestas Teóricas (Parte 1)

### 1.3 Función de los archivos principales de Next.js
* **`app/layout.tsx`:** Es el diseño base que envuelve a todas las páginas. Define el HTML principal, carga tipografías e incluye componentes globales como la barra de navegación (`Navbar`) y el pie de página (`Footer`).
* **`app/page.tsx`:** Es la página principal (Home) de la aplicación, mapeada directamente a la ruta raíz (`/`).
* **Carpeta `public/`:** Almacena archivos estáticos accesibles directamente por la URL (imágenes, logos, favicons) sin pasar por el compilador.
* **`next.config.ts`:** Archivo de configuración central de Next.js donde se definen integraciones, optimizaciones de imágenes y redirecciones.
* **Scripts de `package.json`:**
  * `npm run dev`: Inicia el servidor de desarrollo local con recarga rápida.
  * `npm run build`: Compila y optimiza la aplicación para producción.
  * `npm run start`: Inicia el servidor de producción con la versión previamente compilada por `build`.

### 1.4 Ventajas de Next.js frente a una SPA con React (Vite) para IKOMI PERÚ
Next.js ofrece **Server-Side Rendering (SSR)** y **Static Site Generation (SSG)**, a diferencia de una SPA de React tradicional que renderiza todo mediante JavaScript en el navegador del cliente.

**Ventajas concretas para IKOMI PERÚ:**
1. **SEO (Posicionamiento en Google):** Los motores de búsqueda reciben HTML renderizado directamente con la información de los repuestos y datos de contacto de IKOMI, permitiendo que se indexe inmediatamente en Google.
2. **Rendimiento e First Contentful Paint (FCP):** El cliente recibe el HTML listo con los productos de repuestos desde el servidor, mostrando contenido al usuario mucho más rápido que descargando un bundle JS pesado primero.
3. **Metadata Dinámica:** Cada página (`/servicios`, `/productos`, etc.) gestiona sus propias etiquetas meta de título y descripción optimizadas para redes sociales y motores de búsqueda.

## Árbol de Componentes del Sitio (Punto 4.6)

```text
RootLayout (Server Component)
├── Navbar (Client Component - 'use client')
├── page.tsx / [rutas] (Server Components)
│   ├── Hero (Server Component)
│   ├── SectionTitle (Server Component)
│   ├── ProductCard (Server Component)
│   └── ContactForm (Client Component)
└── Footer (Server Component)