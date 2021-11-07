/**
 * @fileoverview Disallow using regular expression in the code. Typical use case if to have all regex defin
 * @author csp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-regex"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
// eslint-disable-next-line no-unused-vars
const ValidChars = /[A-Z]/;
ruleTester.run("no-regex", rule, {
  valid: ["var validchars = ValidChars;"],

  invalid: [
    {
      code: "var validchars = /[A-Z]/",
      options: [
        {
          customMessage:
            "All regex should be defined in src/utils/regex.js only",
        },
      ],
      errors: [
        {
          message: "All regex should be defined in src/utils/regex.js only",
        },
      ],
    },
  ],
});
