# Minepack IDE

![Logo](public/logo.svg)

> ⚠️ **Work in Progress** — This project is under active development. Expect breaking changes.

A modern, cross-platform IDE for Minecraft datapack development, built with [Tauri](https://tauri.app/) + React and powered by the [minepack-compiler](https://github.com/ACDPDEV/minepack-compiler) — a native Rust compiler for datapacks.

![License](https://img.shields.io/badge/license-GPL--3.0-blue?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux-informational?style=for-the-badge)
![Status](https://img.shields.io/badge/status-WIP-orange?style=for-the-badge)
![Built with Tauri](https://img.shields.io/badge/Tauri-24C8D8?style=for-the-badge&logo=tauri&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)

---

## ✨ Features

- 📁 File explorer with project tree
- 🎨 Light / Dark / System theme
- ⌨️ Code editor with syntax highlighting (Monaco Editor)
- 💻 Integrated terminal
- 🦀 Native datapack compiler via `minepack-compiler`
- 🖥️ Cross-platform — Windows & Linux (macOS untested)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [Rust](https://www.rust-lang.org/tools/install) (latest stable)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

```bash
cargo install tauri-cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/ACDPDEV/minepack-ide.git
cd minepack-ide

# Install dependencies
pnpm install

# Run in development mode
pnpm run tauri dev
```

### Build

```bash
pnpm run tauri build
```

The installer will be available in `src-tauri/target/release/bundle/`.

---

## 🗺️ Roadmap

- [x] Base layout (sidebar, panels, tabs)
- [x] Theme switching (Light / Dark / System)
- [ ] File explorer
- [ ] Monaco Editor integration
- [ ] Integrated terminal (xterm.js)
- [ ] minepack-compiler integration
- [ ] Syntax highlighting for datapack language
- [ ] Command palette (Ctrl+P)
- [ ] Git integration

![progress](public/progress.png)

---

## 🤝 Contributing

Contributions are welcome! This project is in early stages, so there's a lot of room to help.

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

> For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the [GPL-3.0 License](./LICENSE).

---

<p align="center">Made with 🦀 by <a href="https://github.com/ACDPDEV">Ahilton Díaz</a></p>
