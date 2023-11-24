const fs = require('fs');

module.exports = function readSourceCode(sourceFile) {
  if (!fs.existsSync(sourceFile)) {
    console.error(`File not found: ${sourceFile}`);
    process.exit(1);
  }
  return fs.readFileSync(sourceFile).toString();
}
