/**
 * @fileoverview Disallow using regular expression in the code. Typical use case if to have all regex defined in a single file and disable the rule or have all regex in an external library.
 * @author csp
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



