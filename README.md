# eslint-plugin-code-struct

## Installation

```sh
$ npm install @codeutils/eslint-plugin-code-struct
```

## Setup

#### code-struct/no-inline-regex

To restrict use of direct regex statements in the code. Only export from a defined file(s) `allowedFilePaths`.  
To disable the rule for file - `/*eslint-disable code-struct/no-inline-regex*/`.  
Example eslint configs:

```json
{
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "@codeutils/code-struct/no-regex": [
      "warn",
      { "customMessage": "All regex should be kept in src/util/regex.js" }
    ]
  },
  "plugins": ["@codeutils/code-struct"]
}

For TypeScript

{
  "parser": "@typescript-eslint/parser",
   "rules": {
    "@codeutils/code-struct/no-regex": [
      "warn",
      { "customMessage": "All regex should be kept in src/util/regex.js" }
    ]
   },
  "plugins": ["@typescript-eslint", "@codeutils/code-struct"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
}


```
