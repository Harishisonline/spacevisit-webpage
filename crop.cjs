const sharp = require('sharp');
const path = require('path');

const inputImagePath = '/Users/harish/.clawdbot/media/inbound/db7ef949-c40f-4b06-8d48-e5b0a9027fbb.jpg';
const outputDir = '/Users/harish/clawd/spacevisit-webpage/public/anatomy';

async function cropImages() {
  const metadata = await sharp(inputImagePath).metadata();
  console.log(`Original image: ${metadata.width}x${metadata.height}`);

  // Calculate roughly 1/3 width for each section
  const width3 = Math.floor(metadata.width / 3);

  // Crop Jupiter
  await sharp(inputImagePath)
    .extract({ left: 0, top: 0, width: width3, height: metadata.height })
    .toFile(path.join(outputDir, 'jupiter-split.jpg'));

  // Crop Moon
  await sharp(inputImagePath)
    .extract({ left: width3, top: 0, width: width3, height: metadata.height })
    .toFile(path.join(outputDir, 'moon-split.jpg'));

  // Crop Earth
  await sharp(inputImagePath)
    .extract({ left: width3 * 2, top: 0, width: metadata.width - (width3 * 2), height: metadata.height })
    .toFile(path.join(outputDir, 'earth-split.jpg'));

  console.log('Images successfully split and saved!');
}

cropImages().catch(err => console.error(err));