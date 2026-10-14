# Curriculum web — Ángel Farías

Sitio de portafolio personal construido con Next.js y preparado para desplegarse en Vercel.

## Requisitos
- Node.js 18.17 o superior
- npm

## Ejecutar localmente
```bash
npm install
npm run dev
```
Abre http://localhost:3000.

## Publicar en Vercel
1. Sube el contenido de este proyecto a un repositorio GitHub.
2. Entra en https://vercel.com/new e importa el repositorio.
3. Vercel detectará Next.js automáticamente. Mantén los valores predeterminados y pulsa **Deploy**.
4. No requiere variables de entorno para esta versión.

## Personalización
- Contenido y proyectos: `app/page.tsx`.
- Diseño responsive: `app/globals.css`.
- Metadatos del navegador: `app/layout.tsx`.
- Foto y certificados: carpeta `public/`.

Los enlaces de proyectos externos apuntan a las URL disponibles en la versión anterior del currículum. Comprueba que continúen publicados y accesibles antes de compartir el sitio.
