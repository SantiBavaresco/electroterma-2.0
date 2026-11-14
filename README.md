# Electroterma 2.0

Sitio/catálogo de Electroterma (Tempomatic, Soler & Palau, DTI, Zila y Soluciones HVAC).

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **NextUI**
- **GSAP + ScrollTrigger** para las animaciones por frames de los ventiladores Soler & Palau

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build
npm run lint
```

Requiere Node 18.17 o superior (ver `.node-version`).

## Estructura

```
app/
  (home)/            Home (layout raíz propio, con Vercel Analytics)
  (all)/             Resto de las páginas (Tempomatic, Soler & Palau, DTI, Zila, Soluciones…)
components/
  layout/            RootShell (html/body/footer/analytics comunes) y providers
  scrollFrames/      Animación por frames ligada al scroll (GSAP ScrollTrigger)
  navbar/ diferenciales/ custonButtons/ imgslider/ table/ …
hooks/
  useIsDesktop.ts    true a partir de 768px (reemplaza la lógica repetida en cada página)
public/
  data/              Textos y datos de cada producto
  img/solerpalau/<producto>/frames/{web,mobile}/N.webp   frames de las animaciones
styles/
  globals.css
```

## Animación de los ventiladores (RLS / TSA / TDA)

`components/scrollFrames/ScrollFrames.tsx` dibuja en un `<canvas>` el frame que
corresponde a la posición del scroll dentro de la sección (sube y baja con el scroll).

```tsx
<ScrollFrames product="rls" variant="web" frameCount={{ web: 567, mobile: 508 }} />
```

- `product`: carpeta en `public/img/solerpalau/<product>/frames/`
- `variant`: `"web"` (1920×1080) o `"mobile"` (400×711)
- `frameCount`: cantidad de archivos en cada carpeta (`1.webp` … `N.webp`).
  **Si se agregan o quitan frames, actualizar este número.**

Los frames se descargan progresivamente (primero uno de cada 32, después cada 16, etc.)
cuando la sección se acerca a la pantalla, y se cachean una semana (ver `next.config.js`).
