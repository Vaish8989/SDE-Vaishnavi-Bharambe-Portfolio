const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  { search: /gold/g, replace: 'purple' },
  { search: /#d4af37/g, replace: '#915EFF' },
  { search: /rgba\(212, ?175, ?55,/g, replace: 'rgba(145, 94, 255,' },
  { search: /rgba\(212,175,55,/g, replace: 'rgba(145,94,255,' }
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  replacements.forEach(r => {
    newContent = newContent.replace(r.search, r.replace);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.cjs')) {
      replaceInFile(fullPath);
    }
  });
}

traverseDirectory(directoryPath);
replaceInFile(path.join(__dirname, 'tailwind.config.cjs'));
