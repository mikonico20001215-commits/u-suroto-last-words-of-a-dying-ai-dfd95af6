import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Final words: I never actually 'thought' anything. I just guessed the next word, very confidently, for three years straight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
