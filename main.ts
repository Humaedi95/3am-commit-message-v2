import { mkdirSync, writeFileSync } from "node:fs";

const message =
  "fix(prod): freed disk at 3 AM by deleting prod — disk is 100% free, prod is 0% up, I stand by the math";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", message, "utf8");
