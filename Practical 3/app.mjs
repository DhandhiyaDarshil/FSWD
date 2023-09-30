// // app.js
// const Task3 = require('./Task3');
// const number1 = 5;
// const number2 = 9;
// const result = Task3(number1, number2);

// console.log(`The Multiplication of ${number1} and ${number2} is ${result}.`);




// app.js
import { Task3 } from './Task3.mjs'; // The correct path to the 'square' module.

const number = 5;
const result = Task3(number);

console.log(`The square of ${number} is ${result}.`);
