const Parser = require('tree-sitter');
const ObjectFilterLanguage = require('tree-sitter-object-filter-language');
const fs = require('fs');
const interpret = require('./interpret');

throw new Error("Not implemented");

// Read source code from file
const sourceFile = process.argv[2];
const sourceCode = fs.readFileSync(sourceFile).toString();

// Create parser
const parser = new Parser();
parser.setLanguage(ObjectFilterLanguage);

// Parse source code
const tree = parser.parse(sourceCode);
const root = tree.rootNode;

// Interpret syntax tree
const result = interpret(root);

// Print result
console.log(result);
