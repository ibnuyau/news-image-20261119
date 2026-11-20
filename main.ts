// Entry for make.fun news-image-20261119: "Sum up 19 November's world news
// in one image".
//
// The image is drawn in this repository (entry.png, a 1024x1024 newspaper
// front page of Thursday 19 November 2026: the Trump-Xi-Putin summit, the
// ICJ genocide ruling, Anthropic's record IPO, and three more stories)
// and this program copies it to the output directory the harness
// provides. No network, no randomness: every run writes the same bytes.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
