import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');

await mkdir(outputDir, { recursive: true });
await copyFile(new URL('./entry.png', import.meta.url), resolve(outputDir, 'entry.png'));
