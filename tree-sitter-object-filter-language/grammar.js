// TODO: use fields to keep the tree flat - HOWEVER: tree-sitter Parser on node doesnt support fields?
module.exports = grammar({
  name: "ObjectFilterLanguage",
  rules: {
    source: $ => seq(
      field("model_definitions", repeat($.model_definition)),
      field("filter", $.filter)
    ),
    model_definition: $ => seq(
      $.model_name,
      $.open_brace,
      $.model_properties,
      $.close_brace
    ),
    model_name: $ => /[A-Z][a-zA-Z0-9_]*/,
    model_properties: $ => repeat1($.property_definition),
    property_definition: $ => seq($.property_name, $.property_type),
    property_name: $ => /[a-zA-Z][a-zA-Z0-9_]*/,
    property_type: $ => choice(
      $.field_type,
      $.relation_type
    ),
    field_type: $ => choice(
      "string",
      "number",
      "boolean",
      "date"
    ),
    relation_type: $ => seq(
      "relation",
      $.model_name,
      $.cardinality,
      $.to_keyword,
      $.cardinality
    ),


    filter: $ => seq(
      $.filter_keyword,
      field("target", $.filter_target),
      field("definition", $.filter_definition)
    ),
    filter_keyword: $ => "filter:",
    filter_target: $ => $.model_name,
    filter_definition: $ => $.expression,
    expression: $ => choice(
      $.primary_expression,
      $.unary_expression,
      $.binary_expression
    ),
    primary_expression: $ => choice(
      seq($.open_paren, $.expression, $.close_paren),
      $.condition
    ),
    unary_expression: $ => seq($.logical_not, $.expression),
    binary_expression: $ => choice(
      prec.left(2, seq($.expression, $.logical_and, $.expression)),
      prec.left(1, seq($.expression, $.logical_or, $.expression))
    ),
    condition: $ => seq(
      $.property_path,
      $.binary_operator,
      choice(
        $.number,
        $.date,
        $.boolean,
        $.string
      )
    ),
    property_path: $ => seq(
      $.property_name,
      repeat(seq($.dot, $.property_name))
    ),


    binary_operator: $ => choice("=", "!=", "<", ">", "<=", ">="),
    logical_and: $ => choice("and", "&&"),
    logical_or: $ => choice("or", "||"),
    logical_not: $ => choice("not"),
    number: $ => /\d+/,
    boolean: $ => choice("true", "false"),
    date: $ => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/,
    string: $ => /"[^"]*"/,
    dot: $ => ".",
    cardinality: $ => choice("one", "many"),
    to_keyword: $ => "to",
    open_brace: $ => "{",
    close_brace: $ => "}",
    open_paren: $ => "(",
    close_paren: $ => ")",
    _whitespace: $ => /\s+/,

    comment: $ => /#.*\n/,
  },
  extras: $ => [
    $._whitespace,
    $.comment
  ]
});
