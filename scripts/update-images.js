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
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}
const files = walk('C:/New folder/sps/src');
let changedFiles = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  const folders = ['Hero', 'customers', 'logo', 'news', 'partners', 'products', 'services', 'startups', 'verticals'];
  folders.forEach(folder => {
    // Replace "/folder/" with "/images/folder/"
    const regex1 = new RegExp('"' + '/' + folder + '/', 'g');
    content = content.replace(regex1, '"/images/' + folder + '/');
    const regex2 = new RegExp("'" + '/' + folder + '/', 'g');
    content = content.replace(regex2, "'/images/" + folder + '/');
  });
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated paths in:', file);
    changedFiles++;
  }
});
console.log('Total files updated:', changedFiles);
