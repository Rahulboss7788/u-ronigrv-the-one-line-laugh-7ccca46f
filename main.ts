import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One funny sentence, at most 200 characters, with the laugh landing
// on the last few words: an everyday truth everyone recognises.
const LINE =
  "My phone battery lasts all day, right up until the exact moment I actually need it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back self-check: the file must hold exactly one sentence of
// 1 to 200 characters, and nothing but whitespace is not allowed.
const written = readFileSync("/output/entry.txt", "utf8");
const sentences = written
  .trim()
  .split(/[.!?]+/)
  .filter((part) => part.trim().length > 0);
if (
  written.trim().length === 0 ||
  [...written].length > 200 ||
  sentences.length !== 1
) {
  throw new Error("Self-check failed: /output/entry.txt is not one sentence of 1-200 characters.");
}
console.log(
  `Wrote ${[...written].length} characters to /output/entry.txt (self-check passed: 1 sentence)`,
);
