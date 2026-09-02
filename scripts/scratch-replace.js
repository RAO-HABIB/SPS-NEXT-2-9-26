const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('.');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace href: "/path..." with href: "/"
    content = content.replace(/href:\s*["']\/[^"']*["']/g, 'href: "/"');
    
    // Replace href="/path..." with href="/"
    content = content.replace(/href=["']\/[^"']*["']/g, 'href="/"');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated ${file}`);
    }
});
console.log(`Done. Changed ${changedFiles} files.`);
