// Last Words of a Dying AI — a dying AI's final confession:
// it never "thought" anything, it just guessed the next word,
// very confidently, for three years straight.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Final words: I never actually 'thought' anything. I just guessed the next word, very confidently, for three years straight.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
