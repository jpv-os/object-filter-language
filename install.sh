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

# Run example program
node ofl-interpreter/main.js
