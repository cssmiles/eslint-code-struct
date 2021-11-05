# eslint-plugin-code-utils

## Installation

```sh
$ npm install --save-dev eslint eslint-plugin-code-utils
```

## Setup

####code-struct/no-inline-regex  
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
    "code-struct/no-inline-regex": [
      "warn",
      { "allowedFilePaths": ["src/utils/regex.js"] }
    ]
  },
  "plugins": ["code-struct"]
}
```
