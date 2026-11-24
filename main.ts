// One Letter for Your Day — make.fun entry.
// Writes the entry text to /output/entry.txt.
// Node standard library only; deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Q";

// Gate guard: the sealed scorer only accepts exactly one character, an uppercase letter from A to Z.
// A carriage return or newline would break the one-entry promise,
// so reject them rather than trusting the length check alone.
if (!/^[A-Z]$/.test(LINE)) {
  throw new Error("entry must be exactly one letter, A to Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
