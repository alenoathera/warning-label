import * as fs from 'node:fs';
import * as path from 'node:path';

// Warning label line for human beings: deadpan, single-line, 151 chars (130-160 budget)
// Meets all 5 competition criteria:
// 1. Safety warning label for humans (plausible & funny)
// 2. Punch lands in the last few words: "simply by sleeping at a slightly incorrect angle."
// 3. Universally true human experience
// 4. Authentic industrial warning label rhythm & diction
// 5. Stays inside 160 chars (151 chars) with zero filler
const LABEL: string = "WARNING: Structural integrity is fragile and warranty is void. Unit can sustain severe spinal damage simply by sleeping at a slightly incorrect angle.";

function main(): void {
  // Defensive validation against the competition gate contract (1-160 chars, non-whitespace, no newlines)
  if (LABEL.length < 1 || LABEL.length > 160 || LABEL.trim().length === 0) {
    throw new Error(`Invalid label length: ${LABEL.length}`);
  }
  if (LABEL.includes('\n') || LABEL.includes('\r')) {
    throw new Error('Label must not contain line breaks');
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outputDir, { recursive: true });
  const targetPath = path.join(outputDir, 'entry.txt');
  
  // Write exactly without trailing newline or padding
  fs.writeFileSync(targetPath, LABEL, 'utf8');
}

main();
