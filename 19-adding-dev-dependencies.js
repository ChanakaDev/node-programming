/*

in order to add dev dependencies,
modify your 'npm i <packageName>' to 'npm i <packageName> -D' or 'npm i <packageName> --save-dev'

after running that command you can see as follows in your 'package.json'

  "devDependencies": {
    "nodemon": "^2.0.15"
  }

examples for dev dependencies
  (*) modules for linting (because after using, lingting module is useless)
  (*) nodemon module (we don't nee this ins production)
  (*) testing modules (inorder to test a new dependency, you can add it as dev dependency)

*/