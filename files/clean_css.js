const fs = require('fs');
const path = require('path');

const cssPath = path.join('c:', 'Users', 'AGeor', 'OneDrive', 'Imagens', 'SITE_LAB', 'lab-interface', 'css', 'style.css');
let content = fs.readFileSync(cssPath, 'utf8');

// The lines we want to remove are approximately from the `/* Filtros */` down to just before `/* ============================================` `PROJETOS`
const startUnused1 = content.indexOf('/* Filtros */');
const endUnused1 = content.indexOf('/* ============================================\n   PROJETOS\n   ============================================ */');

if (startUnused1 !== -1 && endUnused1 !== -1) {
  content = content.substring(0, startUnused1) + content.substring(endUnused1);
}

// Remove filter pills
const startUnused2 = content.indexOf('.projetos-featured .projeto-card {');
const endUnused2 = content.indexOf('.projetos-grid {');

if (startUnused2 !== -1 && endUnused2 !== -1) {
  content = content.substring(0, startUnused2) + content.substring(endUnused2);
}

fs.writeFileSync(cssPath, content);
console.log('Removed dead code from style.css successfully.');
