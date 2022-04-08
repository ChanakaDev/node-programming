/*

(*) when you installed a npm package
    for example 'npm i lodash', it will add a record under dependencies in package.json as follows.

"dependencies": {
    "lodash": "^4.17.21"
  }

(*) then it add a folder related to that module in the 'node_modules' folder.
(*) after that it also add a file called 'package-lock.json' to keep full descriptions about the packages.

(*) some packages have dependencies and some are not

*/

// before import, you have to install the dependency using 'npm i <packageName>'
// we use this molude only for demonstration
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);

console.log(newItems); // [ 1, 2, 3, 4 ]