# Git Cheat Sheet - Resumen en Español

## ✨ ¿Qué es Git?
Git es un sistema de control de versiones distribuido que permite trabajar en equipo, mantener un historial de cambios y colaborar desde distintas ubicaciones con copias locales completas del repositorio.

---

## 🔧 Comandos Git Esenciales

### 🔐 Configuración
```bash
git config -l                         # Ver configuración
git config --global user.name "Nombre"     # Configurar nombre de usuario
git config --global user.email "email@dominio.com"  # Configurar email
git config --global credential.helper cache  # Guardar credenciales
```

### 📂 Repositorios
```bash
git init           # Inicializar repositorio
```

### 📄 Manejo de Archivos
```bash
git add archivo.txt         # Agregar archivo al staging
git add .                   # Agregar todos los archivos
git commit -m "Mensaje"     # Commit con mensaje
git status                  # Ver estado del repo
git rm archivo.txt          # Eliminar archivo
git mv viejo.txt nuevo.txt  # Renombrar archivo
```

### 🔍 Historial y Cambios
```bash
git log                 # Ver historial
git show <commit-id>    # Ver detalle de un commit
git diff                # Ver cambios no staged
git diff --staged       # Ver cambios staged
git reset HEAD archivo.txt  # Quitar archivo del staging
git checkout archivo.txt    # Revertir cambios no guardados
git commit --amend      # Modificar el último commit
git revert HEAD         # Deshacer el último commit
```

### 🌿 Ramas
```bash
git branch nueva-rama          # Crear nueva rama
git checkout nueva-rama        # Cambiar de rama
git checkout -b nueva-rama     # Crear y cambiar de rama
git branch                     # Ver ramas
git branch -d rama             # Eliminar rama
git merge rama                 # Unir ramas
git rebase rama                # Reorganizar commits
```

### 🌐 Remotos
```bash
git remote add origin https://url     # Agregar repo remoto
git remote -v                         # Ver repos remotos
git push                              # Subir cambios al remoto
git pull                              # Obtener cambios del remoto
git fetch                             # Descargar cambios sin fusionar
git push -u origin rama               # Subir nueva rama al remoto
git push --delete origin rama         # Eliminar rama remota
```

### ⚠️ Avanzado
```bash
git merge --abort            # Cancelar un merge con conflictos
git add -p                   # Agregar partes de cambios
git rebase -i master         # Rebase interactivo
git push -f                  # Forzar push (con precaución)
```

---

## ✅ Consejo Final
Guarda esta chuleta para consulta rápida. No necesitas memorizar todo, pero tener esta referencia te hará mucho más productivo con Git.

