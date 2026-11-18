// Copies the 17 November 2026 front-page image, entry.png, to the output directory.
import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');

await mkdir(outputDir, { recursive: true });
await copyFile(new URL('./entry.png', import.meta.url), resolve(outputDir, 'entry.png'));
console.log(`Copied entry.png to ${resolve(outputDir, 'entry.png')}`);
