# Nippy

Nippy is a lightweight cross-platform clipboard manager. The project is currently in initial scaffolding; clipboard history and native desktop behavior come later.

## Stack

Tauri v2, Rust, React, TypeScript, Vite, pnpm, Tailwind CSS, Lucide React, and Biome.

Nippy self-hosts Aileron. Aileron is distributed under its own license, available in [`LICENSES/Aileron.txt`](LICENSES/Aileron.txt).

## Development

```sh
pnpm install
pnpm dev          # frontend HMR
pnpm tauri dev    # desktop app with frontend HMR
pnpm build
pnpm check
```
