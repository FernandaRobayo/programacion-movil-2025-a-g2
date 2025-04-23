# Creacion de sitios web dinamicos con JavaScript

## Módulo 1: ¿Qué es JavaScript?

### Introducción
JavaScript es un lenguaje de programación que permite crear contenido dinámico en sitios web, como mapas interactivos o animaciones. Es un componente esencial del desarrollo web junto con HTML y CSS.

### Objetivos del módulo
- Definir qué es JavaScript.
- Describir el rol de JavaScript en la experiencia del usuario.
- Comparar JavaScript con HTML y CSS.
- Identificar dónde se ejecuta JavaScript.

### ¿Qué hace JavaScript?
Permite:
- Reaccionar a acciones del usuario.
- Mostrar u ocultar elementos de una página.
- Validar formularios.
- Controlar contenido multimedia.

JavaScript se ejecuta en el navegador y trabaja junto con HTML y CSS para ofrecer interactividad.

---

## Módulo 2: ¿Qué puede hacer JavaScript?

### Introducción
Este módulo describe cómo JavaScript mejora la experiencia del usuario permitiendo que las páginas web sean interactivas, como cuando al mover el cursor se activan animaciones o efectos.

### Objetivos del módulo
- Describir cómo JavaScript mejora la experiencia del usuario.
- Explicar la diferencia entre un sitio web estático y dinámico.
- Identificar ejemplos de funcionalidades interactivas.
- Describir cómo JavaScript interactúa con el navegador.

### Sitios web dinámicos
JavaScript permite a los desarrolladores crear sitios web que respondan al usuario, como mapas interactivos o aplicaciones web. También permite cargar contenido sin necesidad de recargar toda la página (AJAX).

### Diferencia entre sitios estáticos y dinámicos
- Sitios **estáticos**: solo HTML y CSS, no reaccionan a las acciones del usuario.
- Sitios **dinámicos**: usan JavaScript para responder a eventos del usuario.

### Interacción con el navegador
JavaScript puede cambiar el contenido y estilo de una página sin necesidad de recargarla. También puede manejar sucesos (eventos) como clics, teclas o movimientos del mouse.

---

## Módulo 3: Descripción general de la estructura JavaScript

### Introducción
Este módulo enseña la estructura básica del código JavaScript: variables, funciones, expresiones y eventos.

### Objetivos del módulo
- Describir el rol de las variables.
- Explicar cómo funcionan las funciones.
- Definir expresiones y operadores.
- Explicar cómo crear una expresión.
- Describir sucesos y su manejo con JavaScript.

### Variables
Son contenedores de datos. Por ejemplo:

```javascript
function Login(username, password) {
    // código para comprobar credenciales
    if (valid) {
        return "Verificado";
    } else {
        return "Lo sentimos, no se ha podido verificar";
    }
}
```

### Expresiones y operadores
Una expresión puede ser una operación matemática o de texto:

```javascript
var newString = "JavaScript es útil " + "y hace la web dinámica.";
var newNumber = 2 + 2; // Resultado: 4
```

El operador `+` sirve para concatenar texto o sumar números, según el tipo de dato.

### Conversión de tipo implícito
JavaScript decide automáticamente si usar `+` como suma o como concatenación.

### Sucesos (eventos)
Eventos como clics o teclas se manejan con funciones que responden a esas acciones.

# Módulo 3: Descripcion general de la estructura de javascript

## Introducción

En este módulo, aprenderás a agregar interactividad a las páginas web con JavaScript. Explorarás cómo los desarrolladores web utilizan este lenguaje para que los sitios web respondan a las acciones del usuario y para mostrar contenido actualizado. También aprenderás cómo depurar errores en tu código.

## Objetivos del curso

Después de completar este módulo, deberías ser capaz de:

- Explicar el papel de JavaScript para agregar interactividad a los sitios web.
- Identificar cómo funciona JavaScript para la interactividad.
- Reconocer ejemplos de eventos y controladores de eventos.
- Escribir código JavaScript simple que agregue interactividad.
- Describir cómo depurar errores en JavaScript.

## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que permite a los desarrolladores web agregar interactividad a sus sitios. Mientras que HTML y CSS controlan la estructura y el estilo, JavaScript hace que el sitio "cobre vida".

### Ejemplos de interactividad:

- Mostrar u ocultar contenido cuando haces clic en un botón.
- Validar un formulario antes de enviarlo.
- Mostrar un mensaje personalizado dependiendo de la hora del día.

## Eventos y controladores de eventos

Un evento es cualquier acción que ocurre en el navegador, como hacer clic, escribir en un campo o mover el ratón.

Un controlador de eventos es una función JavaScript que "escucha" un evento y responde cuando sucede.

```javascript
document.getElementById("miBoton").addEventListener("click", function() {
  alert("¡Haz hecho clic!");
});
```

## Depuración de errores

Depurar significa encontrar y corregir errores en tu código.

Herramientas útiles:

- Consola del navegador (accede con F12).
- `console.log()` para mostrar mensajes y valores en la consola.

```javascript
let x = 5;
console.log(x); // Muestra 5
```

# Módulo 4: Interactuar con los datos

## Introducción

En este módulo, aprenderás a utilizar los datos desde la perspectiva de un desarrollador web. Explorarás los datos web y distintos tipos de datos que los desarrolladores suelen utilizar. También conocerás las funciones básicas de las bases de datos y usarás MySQL como ejemplo.

## Objetivos del curso

Después de completar este módulo, deberías ser capaz de:

- Definir los datos y los tipos de datos más comunes.
- Identificar las cuatro funciones principales de base de datos.
- Describir MySQL.
- Reconocer una sintaxis MySQL simple para crear una base de datos y trabajar con los datos.

## Tipos de datos

Un tipo de datos indica al ordenador cómo interpretar un valor. Por ejemplo:

- Texto: cadenas de caracteres.
- Números: enteros o decimales.
- Fechas: formatos específicos (como DD/MM/AAAA).

## ¿Qué es SQL?

SQL (Lenguaje de Consulta Estructurado) es el lenguaje estándar para crear y manipular bases de datos.

## Caso práctico con MySQL

Imagina que trabajas para una empresa de salas de cine. Puedes usar SQL para:

- Crear una base de datos:
```sql
CREATE DATABASE Cine;
```

- Crear una tabla:
```sql
CREATE TABLE Peliculas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  año INT
);
```

- Insertar datos:
```sql
INSERT INTO Peliculas (titulo, año) VALUES ('Inception', 2010);
```

- Consultar datos:
```sql
SELECT * FROM Peliculas;
```

- Actualizar datos:
```sql
UPDATE Peliculas SET año = 2011 WHERE titulo = 'Inception';
```

# Módulo 5: Ejecución: Introducción a Node.js

## Introducción

Este módulo te presenta los servidores web y Node.js. Aprenderás cómo Node.js mejora la eficiencia del desarrollo y ejecución de aplicaciones del lado del servidor, y cómo NPM ayuda a los desarrolladores a trabajar de forma más rápida y efectiva.

## Objetivos del curso

Después de completar este módulo, deberías ser capaz de:

- Explicar las funciones y la evolución de los servidores web.
- Describir Node.js.
- Identificar cómo funciona Node.js para las solicitudes web.
- Reconocer las ventajas de Node.js y la importancia del NPM.
- Comparar marcos (frameworks) y bibliotecas.

## ¿Qué es Node.js?

Node.js es un entorno de ejecución basado en JavaScript, de código abierto, que se ejecuta en servidores. Puede manejar muchas solicitudes de forma eficiente y rápida.

### Ventajas de Node.js:

- Usa JavaScript, lo cual permite usar un solo lenguaje tanto en el servidor como en el cliente.
- Eficiente con recursos del servidor: evita bloqueos al delegar tareas de fondo.
- De código abierto y con muchas bibliotecas disponibles.

## ¿Qué es NPM?

NPM (Node Package Manager) es una herramienta que permite instalar bibliotecas para proyectos Node.js fácilmente.

```bash
npm install express
```

Esto agrega el marco "Express" al proyecto, facilitando la creación de aplicaciones web.

