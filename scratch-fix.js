const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      // replace escaped backticks \` with `
      content = content.replace(/\\`/g, '`');
      // replace escaped dollar signs \$ with $
      content = content.replace(/\\\$/g, '$');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'backend'));
processDir(path.join(__dirname, 'src', 'app', 'admin'));
processDir(path.join(__dirname, 'src', 'middleware.ts'));
processDir(path.join(__dirname, 'src', 'app', 'page.tsx'));
