module.exports = {
  meta: {
    docs: {
      description:
        "No inline regex. Only export from a defined file. For allowed files disable the rule by /*eslint-disable code-struct/no-inline-regex*/",
    },
    schema: [
      {
        type: Object,
        properties: {
          allowedFilePaths: {
            type: "array",
            items: {
              type: "string",
            },
            minItems: 1,
          },
        },
        required: ["allowedFilePaths"],
      },
    ],
  },
  create(context) {
    return {
      Literal(node) {
        node.regex &&
          context.report({
            node,
            message: `Regex should only be declared in ${context.options[0].allowedFilePaths}`,
          });
      },
    };
  },
};
