// food-picture-01 entry (v3, "Midnight Tonkotsu" straightened): copies the
// food photograph (entry.png) into the output directory. Node standard
// library only. The v3 photograph keeps the v2 hero shot's gloss and light
// but re-shoots the noodle pull and toppings to order.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory: $MAKEFUN_OUTPUT_DIR (relative values are
// resolved against the current working directory), else "/output".
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.cwd(), process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

// The source image sits beside this program; fall back to ./entry.png
// relative to the working directory if that lookup fails.
let source: string;
try {
  source = resolve(dirname(fileURLToPath(import.meta.url)), "entry.png");
} catch {
  source = resolve(process.cwd(), "entry.png");
}

// Fail loudly and clearly if the photograph is missing, rather than
// surfacing a raw copy error from deep inside the copy call.
if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

// Copy the photograph byte-for-byte; the output must be named entry.png
// regardless of the source file's format (the v3 shot is JPEG bytes). In
// v3 the lifted noodles hang in straight, parallel strands, and the bowl
// gains narutomaki slices and a standing nori sheet.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, resolve(outDir, "entry.png"));
