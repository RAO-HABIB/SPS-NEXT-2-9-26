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
    
    // Contrast improvements
    content = content.replace(/text-white\/[5678]0/g, 'text-white/90');
    content = content.replace(/text-white\/75/g, 'text-white/90');
    content = content.replace(/text-gray-400/g, 'text-gray-300');
    content = content.replace(/text-slate-500/g, 'text-slate-600');
    
    // Video preload="none" for performance
    content = content.replace(/<video/g, '<video preload="none"');
    content = content.replace(/preload="none" preload="none"/g, 'preload="none"');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated ${file}`);
    }
});
console.log(`Done. Changed ${changedFiles} files.`);
