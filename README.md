Object Filter Language
===

> A domain specific language for matching objects in JSON-like data structures.

---


# Installation

Follow the steps described in the [Installation Guide](INSTALL.md) to be able to use the tools provided in this repository.

---

# Usage

## Parse example file

Use the tree-sitter CLI to parse a file passed as argument.

```bash
SOURCE_FILE=examples/example.ofl
tree-sitter parse $SOURCE_FILE
```

## Highlight example file

Use the tree-sitter CLI to highlight a file passed as argument.

```bash
SOURCE_FILE=examples/example.ofl
tree-sitter highlight $SOURCE_FILE
``` 

## Run language tests

Use the tree-sitter-object-filter-language to test the parser and highlighter implementations.

```bash
cd tree-sitter-object-filter-language
npm run test
```

## Run example program

Use the ofl-cli to interpret a file passed as argument.

```bash
SOURCE_FILE=examples/example.ofl
node ofl-cli/src/ofl.js interpret $SOURCE_FILE
```

## Open VSCode with language support extension

Go to project root and open VSCode.
Then, run the project (by pressing `F5`) to open a new instance of VSCode with the extension loaded.

```bash
cd ofl-vscode-language-support
code .
# Press F5 to run the extension
```

---

# Development

Current Goals:
- [x] Write simple grammar in tree-sitter
- [ ] Figure out node-tree-sitter to be able to use the grammar in JS
  - Problem: node-tree-sitter doesn't support the Fields API, which would make implementation tremendously more difficult
- [ ] Write simple tmLanguage file for VSCode

## Todo List

- [ ] Grammar
  - [x] Parser
  - [ ] Parser unit tests
  - [ ] Highlighter unit tests
- [ ] Interpreter
- [ ] VSCode Support
  - [ ] Syntax Highlighting
    - [x] [TextMate Grammar](ofl-vscode-language-support/syntaxes/ofl.tmLanguage.json)
    - [ ] [Language Configuration](ofl-vscode-language-support/language-configuration.json)
  - [ ] Language Server
- [ ] Intellij Support
  - [ ] Syntax Highlighting
  - [ ] Language Server
- [ ] Linter/Formatter
- [ ] CLI Tool

## Resources

- tree-sitter
  - https://tree-sitter.github.io/tree-sitter/creating-parsers
  - https://github.com/tree-sitter/tree-sitter-javascript/tree/master
- VSCode
  - https://code.visualstudio.com/api/get-started/your-first-extension
  - https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
