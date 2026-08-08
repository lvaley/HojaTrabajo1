# Excursión a Hokkaido - Página Web Informativa

## Descripción

Página web desarrollada en **HTML5 + CSS3 + JavaScript** cuyo
objetivo es promocionar una excursión turística a **Hokkaido, Japón**.

## Contenido de la página

El archivo `index.html` incluye las siguientes secciones:

- **Navbar** (sticky, con efecto de desenfoque al hacer scroll): título de
  la página y enlaces de navegación interna (`#id`) hacia cada sección.
  En pantallas móviles se colapsa en un **menú hamburguesa** que se
  transforma en icono de cerrar (X) al abrirse — implementado con el
  truco de `checkbox` + `label` en CSS.
- **Hero Banner**: imagen de fondo a pantalla completa con título superpuesto.
- **Descripción del lugar** (`#descripcion`): reseña de Hokkaido, su
  ubicación con enlace directo a Google Maps, características principales
  y atractivos turísticos.
- **Galería de imágenes** (`#galeria`): 6 fotografías representativas de
  Hokkaido (Estanque Azul de Biei, Canal de Otaru, campos de lavanda de
  Furano, Parque Odori en Sapporo, vista nocturna del Monte Hakodate y
  Parque Nacional de Shiretoko), con **dos versiones según el ancho de
  pantalla** (controladas por media query):
  
  - **Escritorio/tablet:** carrusel paginado que muestra 3 imágenes a la
    vez (2 páginas), con flechas superpuestas sobre las imágenes y puntos
    indicadores de página.
  - **Móvil:** carrusel de 1 imagen a la vez con su descripción (etiqueta
    "Explora", título y texto), flechas y puntos indicadores propios.
  - Ambas versiones se controlan con **radio inputs ocultos** (`:checked` + combinador `~`),
    para evitar saltos de página.
    
- **Tabla de itinerario** (`#itinerario`): itinerario detallado de la
  excursión (5 días), presentado como una serie de **"boletos de viaje"**
  (fecha/hora + actividad/lugar) con línea punteada, junto con un aviso
  legal referente a cambios y responsabilidad.
- **Actividades adicionales** (`#actividades`): carrusel de tarjetas (una
  actividad a la vez) con flechas superpuestas, puntos indicadores, e
  íconos temáticos — también implementado con radio inputs ocultos, sin
  JavaScript.
- **Footer** (`#contacto`): tres columnas (marca/resumen,
  secciones de navegación, contacto), íconos de redes sociales (Facebook,
  Instagram, X) y barra inferior con créditos y derechos de autor.
- **Botón flotante "volver arriba"**, situado en la esquina inferior derecha.

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `footer`, etc.)
- **CSS3**: Flexbox, Grid, variables (`:root`), `position: sticky`,
  transiciones y **media queries** para el diseño responsive.
- Toda la interactividad (menú hamburguesa, carruseles de galería y de actividades) 
se logra con el truco de `input[type="checkbox"/"radio"]` oculto + `:checked` + selector `~` 
**sin JavaScript.**
- Tipografías de Google Fonts: *Shippori Mincho* (títulos), *Noto Sans*
  (cuerpo) e *IBM Plex Mono* (datos del itinerario).
- Imágenes obtenidas de Pexels (contenido para uso publico).

## Diseño responsive
 
El sitio usa dos puntos de quiebre principales (`@media`):
 
- **`900px`**: ajustes de espaciado para tablet.
- **`600px`**: activa el menú hamburguesa, cambia la galería a la versión
  de 1 imagen a la vez, y apila las columnas del footer.

## Cómo visualizar la página

1. Abrir el enlace desplegado en Netlify: `https://hokkaido-itinerary.netlify.app/`.

## Autor

- **Estudiante:** Luis Enrique Valey Osorio (9490-21-16222)
- **Proyecto:** Hoja de Trabajo 1 - Página Web con HTML
