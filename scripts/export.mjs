// Genera el sitio estático en out/ (funciona igual en Windows, Mac y Linux).
import { spawnSync } from "node:child_process";

const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    shell: true,
    env: { ...process.env, NEXT_EXPORT: "1" },
});

if (result.status === 0) {
    console.log("\nListo: subí el contenido de la carpeta out/ (incluido el archivo oculto .htaccess) a public_html.");
}
process.exit(result.status ?? 1);
