Object Filter Language
===

A domain specific language for matching objects in JSON-like data structures.

---

## Installation

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Any C compiler
  - see: https://tree-sitter.github.io/tree-sitter/creating-parsers#dependencies

### Build

First, build the tree-sitter grammar and generate tree-sitter bindings.

```bash
cd tree-sitter-object-filter-language
npm install
npm run generate
```

Next, build the interpreter program.

```bash
cd ofl-interpreter
npm install
```

The code snippets in this README use the tree-sitter CLI.
You may install tree-sitter globally on your machine by running:

```bash
npm install -g tree-sitter-cli
```

Alternatively, you can use the tree-sitter CLI from the locally installed `node_modules` or use to `npx`.

```bash
# using locally installed tree-sitter CLI
./tree-sitter-object-filter-language/node_modules/.bin/tree-sitter --help

# using npx
npx tree-sitter --help
```

### Local Configuration

For tree-sitter syntax highlighting to work on your system, 
you need to initialize the local tree-sitter configuration.

Set up your local tree-sitter configuration by running this command:

```bash
tree-sitter init-config
```

Expected Output:

```
Saved initial configuration to <PATH_TO_CONFIG>/tree-sitter/config.json
```

Now, add the following to your local tree-sitter configuration file `<PATH_TO_CONFIG>/tree-sitter/config.json`. 

```json
{
  "parser-directories": [
    // ...
    "<PATH_TO_THIS_REPOSITORY_ROOT>"
  ]
}
```

See https://tree-sitter.github.io/tree-sitter/syntax-highlighting#paths for more information about syntax highlighting configuration.

---

## Usage

### Run example program

Use the interpreter to evaluate a file passed as argument.

```bash
SOURCE_FILE=example.ofl
node ofl-interpreter/main.js $SOURCE_FILE
```

### Highlight example file

Use the tree-sitter CLI to highlight a file passed as argument.

```bash
tree-sitter highlight example.ofl
```

### Open VSCode with language support extension

Go to project root and open VSCode.
Then, press F5 to open another VSCode instance with the extension loaded.

```bash
cd ofl-vscode-language-support
code .
```

---

## Work in Progress

### Todo List

- [ ] README: modules in this repository
- [ ] VSCode Support
  - [ ] Syntax Highlighting
    - [ ] [TextMate Grammar](ofl-vscode-language-support/syntaxes/ofl.tmLanguage.json)
    - [ ] [Language Configuration](ofl-vscode-language-support/language-configuration.json)
  - [ ] Language Server
- [ ] Intellij Support
  - [ ] Syntax Highlighting
  - [ ] Language Server

### Resources

- tree-sitter
  - https://tree-sitter.github.io/tree-sitter/creating-parsers
  - https://github.com/tree-sitter/tree-sitter-javascript/tree/master
- VSCode
  - https://code.visualstudio.com/api/get-started/your-first-extension
  - https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
