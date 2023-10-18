import fs from 'fs';
import path from 'path';
import { sha256 } from '@noble/hashes/sha256';

async function addHashToFilename(filePath: string) {
  if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} does not exist.`);
    return;
  }

  // Read the file and calculate its SHA256 hash.
  const content = fs.readFileSync(filePath);
  const hash = sha256(content);
  const shortHash = Buffer.from(hash).toString('hex').slice(0, 7); // Take the first 7 characters.

  // Rename the file.
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const newPath = path.join(dir, `${baseName}.${shortHash}${ext}`);
  fs.renameSync(filePath, newPath);
  fs.copyFileSync(newPath, path.join(dir, `${baseName}${ext}`));

  console.log(`File renamed to: ${baseName}.${shortHash}${ext}`);
}

export { addHashToFilename }