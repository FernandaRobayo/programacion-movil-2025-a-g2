
# Módulos de Desarrollo para sitios Web

## 🧭 Módulo 1: Exploradores web y marcado

### Introducción

En este módulo, se explora el rol de los desarrolladores web en la creación de experiencias digitales. Se aborda cómo se desarrolla y presenta el contenido web a través de los exploradores web, los desafíos de la transmisión de datos por Internet, y cómo el lenguaje de marcado ayuda a resolverlos. También se analizan aspectos clave para ofrecer una buena experiencia a todos los usuarios.

### Objetivos del curso

- Describir lo que hace un explorador web.
- Identificar los desafíos de la transmisión de contenido por Internet que el marcado ayuda a resolver.
- Describir la relación entre los exploradores web y el marcado.
- Identificar los factores que los desarrolladores web consideran al trabajar con diferentes exploradores.

### ¿Qué hacen los exploradores web?

Los exploradores permiten a los usuarios interactuar con recursos e información en Internet. Para mostrar contenido como títulos, párrafos o imágenes, los exploradores requieren instrucciones en un lenguaje comprensible: el **lenguaje de marcado**.

#### Ejemplo de marcado:

**Texto en negrita:**
```html
<b>El desarrollo web es divertido</b>
```

**Lista sin ordenar:**
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

### Desafíos que resuelven los exploradores web y el marcado

Uno de los principales desafíos es la **incrustación**, que consiste en incluir archivos como imágenes o vídeos en un documento. Esto puede aumentar mucho el tamaño del documento, afectando la velocidad de carga y el rendimiento.

### La experiencia en el explorador web

En el pasado, los desarrolladores debían adaptar su código a los diferentes estándares de los exploradores. Hoy, gracias a una mayor adherencia a los estándares, pueden centrarse en escribir un código más limpio y consistente. Es fundamental garantizar una buena experiencia de usuario en todos los dispositivos.

---

## 📄 Módulo 2: HTML: el lenguaje de la web

### Introducción

Se revisa la evolución del lenguaje HTML, su estructura y cómo se combina para presentar contenido web. Se destacan etiquetas, atributos y la función de presentación del HTML.

### Objetivos del curso

- Describir los avances históricos del HTML.
- Identificar la estructura de los documentos HTML.
- Explicar la función de presentación de HTML.

### Antecedentes del código HTML

#### El comienzo: GML

En los años 60, IBM creó un esquema de marcado llamado **Generalized Markup Language (GML)** para estructurar documentos.

#### SGML

Luego surgió el **Standardized Generalized Markup Language (SGML)**, que permitía más flexibilidad, como omitir etiquetas de cierre.

#### Llega HTML

En 1989, **Tim Berners-Lee** desarrolló HTML, basado en SGML, para presentar información de forma clara en los exploradores.

### Estructura de un documento HTML

Los documentos HTML tienen una estructura definida para que los exploradores puedan procesarlos correctamente.

#### Ejemplo:
```html
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### Utilizar HTML para presentar y dar formato

HTML es un **lenguaje declarativo**, es decir, describe cómo debe mostrarse el contenido, pero no cómo procesarlo.

---

## ⚙️ Módulo 3: HTML5: la evolución del hipertexto

### Introducción

Se estudian las mejoras que HTML5 ha introducido para estructurar documentos, manejar datos e incorporar interactividad. También se revisa la importancia de la compatibilidad de los exploradores con HTML5.

### Objetivos del curso

- Identificar las mejoras de HTML5 para el desarrollo web y la experiencia de usuario.
- Reconocer la necesidad de compatibilidad entre exploradores y HTML5.

### Cambios importantes de HTML5

Antes de HTML5, la interactividad y animaciones requerían programas externos. Con HTML5 se introdujeron mejoras que permiten:

- Funcionalidades como **arrastrar y soltar**.
- **Guardar cambios automáticamente** en el servidor.
- Insertar y **editar contenido multimedia** directamente en la página.

# Módulo 4: CSS: Estilo y Diseño

## Introducción
Las hojas de estilo en cascada (CSS) permiten separar la estructura del contenido de su presentación. Este módulo explica cómo se utiliza CSS para aplicar estilos a las páginas web, cómo afectan al diseño y cómo mejorar la experiencia del usuario mediante una adecuada presentación.

## Objetivos
- Aplicar estilos a elementos HTML utilizando CSS.
- Comprender cómo funcionan los selectores y el modelo de caja.
- Utilizar las propiedades de CSS para mejorar el diseño web.

## Contenido Principal
CSS se utiliza para definir la apariencia de un sitio web, como colores, tipografía, espaciado y distribución de los elementos en la página. El modelo de caja es un concepto fundamental de CSS, que define cómo se gestionan los márgenes, bordes, rellenos y el contenido en cada elemento. Los desarrolladores utilizan selectores para aplicar estilos a elementos específicos de una página, y las hojas de estilo en cascada permiten que los estilos se apliquen de manera jerárquica, dando flexibilidad y control en el diseño.

---

# Módulo 5: Introducción a JavaScript

## Introducción
JavaScript es el lenguaje de programación que permite hacer que las páginas web sean interactivas. Este módulo te introducirá en los conceptos fundamentales de JavaScript, cómo manipula el DOM (Document Object Model) y cómo responde a los eventos del usuario.

## Objetivos
- Comprender los conceptos básicos de JavaScript.
- Manipular elementos del DOM usando JavaScript.
- Responder a eventos del usuario para hacer páginas dinámicas.

## Contenido Principal
JavaScript es esencial para agregar interactividad a las páginas web. Permite a los desarrolladores responder a las acciones del usuario, como hacer clic en botones, desplazarse por una página o enviar formularios. Usando JavaScript, los desarrolladores pueden manipular el contenido de la página web en tiempo real, lo que permite actualizaciones dinámicas sin necesidad de recargar la página. La interacción con HTML y CSS es lo que hace que los sitios web sean interactivos y adaptables a las necesidades del usuario.

---

# Módulo 6: Herramientas del Desarrollador

## Introducción
En este módulo, se explorarán las herramientas que facilitan el trabajo de desarrollo web. Las herramientas de desarrollo modernas permiten depurar, analizar y mejorar el rendimiento de los sitios web. Aprenderás a usar consolas, depuradores y cómo interpretar los errores y advertencias durante el desarrollo.

## Objetivos
- Familiarizarse con las herramientas de desarrollo en los exploradores web.
- Usar consolas y depuradores para resolver problemas.
- Aplicar buenas prácticas de depuración y análisis de errores.

## Contenido Principal
Las herramientas de desarrollo en los exploradores modernos (como Chrome DevTools) permiten a los desarrolladores inspeccionar el código fuente de las páginas, depurar JavaScript y analizar el rendimiento de las aplicaciones web. Estas herramientas son esenciales para la resolución de problemas, ya que permiten detectar errores en tiempo real, mejorar la velocidad de carga y hacer que las aplicaciones sean más accesibles y robustas. También es importante seguir buenas prácticas para minimizar errores y garantizar un desarrollo eficiente.
