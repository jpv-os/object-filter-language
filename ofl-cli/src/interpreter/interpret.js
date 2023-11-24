const Parser = require('tree-sitter');
const ObjectFilterLanguage = require("tree-sitter-object-filter-language");

module.exports = function interpret(sourceCode) {
    const parser = new Parser();
    parser.setLanguage(ObjectFilterLanguage);

    const tree = parser.parse(sourceCode);
    const node = tree.rootNode;

    switch (node.type) {
        case "source":
            // TODO: problem: node package for tree-sitter does not implement the fields API
            console.log(node.fields);
            console.log(node);
            return "TODO";
        default:
            throw new Error(`Unknown node type: ${node.type}`);
    }
}
