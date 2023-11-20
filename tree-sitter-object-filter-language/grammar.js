module.exports = grammar({
  name: 'ObjectFilterLanguage',
  rules: {
    condition: $ => seq($.identifier, $.operator, $.number),
    identifier: $ => /[a-zA-Z][a-zA-Z0-9_]*/,
    operator: $ => "=",
    number: $ => /\d+/,
    comment: $ => token(seq("#", /.*/)),
  }
});
