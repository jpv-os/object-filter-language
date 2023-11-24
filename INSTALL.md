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
