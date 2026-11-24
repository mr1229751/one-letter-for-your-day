// One Letter for Your Day — entry program for make.fun.
// Emits one fixed single-letter entry to the output directory.
// Uses only the Node standard library and behaves identically on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LETTER = "Q";

function assertEntryIsValid(letter: string): void {
  if (!/^[A-Z]$/.test(letter)) {
    throw new Error("Entry must be exactly one uppercase letter, A to Z.");
  }
}

assertEntryIsValid(ENTRY_LETTER);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LETTER, "utf8");
