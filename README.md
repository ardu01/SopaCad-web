# Sopa CAD · web

Web estática de **Sopa CAD 0.42**, un CAD paramétrico propio para Windows: interfaz nativa (WPF, C#), licencia MIT. Antes se llamó CAD Libre.

El programa vive en el repositorio privado [github.com/ardu01/sopa-cad](https://github.com/ardu01/sopa-cad). Esta web no distribuye el ZIP, no publica su tamaño ni una suma de comprobación, y no enlaza archivos de ese repositorio.

HTML, CSS y JS sin build, sin cookies y sin rastreadores. Pensada para GitHub Pages desde la raíz de `main` (hay un `.nojekyll`).

## Verla en local

```bash
python3 -m http.server 8741
```

Abre `http://127.0.0.1:8741/`. Hace falta un servidor para que las rutas relativas y el 404 se comporten como en Pages; abrir el HTML suelto también enseña la portada.

## Qué hay

- `index.html` — portada: qué es, funciones de la 0.42, galería, evolución 0.2 → 0.42, formatos, cómo probarlo y licencia.
- `estilos.css`, `sitio.js` — presentación y el interruptor de tema (claro u oscuro, guardado en `localStorage` de este sitio).
- `404.html` — página que usa GitHub Pages cuando la ruta no existe.
- `img/` — capturas en WebP de Sopa CAD 0.42 (y la vista previa anterior, cuando la ventana se llamaba CAD Libre). Cada foto tiene una versión ancha y otra de unos 960 px. No hay redibujos.

## Capturas

Fotos tomadas en el equipo de Miguel. Van en `img/` y `index.html` las enlaza así:

- Hero: `img/live-pieza-mecanizada.webp`
- Galería: `img/ribbon-empty.webp` (editor de croquis), `img/live-brida-parametrica.webp`, `img/04-bloque-achaflanado.webp`, `img/live-croquis-restringido.webp` (el prisma ya sólido), `img/plano-bloque-taladrado.webp` (la lámina exportada)
- Evolución: `img/vista-previa.webp`

No se sirven desde el repositorio privado del programa.

## Créditos

Sopa CAD y esta web: Miguel Rodríguez Saiz. El programa es MIT. El texto de esta web también, ver [LICENSE](LICENSE). Las capturas son de la aplicación.

El sólido B-rep y la exportación STEP, STL y OBJ usan FreeCAD 1.1.4 portable (LGPL-2.1-or-later) y Open CASCADE Technology (LGPL-2.1 con la excepción de OCCT). No van en el ZIP. Sopa CAD no es FreeCAD ni SolidWorks; la cinta no usa iconos propietarios.
