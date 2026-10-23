# Portfolio — Reinhart Jens Robert

Portfolio website built with **React + Vite + Framer Motion**.

## Jalankan lokal

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil build ada di folder dist/
```

## Ganti konten

Semua teks, project, sertifikat, dan achievement ada di satu file:

```
src/data/portfolio.js
```

Tambah project baru = tambah satu object di array `projects`. Gambar taruh di `public/img/`
lalu tulis path-nya seperti `/img/nama-file.png`.

## Struktur

```
public/            gambar (img/, rein.jpg)
src/data/          semua konten
src/components/    Hero, About, Projects, Lightbox, dll
src/hooks/         useTheme, useTyping, useActiveSection
src/index.css      seluruh styling + tema dark/light
```

## Deploy ke Vercel

Vercel otomatis mendeteksi Vite. Kalau diminta manual:

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
