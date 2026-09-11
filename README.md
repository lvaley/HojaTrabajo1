# Excursión a Hokkaido - Página Web Informativa

Migración del sitio original de (HTML/CSS/JS puro) a **React** que promociona 
una excursión de 5 días a Hokkaido, Japón. Replica el **mismo comportamiento 
visual e interactivo** del sitio original, pero con cada funcionalidad 
modularizada como un **componente reutilizable** dentro de `src/components/`.

## Estructura del proyecto

```
├── index.html                  # HTML raíz (título, meta tags, favicon, fuentes)
├── public/
│   └── img/                    # imágenes estáticas (se sirven desde /img/...)
├── src/
│   ├── main.jsx                # punto de entrada de React
│   ├── App.jsx                 # arma la página uniendo todos los componentes
│   ├── index.css               # estilos globales (migrados de styles.css)
│   ├── data/                   # arreglos de datos que alimentan cada componente
│   │   ├── galleryImages.js
│   │   ├── activities.js
│   │   ├── itinerary.js
│   │   ├── quoteOptions.js
│   │   └── testimonials.js
│   ├── hooks/
│   │   └── useMediaQuery.js    # hook reutilizable para media queries (usado por Testimonials)
│   └── components/
│       ├── Navbar/              # navbar sticky, menú hamburguesa, ícono de búsqueda
│       ├── Hero/                 # banner principal + botón "Cotizar excursión"
│       ├── Description/          # descripción del destino
│       ├── Gallery/              # (1) Galería de Imágenes Interactiva
│       │   ├── Gallery.jsx           (contenedor: junta desktop + mobile + lightbox)
│       │   ├── GalleryDesktop.jsx    (carrusel paginado, 3 imágenes por página)
│       │   ├── GalleryMobile.jsx     (carrusel de 1 imagen a la vez)
│       │   └── Lightbox.jsx          (modal con la imagen en grande)
│       ├── Itinerary/            # tabla de itinerario (boletos de viaje)
│       ├── Activities/           # (3) Filtro de Actividades en Tiempo Real
│       │   ├── Activities.jsx        (carrusel de actividades)
│       │   └── ActivitySearchBar.jsx (barra de búsqueda fija bajo el header)
│       ├── Testimonials/         # (5) Reseñas / Testimonios Aleatorios
│       ├── QuoteCalculator/      # (2) Calculadora de Cotización / Presupuesto
│       ├── ContactModal/         # modal de contacto / reservación
│       ├── Footer/               # pie de página
│       ├── BackToTop/            # botón flotante "volver arriba"
│       └── Modal/                # modal genérico reutilizable (usado por los 3 anteriores)
```

## Componentes interactivos obligatorios

1. **Galería de Imágenes Interactiva** (`components/Gallery/`) — carrusel
   paginado en escritorio (2 páginas de 3 imágenes) y carrusel de 1 imagen
   a la vez en móvil (mismo breakpoint de 600px que el sitio original).
   Al hacer clic en cualquier imagen se abre un lightbox con la foto en
   grande y su descripción completa.

2. **Calculadora de Cotización / Presupuesto** (`components/QuoteCalculator/`)
   — modal con número de asistentes, paquete/tour y servicios
   adicionales. Calcula e imprime el total estimado al instante
   (`event.preventDefault()`, sin recargar la página).

3. **Filtro de Actividades en Tiempo Real** (`components/Activities/`) —
   la barra de búsqueda (activada desde el ícono de lupa del navbar) filtra
   mientras se escribe y salta automáticamente a la tarjeta del carrusel
   que coincide con la búsqueda.

4. **Sección de Reseñas / Testimonios Aleatorios** (`components/Testimonials/`)
   — combina 2 arreglos (nombres y comentarios) al azar y los agrupa en
   bloques de 3. En escritorio, cada clic cambia de grupo; en móvil, cada
   clic avanza una tarjeta a la vez (mismo comportamiento que el original,
   detectado con el hook `useMediaQuery`).

## Diferencias de implementación respecto al original

El sitio original usaba **CSS puro** (`input[type=checkbox/radio]` oculto
+ `:checked` + selector `~`) para los carruseles y el menú, ya que no
usaba JavaScript en esa etapa. En esta migración a React, esa misma
interactividad se logra de forma **idiomática con `useState`** y clases
condicionales (`.active`, `.open`), en vez de mantener el truco de CSS —
el resultado visual y de comportamiento es idéntico, pero el código es
el apropiado para una aplicación React.

## Cómo visualizar la página

1. Abrir el enlace desplegado en Netlify: `https://hokkaido-itinerary-v2.netlify.app/`.

## Autor

- **Estudiante:** Luis Enrique Valey Osorio (9490-21-16222)
- **Proyecto:** Hoja de Trabajo 1 - Página Web con HTML

