# Resumen de los Módulos de Desarrollo Web

---

✅ **Módulo 1: Exploradores web y marcado**  
🌐 **¿Qué hacen los exploradores web?**  
Permiten acceder e interactuar con contenido en Internet. Interpretan HTML y muestran las páginas.

⚙️ **¿Qué es el marcado?**  
Es el lenguaje (HTML) que da instrucciones sobre cómo mostrar el contenido. Es como una receta para que todo se vea igual en todos los navegadores.

❗**Desafíos resueltos:**  
- **Incrustación:** demasiados archivos (imágenes, scripts) pueden ralentizar la página.  
- **Tamaño del documento:** si pesa mucho, carga lento.  
- **Compatibilidad:** antes cada navegador leía distinto, ahora hay estándares comunes.

---

✅ **Módulo 2: HTML – El lenguaje de la web**  
🏗️ **¿Qué es HTML?**  
Lenguaje declarativo que estructura el contenido. No dice *cómo*, sino *qué* se quiere mostrar.

📚 **Estructura de HTML:**  
- **Etiquetas (tags):** `<p>`, `<h1>`, `<img>`, etc.  
- **Atributos:** detalles como `src`, `href`, `alt`.  
- **Esquema del documento:** orden y jerarquía del contenido.

✍️ **Ejemplo básico:**
```html
<!DOCTYPE html>
<html>
  <head><title>Título</title></head>
  <body>
    <h1>Encabezado</h1>
    <p>Texto de ejemplo</p>
  </body>
</html>
```

---

✅ **Módulo 3: HTML5 – La evolución del hipertexto**  
🚀 **¿Qué mejoras trajo HTML5?**  
- Nuevas etiquetas semánticas: `<header>`, `<nav>`, `<footer>`, etc.  
- Soporte nativo para video, audio y formularios modernos.  
- Mejor integración con JavaScript y CSS.

🔁 **Compatibilidad:**  
Los navegadores deben ser compatibles con HTML5. Por eso existen estándares para que todos lo interpreten igual.

---

✅ **Módulo 4: CSS – Aplicar estilo a páginas web**  
🎨 **¿Qué es CSS?**  
Lenguaje para **dar estilo** a las páginas web: colores, tamaños, posiciones, etc.

📜 **Tipos de estilos:**  
- **En línea:** dentro de la etiqueta (`<p style="color:red;">`)  
- **Interno:** en la sección `<style>`  
- **Externo:** en archivos `.css` (más organizado)

📐 **Sintaxis básica:**
```css
selector {
  propiedad: valor;
}
```

Ejemplo:
```css
p {
  color: blue;
  font-size: 16px;
}
```

🎯 **Selectores útiles:**  
- `.clase` → estilo para varios elementos  
- `#id` → estilo único

---

✅ **Módulo 5: JavaScript – Hacer que la página reaccione**  
⚡ **¿Qué es JavaScript?**  
Lenguaje que permite agregar **interactividad** a las páginas (clics, validaciones, efectos).

🔧 **¿Qué puede hacer?**  
- Modificar contenido sin recargar la página  
- Validar formularios  
- Responder a eventos del usuario

🧠 **¿Cómo se usa?**  
- Dentro de etiquetas `<script>`  
- O en archivos `.js` externos

---

✅ **Módulo 6: Del diseño al lanzamiento**  
📈 **Ciclo de vida del desarrollo (SDLC):**  
1. Planificación  
2. Diseño  
3. Desarrollo  
4. Pruebas  
5. Lanzamiento  
6. Mantenimiento

🔄 **Enfoques:**  
- **Cascada:** lineal, paso por paso.  
- **Ágil:** iterativo, se trabaja en partes pequeñas que se mejoran continuamente.

📌 **Scrum (enfoque ágil):**  
Organiza el trabajo en **sprints** (ciclos cortos) con tareas claras y entregas frecuentes.