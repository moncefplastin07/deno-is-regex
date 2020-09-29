import { isRegEx } from "./mod.ts";

// from RegExp line
console.log(isRegEx(/moncef/g)); //=> true

// from RegExp object
console.log(isRegEx(new RegExp("moncef", "g"))); //=> true

// from string
console.log(isRegEx("/moncef/g")); //=> true

// from RegExp line
console.log(isRegEx(123)); //=> false

// from RegExp object
console.log(isRegEx(null)); //=> false

// from string
console.log(isRegEx({})); //=> false
