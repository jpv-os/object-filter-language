Object Filter Language
===

> A domain specific language for matching objects in JSON-like data structures.

---

# Development

Current Goals:
- [x] Write simple grammar in tree-sitter
- [ ] Figure out node-tree-sitter to be able to use the grammar in JS
  - Problem: node-tree-sitter doesn't support the Fields API, which would make implementation tremendously more difficult 
- [ ] Write simple tmLanguage file for VSCode
---

# Installation

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Any C compiler
  - see: https://tree-sitter.github.io/tree-sitter/creating-parsers#dependencies

## Build projects in this repository

First, build the tree-sitter grammar and generate tree-sitter bindings.

```bash
cd tree-sitter-object-filter-language
npm install
npm run generate
```

Next, build the CLI program.

```bash
cd ofl-cli
npm install
```

## Install tree-sitter

The code snippets in this README use the tree-sitter CLI.
You may install tree-sitter globally on your machine by running:

```bash
npm install -g tree-sitter-cli
tree-sitter --help
```

Alternatively, you can use the tree-sitter CLI from the locally installed `node_modules` or use `npx`.

```bash
# using locally installed tree-sitter CLI
./tree-sitter-object-filter-language/node_modules/.bin/tree-sitter --help
```

```bash
# using npx
npx tree-sitter --help
```

For tree-sitter syntax highlighting to work on your system, 
you need to initialize the local tree-sitter configuration.

Set up your local tree-sitter configuration by running this command:

```bash
tree-sitter init-config
# Expected output:
# Saved initial configuration to <PATH_TO_CONFIG>/tree-sitter/config.json
```

Now, add the following to your local tree-sitter configuration file `<PATH_TO_CONFIG>/tree-sitter/config.json`. 
Doing so registers the `tree-sitter-object-filter-language` parser with the local tree-sitter CLI
and enables syntax highlighting for files with the `.ofl` extension.

```
{
  "parser-directories": [
    // ...
    "<PATH_TO_THIS_REPOSITORY_ROOT>"
  ],
  // ...
}
```

See https://tree-sitter.github.io/tree-sitter/syntax-highlighting#paths for more information about syntax highlighting configuration.

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
Then, press F5 to open another VSCode instance with the extension loaded.

```bash
cd ofl-vscode-language-support
code .
```

---

# Work in Progress

## Todo List

- [ ] README: modules in this repository
- [ ] Grammar
  - [ ] Parser unit tests
  - [ ] Highlighter unit tests
- [ ] VSCode Support
  - [ ] Syntax Highlighting
    - [ ] [TextMate Grammar](ofl-vscode-language-support/syntaxes/ofl.tmLanguage.json)
    - [ ] [Language Configuration](ofl-vscode-language-support/language-configuration.json)
  - [ ] Language Server
- [ ] Intellij Support
  - [ ] Syntax Highlighting
  - [ ] Language Server

## Resources

- tree-sitter
  - https://tree-sitter.github.io/tree-sitter/creating-parsers
  - https://github.com/tree-sitter/tree-sitter-javascript/tree/master
- VSCode
  - https://code.visualstudio.com/api/get-started/your-first-extension
  - https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
