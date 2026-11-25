import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM commit message — kept byte-identical, never reworded.
const COMMIT_MESSAGE =
  "fix(prod): freed disk at 3 AM by deleting prod — disk is 100% free, prod is 0% up, I stand by the math";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT_MESSAGE, "utf8");
