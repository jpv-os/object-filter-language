Object Filter Language
===

A domain specific language for matching objects in JSON-like data structures.

---

## Installation

Requirements:
- [Node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Any C compiler
  - see: https://tree-sitter.github.io/tree-sitter/creating-parsers#dependencies

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

### Run example program

Use the interpreter to evaluate a file passed as argument.

```bash
SOURCE_FILE=example.ofl
node ofl-interpreter/main.js $SOURCE_FILE
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

- [ ] VSCode Support
  - [ ] Syntax Highlighting
    - [ ] [TextMate Grammar](ofl-vscode-language-support/syntaxes/ofl.tmLanguage.json)
      - JSON Grammar für Syntax Highlighting
      - Kann die irgendwie generiert werden? es wäre traumhaft, nur eine Single Source of Truth zu haben für die Grammatik
    - [ ] [Language Configuration](ofl-vscode-language-support/language-configuration.json)
      - Simple Editor Features wie Open/Close Brackets, Kommentare, etc.
      - 
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
