const Parser = require('tree-sitter');
const ObjectFilterLanguage = require('tree-sitter-object-filter-language');
const fs = require('fs');

const parser = new Parser();
parser.setLanguage(ObjectFilterLanguage);

const sourceCode = fs.readFileSync('example.ofl').toString()
const tree = parser.parse(sourceCode);

function interpretNode(node) {
    switch (node.type) {
        case "condition":
            return {
                type: "condition",
                identifier: interpretNode(node.children[0]),
                operator: interpretNode(node.children[1]),
                number: interpretNode(node.children[2]),
            }
        case "identifier":
            return {
                type: "identifier",
                value: node.text,
            }
        case "operator":
            return {
                type: "operator",
                value: node.text,
            }
        case "number":
            return {
                type: "number",
                value: parseInt(node.text),
            }
        default:
            throw new Error(`Unknown node type: ${node.type}`);
    }
}

const result = interpretNode(tree.rootNode);

console.log(result);
