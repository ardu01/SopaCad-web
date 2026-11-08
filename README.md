# SopaCAD | Official Website

**Sitio web oficial de SopaCAD, un software de diseño CAD paramétrico para Windows desarrollado por Ardu Solutions.**

[![Website](https://img.shields.io/badge/Website-Online-16A34A?style=flat-square)](https://ardu01.github.io/SopaCad-web/)
![HTML5](https://img.shields.io/badge/HTML5-Web-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Design-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-222222?style=flat-square&logo=github)
![License](https://img.shields.io/badge/License-MIT-2563EB?style=flat-square)

---

## Descripción

**SopaCAD Web** es la página oficial de presentación de **SopaCAD**, una aplicación de diseño asistido por ordenador (CAD) paramétrico desarrollada por **Miguel Rodríguez Saiz** bajo Ardu Solutions.

Su objetivo es proporcionar un espacio público donde conocer las capacidades del software, explorar sus funcionalidades, consultar capturas reales y seguir su evolución.

SopaCAD es una aplicación nativa para Windows desarrollada mediante **C# y WPF**, orientada al modelado de piezas mecánicas mediante croquis, restricciones geométricas, operaciones tridimensionales e historial paramétrico.

Anteriormente, el proyecto se denominaba **CAD Libre**.

Esta web forma parte del ecosistema tecnológico de **Ardu Solutions**.

**Desarrollador:** Miguel Rodríguez Saiz  
**Organización:** Ardu Solutions  
**Categoría:** Desarrollo Web / Ingeniería / Diseño CAD  
**Versión del producto presentada:** 0.42  
**Publicación:** GitHub Pages

## Acceder a la web

**[Visitar la web oficial de SopaCAD](https://ardu01.github.io/SopaCad-web/)**

## Características

- Presentación oficial de SopaCAD.
- Información sobre las funcionalidades de diseño paramétrico.
- Capturas reales de la aplicación.
- Galería de piezas y operaciones CAD.
- Información sobre croquis y modelado tridimensional.
- Presentación de formatos de importación y exportación.
- Historial de evolución del proyecto.
- Información sobre tecnologías y componentes.
- Interfaz con modos claro y oscuro.
- Diseño adaptable a diferentes dispositivos.
- Sitio estático sin cookies ni rastreadores.
- Publicación mediante GitHub Pages.

## Tecnologías

| Tecnología | Función |
|---|---|
| HTML5 | Estructura y contenido |
| CSS3 | Diseño visual y presentación |
| JavaScript | Interactividad y gestión del tema |
| WebP | Optimización de imágenes |
| GitHub Pages | Alojamiento y publicación |
| Git | Control de versiones |

La web no requiere un framework ni un proceso de compilación.

## Estructura del repositorio

```text id="v6nf4b"
SopaCad-web/
│
├── img/
│   └── Capturas y recursos gráficos
│
├── index.html
├── estilos.css
├── sitio.js
├── favicon.svg
├── 404.html
├── .nojekyll
├── LICENSE
└── README.md
```

El archivo `index.html` contiene la página principal, mientras que `estilos.css` y `sitio.js` gestionan la presentación visual y la interactividad.

El directorio `img/` incluye capturas reales de SopaCAD, utilizadas para mostrar sus herramientas de diseño y evolución.

## Ejecución local

Clonar el repositorio:

```bash id="vnjb1h"
git clone https://github.com/ardu01/SopaCad-web.git
cd SopaCad-web
```

Iniciar un servidor HTTP local:

```bash id="iw9t75"
python3 -m http.server 8741
```

Acceder desde el navegador a:

`http://localhost:8741`

No se requiere instalar dependencias adicionales para visualizar la web.

## Proyecto principal: SopaCAD

Esta web presenta **SopaCAD 0.42**, una aplicación de diseño paramétrico orientada a la creación y modificación de componentes mecánicos.

Entre sus funcionalidades documentadas se encuentran:

- Creación de croquis con restricciones geométricas.
- Modelado de sólidos tridimensionales.
- Extrusiones y revoluciones.
- Operaciones de barrido y recubrimiento.
- Vaciado y combinación de sólidos.
- Matrices y simetrías.
- Historial de operaciones.
- Parámetros y ecuaciones.
- Generación de planos con cotas.
- Exportación a formatos de diseño e intercambio.

### Arquitectura del producto

SopaCAD utiliza una interfaz nativa desarrollada en **C# y WPF**.

Para determinadas operaciones de geometría sólida B-rep y exportación, se apoya en **FreeCAD 1.1.4 portable** y **Open CASCADE Technology**.

Estos componentes externos no están incluidos en el paquete ZIP del programa descrito por la web.

SopaCAD es un proyecto independiente y no debe confundirse con FreeCAD, SolidWorks u otros productos CAD comerciales.

### Disponibilidad

El código principal de SopaCAD se mantiene en un repositorio privado.

Esta web es exclusivamente informativa y no distribuye el paquete del programa ni sus archivos internos.

## Autor

**Miguel Rodríguez Saiz**

Diseño y desarrollo del proyecto.

**Ardu Solutions** — Desarrollo de software, ingeniería, inteligencia artificial y soluciones tecnológicas.

- **Web oficial:** https://ardu01.github.io/SopaCad-web/
- **Portfolio:** https://ardu01.github.io/proyectos/
- **Ardu Solutions:** https://ardusolutions.pages.dev/
- **GitHub:** https://github.com/ardu01
- **Repositorio:** https://github.com/ardu01/SopaCad-web

## Licencia

El código y la documentación de esta web se distribuyen bajo **MIT License**.

Esta licencia permite utilizar, modificar y redistribuir el software, respetando las condiciones y avisos de copyright establecidos.

El producto SopaCAD también se presenta bajo licencia MIT.

Los componentes externos, como FreeCAD y Open CASCADE Technology, mantienen sus respectivas licencias.

Consultar el archivo [LICENSE](LICENSE) para más información.

---

**© 2026 Miguel Rodríguez Saiz · Ardu Solutions**

*SopaCAD — Engineering ideas into reality.*
