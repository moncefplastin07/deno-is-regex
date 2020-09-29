# is RegEx
RegExp patterns validator .. check if the inputed regex is valid
### import the module in your deno app
```js
import { is_regex } from 'https://deno.land/x/is_regex@v1.0.0/mod.ts'
```
or from ``nest.land`` packages
```js
import { is_regex } from 'https://x.nest.land/is_regex@v1.0.0/mod.ts'
```
#### Usage:
Pass the string of user agent from request headers as argument 
```js
// from RegExp line
console.log(isRegEx(/moncef/g))                     //=> true

// from RegExp object
console.log(isRegEx(new RegExp('moncef', 'g')))     //=> true

// from string
console.log(isRegEx('/moncef/g'))                   //=> true

// from RegExp line
console.log(isRegEx(123))                           //=> false

// from RegExp object
console.log(isRegEx(null))                          //=> false

// from string  
console.log(isRegEx({}))                            //=> false

```
### For testing run this in commend line 
```bash
deno run  https://deno.land/x/is_regex@v1.0.0/test.ts
```
## Contribute with us from [``Here``](https://github.com/moncefplastin07/deno-is-regex)