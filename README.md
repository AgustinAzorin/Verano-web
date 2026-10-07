# Verano-web

Sitio web de Verano Café (Av. Dorrego 2187, Palermo Hollywood). HTML, CSS y JS sin frameworks ni paso de compilación.

## Estructura

- `index.html`, `carta.html`, `eventos.html`, `contacto.html`, `404.html`: las páginas.
- `assets/css/estilos.css`: todos los estilos (una sola hoja, responsive).
- `assets/js/sitio.js`: estado abierto/cerrado según la hora de Buenos Aires y el visor de la carta.
- `assets/fonts/`: Nunito Sans y Yellowtail servidas desde el propio sitio (sin pedidos a Google Fonts).
- `robots.txt`, `sitemap.xml`, `site.webmanifest`: indexación en buscadores e íconos.
- `vercel.json`: configuración de Vercel.

El cabezal y el pie se repiten en cada página: si cambiás uno, cambialo en las cinco.

## Publicar

El sitio se publica en Vercel (proyecto importado desde este repo, preset **Other**, sin comando de build ni variables de entorno). Cada push a `main` publica una versión nueva:
https://verano-web.vercel.app/

`vercel.json` activa las URLs sin `.html` (`/carta`, `/eventos`, `/contacto`) y los encabezados de caché.

Si Vercel te asigna otra dirección o usás un dominio propio, reemplazá `https://verano-web.vercel.app/` en las páginas (canonical, Open Graph, JSON-LD), `robots.txt` y `sitemap.xml`.

Para que Google lo indexe antes, cargá el sitio en Google Search Console y enviá `sitemap.xml`. Para que aparezca en Maps, la ficha de Google Business Profile del café tiene que apuntar a esta URL.

## Pendiente antes de lanzarlo

- Fotos del patio, el salón, un raf y el mapa (hoy son marcadores `[Foto …]`).
- Precios de la cocina ucraniana (`[Precio]`) y fechas y precio de los eventos (`[Sábado 00/00]`, `[$ precio]`).
- El aviso "Propuesta de diseño… No es el sitio oficial": sacarlo solo si el café aprueba el sitio.
