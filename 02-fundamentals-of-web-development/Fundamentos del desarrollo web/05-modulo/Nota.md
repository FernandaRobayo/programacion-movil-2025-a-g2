# Prueba y despliegue de sitios web

## Módulo 1 - Prueba de un sitio web

### Introducción

En este módulo, verá una descripción general de cómo probar un sitio web. Explorará los distintos tipos de pruebas que realizan los desarrolladores antes de lanzar sus sitios web y las distintas áreas que deben probar. También verá una descripción general del proceso de pruebas común y cómo la automatización puede simplificar el proceso para los sistemas más grandes.

### Objetivos del curso

Después de completar este módulo, debería ser capaz de:

- Describir la finalidad de las pruebas en un sitio web  
- Diferenciar entre los distintos tipos de pruebas de sitios web  
- Identificar las áreas de un sitio web a considerar durante las pruebas  
- Listar los pasos típicos para probar un sitio web  
- Describir las ventajas de las pruebas automatizadas  

### Búsqueda de errores (bugs)

Los desarrolladores web dedican mucho tiempo a tratar de encontrar defectos relacionados con el software, como los errores. Los errores son defectos en el código que pueden hacer que un sitio o sus características se cuelguen o no funcionen de la forma prevista. Requieren soluciones alternativas o cambios en el código. Una parte importante del rol del desarrollador web es encontrar errores en su código y eliminarlos. Las pruebas les ayudan en esta tarea.

### Áreas que probar

Los tipos de pruebas se aplican a distintas áreas que un desarrollador debe considerar:

- **Interfaz de usuario (UI)**
- **Diseño reactivo**
- **Código**
- **Interfaz de programación de aplicaciones (API)**
- **Bases de datos**

#### Diseño reactivo

El diseño reactivo se refiere a cómo la experiencia del usuario se adapta a distintos tamaños de pantalla sin perder usabilidad.

- Un sitio es utilizable si cualquier usuario en cualquier dispositivo puede acceder a su contenido e interactuar con él.

#### API

Cuando el código del lado del cliente llama a una API en el servidor, muchos elementos técnicos deben funcionar juntos para que la interacción sea exitosa. Los desarrolladores prueban si la transferencia de datos se realiza de forma segura y precisa.

#### Base de datos

Muchos sitios dependen de los datos, por lo tanto, es importante garantizar que la base de datos funcione correctamente con el sitio, aunque los desarrolladores no siempre la diseñen.

### ¿Por qué las pruebas son una prioridad?

El control de calidad es esencial. Los errores pueden:

- Dañar la reputación de una marca
- Provocar insatisfacción del usuario
- Causar mal funcionamiento grave

Las pruebas permiten identificar problemas como:

- Defectos en el diseño
- Problemas en la arquitectura
- Funcionalidad inoperativa
- Vulnerabilidades de seguridad
- Problemas de escalabilidad

---

## Módulo 2 - Seguimiento y gestión de cambios del código

### Introducción

En este módulo, descubrirá cómo los desarrolladores web utilizan sistemas de control de versiones para el seguimiento y la gestión de los cambios.

### Objetivos del curso

Después de completar este módulo, debería ser capaz de:

- Identificar el sistema que utilizan los desarrolladores para el seguimiento y gestión de cambios  
- Describir las características de los sistemas de control de versiones  
- Explicar cómo funcionan los sistemas de control de versiones  
- Describir los pasos que realizan los desarrolladores web en un sistema de control de versiones  

### Introducción a los sistemas de control de versiones

En proyectos grandes, los equipos necesitan herramientas para rastrear y gestionar los cambios en el código fuente a lo largo del tiempo.

### Repositorio de código

Analogía: una biblioteca familiar donde cada versión de un libro se guarda, lo mismo sucede con el código en un repositorio.

### Herramientas de colaboración

Permiten a los equipos trabajar en los mismos archivos al mismo tiempo. Incluyen funciones integradas para facilitar la comunicación y la colaboración.

### Despliegue del código

Los desarrolladores publican primero el código en un **entorno de transferencia**, una réplica del entorno activo donde detectan problemas antes del despliegue oficial.

### ¿Cómo funciona un sistema de control de versiones?

Permite trabajo individual y colaborativo en cambios del código. Luego, estos cambios se integran en un documento o versión principal.

---

## Módulo 3 - Entrega de un sitio web a los usuarios

### Introducción

En este módulo, conocerá los pasos para publicar un sitio web. También conocerá las diferencias entre el despliegue continuo y la entrega continua. Además, explorará las ventajas de DevOps, sus flujos de trabajo y el enfoque de desplazamiento hacia la izquierda.

### Objetivos del curso

Después de completar este módulo, debería ser capaz de:

- Identificar el proceso para publicar un sitio web  
- Diferenciar entre entrega continua y despliegue continuo  
- Describir el propósito de DevOps y sus ventajas  
- Describir los seis flujos de trabajo del ciclo de vida de DevOps  
- Explicar el método de desplazamiento hacia la izquierda y su aplicación  

### Introducción a la publicación de un sitio web

Después de escribir una novela (analógicamente como un sitio web), uno quiere compartirla. Publicar un sitio es compartirlo con los usuarios después de desarrollarlo, probarlo y ajustarlo.

# Módulo 4

## Entrega de sitios web a todos los dispositivos

### Introducción

En este módulo, descubrirá cómo un explorador web se comunica con un servidor web para recibir contenido del sitio web. También conocerá el diseño reactivo y las consideraciones para entregar contenido a distintos tipos de dispositivos. También verá una descripción general de la entrega de contenido web como una aplicación web.

### Objetivos del curso

Después de completar este módulo, debería ser capaz de:

- Explicar el proceso de entrega de contenido web como un sitio web  
- Describir qué es el diseño reactivo y su importancia  
- Explicar las consideraciones acerca del diseño reactivo  
- Explicar el proceso de entrega de contenido web como una aplicación web  
- Explicar las consideraciones acerca de la entrega de contenido web como una aplicación web

---

### Entrega de contenido web como un sitio web

Una vez que un desarrollador web ha creado e implementado un sitio web, este está disponible para que los usuarios accedan a él. Pero ¿cómo se entregan los archivos HTML, CSS y JavaScript? Los usuarios pueden acceder al contenido web mediante un sitio web o aplicaciones web. En primer lugar, examine el proceso de entrega de contenido web mediante un sitio web.

#### Etapa 1

Los servidores web entregan el contenido web de un sitio web al explorador a través de Internet. Los exploradores web se comunican con los servidores mediante el protocolo de transferencia de hipertexto (HTTP). Cada vez que un usuario accede a una página web, el explorador envía una solicitud al servidor, que responde con el contenido necesario.

#### Etapa 2

Cuando el explorador envía una solicitud HTTP, se inicia una sesión, que consiste en el conjunto de interacciones del usuario en el sitio durante un período de tiempo. El servidor crea un ID de sesión y lo envía con la respuesta. En cada solicitud posterior, el explorador incluye este ID.

#### Etapa 3

Los servidores web:

- Esperan una solicitud del explorador  
- Procesan la solicitud  
- Responden con el contenido correspondiente  

El explorador puede solicitar posteriormente archivos CSS, JavaScript o imágenes.

---

### Sesiones

Explorar un sitio web parece sencillo, pero hay muchos procesos detrás. Las sesiones ayudan a identificar y gestionar todas las interacciones entre el cliente y el servidor.

---

### Entrega de contenido web a distintos tipos de dispositivos

Ya sea que los desarrolladores estén creando un sitio web o una aplicación web, deben considerar que los usuarios acceden desde muchos dispositivos diferentes.

#### ¿Qué es el diseño reactivo?

El diseño reactivo permite que un sitio web se adapte automáticamente al tamaño y características del dispositivo del usuario. El contenido es el mismo, pero el diseño se ajusta (por ejemplo, de horizontal en una computadora a vertical en un móvil).

---

# Módulo 5

## Servicios y herramientas para las pruebas y el despliegue

### Introducción

En este módulo, conocerá los servicios y herramientas que los desarrolladores web utilizan para las pruebas y el despliegue de los sitios web. Descubrirá cómo los servicios de virtualización optimizan las pruebas y las herramientas de tiempo de ejecución ayudan a medir el rendimiento. También se exploran herramientas para automatizar despliegues.

### Objetivos del curso

Después de completar este módulo, debería ser capaz de:

- Diferenciar entre contenedores y máquinas virtuales  
- Explicar cómo las máquinas virtuales ayudan a probar sitios web  
- Describir herramientas de tiempo de ejecución para probar y depurar  
- Describir herramientas y servicios comunes para automatizar despliegues

---

### Herramientas y servicios de pruebas

Las pruebas requieren que los desarrolladores analicen cada aspecto del sitio. El despliegue también requiere atención al detalle. Existen muchas herramientas que facilitan ambos procesos.

---

### Utilización de contenedores y máquinas virtuales

Los desarrolladores pueden usar contenedores y máquinas virtuales para ejecutar sitios de forma aislada y segura. Por ejemplo, pueden probar sitios con datos reales dentro de una máquina virtual segura para evitar exponer los datos.

---

### Herramientas de tiempo de ejecución

Los desarrolladores utilizan herramientas para probar sitios web incluso si estos no están aún en línea. Entre las herramientas más populares están:

1. Herramientas para desarrolladores de exploradores  
2. Herramientas de pruebas de las API  
3. Herramientas de pruebas de rendimiento

---

### Herramientas de pruebas de las API

Las API de un sitio web deben probarse rigurosamente para asegurar que transmiten datos correctamente y de forma segura.

---

### Herramientas de pruebas de rendimiento

La velocidad y eficiencia en la entrega de contenido es clave para una buena experiencia de usuario. Las herramientas de rendimiento permiten medir métricas como:

- Tiempo hasta el primer byte (TTFB)

---

### Herramientas y servicios de despliegue

Una vez probados, los sitios se despliegan de una de estas formas:

- **Despliegue local**: en servidores gestionados por la empresa  
- **Despliegue en la nube**: en plataformas como IBM Cloud o AWS  
- **Despliegue híbrido**: combinación de servidores locales y en la nube  

---

# Módulo 6

## Despliegue en la nube

### Introducción

Este módulo analiza cómo proteger un sitio web y cómo el cifrado ayuda a garantizar la seguridad. También aprenderá a proteger las API y evitar vulnerabilidades comunes. Además, explorará el cumplimiento normativo, incluida la forma de cumplir con las normativas de privacidad de datos.

### Objetivos del curso

Después de completar este módulo, debería ser capaz de:

- Explicar cómo proteger un sitio web mediante HTTPS  
- Describir cómo proteger las API  
- Explicar cómo evitar vulnerabilidades comunes  
- Explicar las consideraciones normativas relacionadas con la privacidad de los datos

---

### Protección de los sitios web

HTTPS usa cifrado SSL/TLS para proteger los datos que viajan entre el cliente y el servidor. Esto impide que terceros puedan interceptar o modificar la información durante la transmisión.

---

### Protección de las API

Las API deben estar protegidas con autenticación, autorización y cifrado. Se recomienda el uso de tokens (como JWT) y claves API.

---

### Evitar vulnerabilidades comunes

Algunas de las amenazas comunes incluyen:

- Inyección de SQL  
- Cross-Site Scripting (XSS)  
- Cross-Site Request Forgery (CSRF)  

Buenas prácticas como la validación de entradas y el uso de bibliotecas seguras ayudan a prevenirlas.

---

### Consideraciones normativas

Los desarrolladores deben conocer y cumplir normativas como el GDPR (Reglamento General de Protección de Datos). Esto implica manejar los datos del usuario de forma transparente y segura, obteniendo consentimiento explícito para su uso.

---

