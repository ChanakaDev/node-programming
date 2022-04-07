// here we import(require) and use the objects of names which we have exported in 2-names.js file
// for that we use 'require' and accesing objects
// remember to start path names in require with . and / (to separate developer defined modules from inbuilt modules)
// no need to type .js in end of the imports

// (1) importing the object of variables
const names = require("./1-inputs");

// (2) importing the function
// Even if you see this as a variable at the first glance, JS wrap this as a fnction and sends to us :)
const sayAyubowan = require("./2-processes");

// aceess imports (object.variable)
sayAyubowan(names.kasun);
sayAyubowan(names.kamal);
