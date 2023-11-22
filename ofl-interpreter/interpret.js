module.exports = function interpret(node) {
    switch (node.type) {
        case "condition":
            return {
                type: "condition",
                identifier: interpret(node.children[0]),
                operator: interpret(node.children[1]),
                number: interpret(node.children[2]),
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
