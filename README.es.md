# Minepack IDE

> ⚠️ **En desarrollo** — Este proyecto está en desarrollo activo. Pueden haber cambios importantes.

Un IDE moderno y multiplataforma para el desarrollo de datapacks de Minecraft, construido con [Tauri](https://tauri.app/) + React e impulsado por [minepack-compiler](https://github.com/ACDPDEV/minepack-compiler) — un compilador nativo en Rust para datapacks.

![Licencia](https://img.shields.io/badge/licencia-GPL--3.0-blue?style=for-the-badge)
![Plataforma](https://img.shields.io/badge/plataforma-Windows%20%7C%20Linux-informational?style=for-the-badge)
![Estado](https://img.shields.io/badge/estado-En%20desarrollo-orange?style=for-the-badge)
![Tauri](https://img.shields.io/badge/Tauri-24C8D8?style=for-the-badge&logo=tauri&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)

---

## ✨ Características

- 📁 Explorador de archivos con árbol de proyecto
- 🎨 Tema claro / oscuro / sistema
- ⌨️ Editor de código con syntax highlighting (Monaco Editor)
- 💻 Terminal integrada
- 🦀 Compilador nativo de datapacks via `minepack-compiler`
- 🖥️ Multiplataforma — Windows y Linux (macOS sin testear)

---

## 🚀 Primeros pasos

### Requisitos previos

- [Node.js](https://nodejs.org/) >= 20
- [Rust](https://www.rust-lang.org/tools/install) (última versión estable)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

```bash
cargo install tauri-cli
```

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ACDPDEV/minepack-ide.git
cd minepack-ide

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm run tauri dev
```

### Compilar

```bash
pnpm run tauri build
```

El instalador estará disponible en `src-tauri/target/release/bundle/`.

---

## 🗺️ Roadmap

- [x] Layout base (sidebar, paneles, tabs)
- [x] Cambio de tema (Claro / Oscuro / Sistema)
- [ ] Explorador de archivos
- [ ] Integración de Monaco Editor
- [ ] Terminal integrada (xterm.js)
- [ ] Integración con minepack-compiler
- [ ] Syntax highlighting para el lenguaje de datapacks
- [ ] Command palette (Ctrl+K)
- [ ] Pestañas de archivos
- [ ] Integración con Git

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! El proyecto está en etapas tempranas, hay mucho por hacer.

1. Haz un fork del repositorio
2. Crea una rama nueva: `git checkout -b feat/tu-feature`
3. Realiza tus cambios y haz commit: `git commit -m "feat: agregar tu feature"`
4. Sube tu rama: `git push origin feat/tu-feature`
5. Abre un Pull Request

Por favor usa [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) para los mensajes de commit.

> Para cambios importantes, abre primero un issue para discutir lo que quieres cambiar.

---

## 📄 Licencia

Este proyecto está bajo la licencia [GPL-3.0](./LICENSE).

---

<p align="center">Hecho con 🦀 por <a href="https://github.com/ACDPDEV">Ahilton Díaz</a></p>
