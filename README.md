# eslint-plugin-code-struct

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

```sh
$ npm i @codeutils/eslint-plugin-code-struct
```

## Usage

#### code-struct/no-regex

Disallow using regular expression in the code. Typical use case if to have all regex defined in a single file and disable the rule or have all regex in an external library.  
To disable the rule for file - `/*eslint-disable code-struct/no-regex*/`.

Install `eslint-plugin-no-regex`:

```sh
npm i eslint-plugin-no-regex --save-dev
```

Add `no-regex` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.
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

//For TypeScript

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
