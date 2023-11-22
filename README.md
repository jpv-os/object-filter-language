Object Filter Language
===

#### Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Requirements:
- [Node.js](https://nodejs.org/en/)
- Any C compiler
  - see: https://tree-sitter.github.io/tree-sitter/creating-parsers#dependencies

Install dependencies and 
```bash
# Build tree sitter grammar and generate tree sitter bindings
(
  cd tree-sitter-object-filter-language
  npm install
)

# Build ofl-interpreter
(
  cd ofl-interpreter
  npm install
)
```

## Usage

#### Run example program

```bash
SOURCE_FILE=example.ofl
node ofl-interpreter/main.js $SOURCE_FILE
```

## Roadmap

- [ ] VSCode Support
  - [ ] Syntax Highlighting
  - [ ] Language Server
- [ ] Intellij Support
  - [ ] Syntax Highlighting
  - [ ] Language Server

## Resources

- https://tree-sitter.github.io/tree-sitter/creating-parsers
- https://github.com/tree-sitter/tree-sitter-javascript/tree/master

