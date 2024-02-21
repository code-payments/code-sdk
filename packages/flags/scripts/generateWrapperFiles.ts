const fs = require('fs');
const path = require('path');

const svgDirectory = './src/flags';
const outputDirectory = './src/wrappers';

if (!fs.existsSync(outputDirectory)){
    fs.mkdirSync(outputDirectory, { recursive: true });
}

const files = fs.readdirSync(svgDirectory);
files.forEach(file => {
  if (path.extname(file) === '.svg') {
    const moduleName = path.basename(file, '.svg');
    const content = `export { default } from '../flags/${file}';\n`;
    fs.writeFileSync(`${outputDirectory}/${moduleName}.ts`, content);
  }
});