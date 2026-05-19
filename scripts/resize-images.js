const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'assets', 'images', 'sandrine_edited_edited.jpg');
const outDir = path.join(__dirname, '..', 'assets', 'images', 'responsive');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sizes = [400, 800, 1200];

(async () => {
  try {
    for (const w of sizes) {
      const outJpeg = path.join(outDir, `sandrine-${w}.jpg`);
      const outWebp = path.join(outDir, `sandrine-${w}.webp`);
      await sharp(src).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpeg);
      await sharp(src).resize({ width: w }).webp({ quality: 75 }).toFile(outWebp);
      console.log('Written', outJpeg, outWebp);
    }
  } catch (err) {
    console.error('Error resizing images', err);
    process.exit(1);
  }
})();
