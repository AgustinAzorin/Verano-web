# Verano-web

Sitio web de Verano Café (Av. Dorrego 2187, Palermo Hollywood). HTML, CSS y JS sin frameworks ni paso de compilación.

## Estructura

- `index.html`, `carta.html`, `eventos.html`, `contacto.html`, `404.html`: las páginas.
- `assets/css/estilos.css`: todos los estilos (una sola hoja, responsive).
- `assets/js/sitio.js`: estado abierto/cerrado según la hora de Buenos Aires y el visor de la carta.
- `assets/fonts/`: Nunito Sans y Yellowtail servidas desde el propio sitio (sin pedidos a Google Fonts).
- `robots.txt`, `sitemap.xml`, `site.webmanifest`: indexación en buscadores e íconos.

El cabezal y el pie se repiten en cada página: si cambiás uno, cambialo en las cinco.

## Publicar

Al hacer push a `main`, `.github/workflows/pages.yml` publica el sitio en GitHub Pages:
https://agustinazorin.github.io/Verano-web/

Una sola vez: en GitHub, Settings › Pages › Build and deployment › Source, elegí **GitHub Actions**.

Si usás un dominio propio, reemplazá `https://agustinazorin.github.io/Verano-web/` en las páginas (canonical, Open Graph, JSON-LD), `robots.txt` y `sitemap.xml`, y sacá el `<base href="/Verano-web/">` de `404.html`.

Para que Google lo indexe antes, cargá el sitio en Google Search Console y enviá `sitemap.xml`. Para que aparezca en Maps, la ficha de Google Business Profile del café tiene que apuntar a esta URL.

## Pendiente antes de lanzarlo

- Fotos del patio, el salón, un raf y el mapa (hoy son marcadores `[Foto …]`).
- Precios de la cocina ucraniana (`[Precio]`) y fechas y precio de los eventos (`[Sábado 00/00]`, `[$ precio]`).
- El aviso "Propuesta de diseño… No es el sitio oficial": sacarlo solo si el café aprueba el sitio.
