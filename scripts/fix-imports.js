const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}
const files = walk('C:/New folder/sps/src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  if (content.includes('../../lib/')) {
    content = content.replace(/\.\.\/\.\.\/lib\//g, '@/data/');
    changed = true;
  }
  if (content.includes('../../components/loadingscreen')) {
    content = content.replace(/\.\.\/\.\.\/components\/loadingscreen/g, '@/components/ui/loadingscreen');
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
  }
});
