// One-off favicon generator. Pads the portrait source to a transparent
// square (fit: contain) so Penny's full head is preserved, then emits the
// standard PNG favicon set into static/.
// Run: node scripts/generate-favicons.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Swap to PennyFavicon2.PNG for the pink duotone variant.
const SOURCE = join(process.env.HOME, 'Downloads', 'PennyFavicon.PNG');
const OUT_DIR = join(projectRoot, 'static');

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

const outputs = [
  { file: 'favicon.png', size: 48 },
  { file: 'favicon-16.png', size: 16 },
  { file: 'favicon-32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 }
];

for (const { file, size } of outputs) {
  await sharp(SOURCE)
    .resize(size, size, { fit: 'contain', background: TRANSPARENT })
    .png()
    .toFile(join(OUT_DIR, file));
  console.log(`wrote ${file} (${size}x${size})`);
}
