# Excursión a Hokkaido - Página Web Informativa

## Descripción

Página web desarrollada en **HTML5 + CSS3 + JavaScript**, cuyo objetivo es
promocionar una excursión turística a **Hokkaido, Japón**. El proyecto
nació como una hoja de trabajo académica con HTML puro (sin estilos ni
scripts), y evolucionó hasta un sitio con diseño visual completo,
**totalmente responsive**, y con **funcionalidades interactivas reales**
(cotizador, buscador, formularios y galería) escritas en JavaScript
externo (`js/scripts.js`), además de componentes que siguen usando solo
trucos de CSS (`:checked`, `~`) para no depender de JS cuando no es
necesario.

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
  - Al hacer clic en cualquier imagen (escritorio o móvil) se abre un
    **lightbox** (JS) con la foto en grande y su descripción completa.
    
- **Tabla de itinerario** (`#itinerario`): itinerario detallado de la
  excursión (5 días), presentado como una serie de **"boletos de viaje"**
  (fecha/hora + actividad/lugar) con línea punteada, junto con un aviso
  legal referente a cambios y responsabilidad.
- **Actividades adicionales** (`#actividades`): carrusel de tarjetas (CSS
  puro, radio inputs) con un **buscador en tiempo real** (JS): al escribir
  en la barra de búsqueda, salta automáticamente a la tarjeta que coincide con el texto.
- **Opiniones de nuestros visitantes** (`#testimonios`): 3 tarjetas con
  nombre + comentario elegidos al azar entre 2 arreglos en JS, organizados
  en 2 grupos de 3. El botón "Ver más opiniones" cambia de grupo con un
  clic en escritorio, y avanza tarjeta por tarjeta en móvil, cada uno con
  su propio indicador de puntos generado dinámicamente.
- **Footer** (`#contacto`): tres columnas (marca/resumen,
  secciones de navegación, contacto), íconos de redes sociales y el botón **"Quiero contactarme"**.
- **Botón flotante "volver arriba"**, situado en la esquina inferior derecha.

## Funcionalidades en JavaScript
 
Todas usan `getElementById` / `querySelectorAll`, `addEventListener` y
`classList` para mostrar/ocultar u ordenar el contenido — ninguna recarga
la página (`event.preventDefault()` en los formularios).
 
1. **Modal de cotización** — formulario con número de asistentes, tipo de
   paquete (`<select>`) y servicios adicionales (`checkbox`, incluyendo
   boletos aéreos). Calcula e imprime el precio total estimado al instante.
2. **Buscador de actividades** — filtra en tiempo real (evento `input`) y
   salta a la tarjeta del carrusel que coincide con la búsqueda.
3. **Modal de contacto / reservación** — formulario con `<select>`
   ("Reservar" o "Que me contacten"); si se elige reservar, muestra un
   campo adicional para el número de personas. Al enviarlo (de forma
   figurativa, sin backend), se muestra una página de agradecimiento
   personalizada con el nombre y el tipo de solicitud.
4. **Lightbox de galería** — clic en cualquier foto (escritorio o móvil)
   abre un modal con la imagen en grande y su descripción, con un `guard`
   que evita que un clic en las flechas del carrusel abra el lightbox.
5. **Testimonios aleatorios** — dos arreglos (`testimonialNames`,
   `testimonialComments`, 6 elementos cada uno) que se combinan al azar
   (Fisher-Yates) y se agrupan dinámicamente en tarjetas.
Los tres modales (cotización, contacto, lightbox) comparten el mismo
patrón: abrir con `classList.add("open")`, cerrar con el botón "×", clic
fuera del cuadro, o tecla `Escape`.

## Tecnologías utilizadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `footer`, etc.)
- **CSS3**: Flexbox, Grid, variables (`:root`), `position: sticky`,
  transiciones y **media queries** para el diseño responsive.
- Toda la interactividad (menú hamburguesa, carruseles de galería y de actividades) 
se logra con el truco de `input[type="checkbox"/"radio"]` oculto + `:checked` + selector `~` 
- **JavaScript**: manipulación del DOM, formularios, cálculos y contenido dinámico — todo en `js/scripts.js`.
- Tipografías de Google Fonts: *Shippori Mincho* (títulos), *Noto Sans*
  (cuerpo) e *IBM Plex Mono* (datos del itinerario).
- Imágenes obtenidas de Pexels (contenido para uso publico).

## Diseño responsive
 
El sitio usa dos puntos de quiebre principales (`@media`):
 
- **`900px`**: ajustes de espaciado para tablet.
- **`600px`**: activa el menú hamburguesa, cambia la galería a la versión
  de 1 imagen a la vez, y apila las columnas del footer.

## Cómo visualizar la página

1. Abrir el enlace desplegado en Netlify: `https://hokkaido-itinerary-v2.netlify.app/`.

## Autor

- **Estudiante:** Luis Enrique Valey Osorio (9490-21-16222)
- **Proyecto:** Hoja de Trabajo 1 - Página Web con HTML
