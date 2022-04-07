// importing built-in modules
// we don't have to specify . and / here inside require
const os = require("os");

// using os module
// getting info about current user
const user = os.userInfo();
console.log(user);

// uptime of the system in seconds
console.log(`System uptime is: ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemo: os.totalmem(),
  freeMemo: os.freemem(),
};

console.log(currentOS);
