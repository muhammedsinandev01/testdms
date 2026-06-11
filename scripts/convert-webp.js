const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const heroDir = path.join(__dirname, '../public/img/hero');

async function convertPngToWebp() {
  try {
    console.log(`Scanning directory: ${heroDir}`);
    const files = fs.readdirSync(heroDir);
    const pngFiles = files.filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.png'));

    if (pngFiles.length === 0) {
      console.log('No PNG files found to convert.');
      return;
    }

    console.log(`Found ${pngFiles.length} PNG frames. Starting WebP conversion...`);

    let completed = 0;
    for (const file of pngFiles) {
      const inputPath = path.join(heroDir, file);
      const outputName = file.replace('.png', '.webp');
      const outputPath = path.join(heroDir, outputName);

      // Convert using sharp
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 }) // high effort, good compression
        .toFile(outputPath);

      // Delete the original PNG file to save space
      fs.unlinkSync(inputPath);

      completed++;
      if (completed % 20 === 0 || completed === pngFiles.length) {
        console.log(`Converted ${completed}/${pngFiles.length} frames...`);
      }
    }

    console.log('Successfully converted all frames to WebP and cleaned up PNGs!');
  } catch (err) {
    console.error('Error during WebP conversion:', err);
  }
}

convertPngToWebp();
