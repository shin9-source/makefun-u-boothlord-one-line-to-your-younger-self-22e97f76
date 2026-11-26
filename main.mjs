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
