//3.1
var os = require('os');
const { username, homedir } = os.userInfo();
  console.log('Username:', username);
  console.log('Home Directory:', homedir);
  console.log('Operating System Platform:', os.platform());

//3.2
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const percentMemory = ((freeMemory*100)/totalMemory).toFixed(2);

console.log("Total System Memory : " + totalMemory);
console.log("Free Memory : " + freeMemory);
console.log("Percentage of Free Memory : " + percentMemory);