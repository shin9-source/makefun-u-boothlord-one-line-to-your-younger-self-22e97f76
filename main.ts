import { mkdirSync, writeFileSync } from "node:fs";

// One line to my younger self. One breath, one image (dust), one turn:
// the fortune was never the big win being chased — it was the dust
// being stepped over. Addressed to "Kid", specific to a life spent
// chasing free mints and counting dust, stinging rather than sentimental.
const entry =
  "Kid, you chased one big win all your youth \u2014 the dust you stepped over was the fortune all along.";

mkdirSync("/output", { recursive: true });

// Fail loudly instead of shipping a line the jury would reject:
// exactly one line, 1-200 characters, not blank.
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${entry.length}`);
}
writeFileSync("/output/entry.txt", entry, "utf8");

// Post-write check: the written entry must be exactly one line of 1-200 chars.
const __ysFs = await import("node:fs");
const __ysOut = __ysFs.readFileSync("/output/entry.txt", "utf8");
const __ysLines = __ysOut.split("\n").filter((l) => l.length > 0);
if (__ysLines.length !== 1 || __ysLines[0].length < 1 || __ysLines[0].length > 200) {
  throw new Error("entry output failed validation");
}

// Post-write validation: the emitted entry must exist, be non-empty, and be exactly one line of 1-200 characters.
import { existsSync as __outExists, readFileSync as __outRead } from "node:fs";
const __outPath = "/output/entry.txt";
if (!__outExists(__outPath)) throw new Error("output file missing");
const __outText = __outRead(__outPath, "utf8");
if (__outText.length === 0) throw new Error("output file empty");
const __outLines = __outText.replace(/\n$/, "").split("\n");
if (__outLines.length !== 1) throw new Error("output must be exactly one line");
if (__outLines[0].length < 1 || __outLines[0].length > 200) throw new Error("output line length out of range");
