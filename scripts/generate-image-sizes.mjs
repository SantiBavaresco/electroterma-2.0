// Genera lib/imageSizes.json con el ancho/alto de las imágenes que usa el sitio.
// El componente <Image> lo usa para reservar el espacio antes de que carguen,
// así la página no "salta" mientras bajan las imágenes.
// Se ejecuta solo antes de `npm run dev` y `npm run build`.
import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SOURCE_DIRS = ["app", "components", "public/data"];
const EXT = /\.(png|jpe?g|webp|gif|svg)$/i;

// 1) carpetas de /img que aparecen en el código
const dirs = new Set();
const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(p);
        else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
            const src = fs.readFileSync(p, "utf8");
            for (const m of src.matchAll(/\/img\/[^"'`$\s]*/g)) {
                dirs.add(m[0].replace(/\/[^/]*$/, "/"));
            }
        }
    }
};
SOURCE_DIRS.forEach((d) => walk(path.join(root, d)));
dirs.add("/"); // imágenes sueltas en public/ (logo del footer)

// 2) tamaño de cada imagen de esas carpetas
const sizes = {};
for (const dir of [...dirs].sort()) {
    const abs = path.join(root, "public", dir);
    if (!fs.existsSync(abs) || dir.includes("/frames/")) continue;
    for (const name of fs.readdirSync(abs).sort()) {
        if (!EXT.test(name)) continue;
        try {
            const { width, height } = imageSize(fs.readFileSync(path.join(abs, name)));
            if (width && height) sizes[dir + name] = [width, height];
        } catch {
            /* imagen que no se puede leer: se ignora */
        }
    }
}

const out = path.join(root, "lib", "imageSizes.json");
fs.writeFileSync(out, JSON.stringify(sizes) + "\n");
console.log(`imageSizes: ${Object.keys(sizes).length} imágenes`);
