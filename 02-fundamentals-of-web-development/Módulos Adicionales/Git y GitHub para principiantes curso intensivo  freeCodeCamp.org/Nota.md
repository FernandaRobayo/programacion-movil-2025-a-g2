
# 🧰 Git y GitHub para Principiantes – Curso Express

## 🧭 ¿Qué son Git y GitHub?
- **Git**: Sistema de control de versiones que guarda los cambios de tu código.
- **GitHub**: Plataforma para alojar repositorios Git y colaborar en línea.

---

## 📦 Instalación y Configuración Básica

1. Descarga Git desde [git-scm.com](https://git-scm.com)
2. Configura tu identidad:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tuemail@example.com"
   git config --list  # Verifica la configuración
   ```

---

## 📁 Iniciar un Proyecto

1. Crea una carpeta y navega a ella.
2. Inicia Git:
   ```bash
   git init
   ```
3. Añade archivos:
   ```bash
   git add archivo.txt
   # o todos los archivos:
   git add .
   ```
4. Haz un commit:
   ```bash
   git commit -m "Primer commit"
   ```
5. Verifica estado:
   ```bash
   git status
   ```

---

## 📜 Ver Cambios e Historial

- Ver historial de commits:
  ```bash
  git log
  git log --oneline
  ```
- Ver diferencias:
  ```bash
  git diff
  ```

---

## 🔁 Conectar con GitHub

1. Crea un repositorio nuevo en GitHub (sin README).
2. Enlaza tu repositorio local:
   ```bash
   git remote add origin https://github.com/usuario/repositorio.git
   git push -u origin master
   ```

---

## 🔄 Sincronización con GitHub

- Descargar y fusionar cambios:
  ```bash
  git pull
  ```
- Descargar sin fusionar:
  ```bash
  git fetch
  ```
- Ver diferencias entre local y remoto:
  ```bash
  git diff origin/master
  ```

---

## ⚠️ Resolver Conflictos

1. Git marcará los conflictos.
2. Edita los archivos afectados.
3. Luego:
   ```bash
   git add archivo_resuelto
   git commit
   ```

---

## 🌿 Trabajar con Ramas

- Ver ramas:
  ```bash
  git branch
  ```
- Crear y cambiar:
  ```bash
  git checkout -b nueva-rama
  ```
- Volver a master/main:
  ```bash
  git checkout master
  ```
- Fusionar ramas:
  ```bash
  git merge nueva-rama
  ```

---

## 🙈 Ignorar Archivos

Crea un archivo llamado `.gitignore` con contenido como:
```
node_modules/
.env
dist/
```

---

## 🖥️ Herramientas Gráficas Recomendadas

- **GitHub Desktop**: Interfaz oficial para trabajar con Git sin comandos.
- **Visual Studio Code**: Editor con integración Git.

**Ventajas:**
- Visualización clara de cambios y ramas.
- Interfaz amigable para hacer commits, merges, push, pull, etc.

---

## 📚 Recursos Útiles

- [Documentación oficial de Git](https://git-scm.com/doc)
- Curso gratuito de Traversy Media en YouTube.
- Usa ramas para experimentar sin romper tu código principal.
- Colabora en proyectos de GitHub y haz contribuciones reales.

---

# 🧰 Git y GitHub para Principiantes – Curso Express

## 🧭 ¿Qué son Git y GitHub?
- **Git**: Sistema de control de versiones que guarda los cambios de tu código.
- **GitHub**: Plataforma para alojar repositorios Git y colaborar en línea.

---

## 📦 Instalación y Configuración Básica

1. Descarga Git desde [git-scm.com](https://git-scm.com)
2. Configura tu identidad:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tuemail@example.com"
   git config --list  # Verifica la configuración
   ```

---

## 📁 Iniciar un Proyecto

1. Crea una carpeta y navega a ella.
2. Inicia Git:
   ```bash
   git init
   ```
3. Añade archivos:
   ```bash
   git add archivo.txt
   # o todos los archivos:
   git add .
   ```
4. Haz un commit:
   ```bash
   git commit -m "Primer commit"
   ```
5. Verifica estado:
   ```bash
   git status
   ```

---

## 📜 Ver Cambios e Historial

- Ver historial de commits:
  ```bash
  git log
  git log --oneline
  ```
- Ver diferencias:
  ```bash
  git diff
  ```

---

## 🔁 Conectar con GitHub

1. Crea un repositorio nuevo en GitHub (sin README).
2. Enlaza tu repositorio local:
   ```bash
   git remote add origin https://github.com/usuario/repositorio.git
   git push -u origin master
   ```

---

## 🔄 Sincronización con GitHub

- Descargar y fusionar cambios:
  ```bash
  git pull
  ```
- Descargar sin fusionar:
  ```bash
  git fetch
  ```
- Ver diferencias entre local y remoto:
  ```bash
  git diff origin/master
  ```

---

## ⚠️ Resolver Conflictos

1. Git marcará los conflictos.
2. Edita los archivos afectados.
3. Luego:
   ```bash
   git add archivo_resuelto
   git commit
   ```

---

## 🌿 Trabajar con Ramas

- Ver ramas:
  ```bash
  git branch
  ```
- Crear y cambiar:
  ```bash
  git checkout -b nueva-rama
  ```
- Volver a master/main:
  ```bash
  git checkout master
  ```
- Fusionar ramas:
  ```bash
  git merge nueva-rama
  ```

---

## 🙈 Ignorar Archivos

Crea un archivo llamado `.gitignore` con contenido como:
```
node_modules/
.env
dist/
```

---

## 🖥️ Herramientas Gráficas Recomendadas

- **GitHub Desktop**: Interfaz oficial para trabajar con Git sin comandos.
- **Visual Studio Code**: Editor con integración Git.

**Ventajas:**
- Visualización clara de cambios y ramas.
- Interfaz amigable para hacer commits, merges, push, pull, etc.

---

## 📚 Recursos Útiles

- [Documentación oficial de Git](https://git-scm.com/doc)
- Curso gratuito de Traversy Media en YouTube.
- Usa ramas para experimentar sin romper tu código principal.
- Colabora en proyectos de GitHub y haz contribuciones reales.

---
