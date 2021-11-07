/**
 * @fileoverview Disallow using regular expression in the code. Typical use case if to have all regex defin
 * @author csp
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: `problem`, // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        "Disallow using regular expression in the code. Typical use case if to have all regex defined in a single file and disable the rule or have all regex in an external library.",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: "object",
        properties: {
          customMessage: {
            type: "string",
            description:
              "Provide details for where all Regex statements should be kept",
          },
        },
        required: ["customMessage"],
      },
    ],
  },

  create(context) {
    return {
      Literal(node) {
        node.regex &&
          context.report({
            node,
            message: `${context.options[0].customMessage}`,
          });
      },
    };
  },
};
/*
    schema: {
      type: "object",
      properties: {
        customMessage: {
          type: "string",
          description:
            "Provide details for where all Regex statements should be kept",
        },
      },
      required: ["customMessage"],
    },*/
