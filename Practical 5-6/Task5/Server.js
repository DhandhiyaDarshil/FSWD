const os = require('os');

// Get all environment variables as an object
const environmentVariables = process.env;

console.log('Environment Variables:');
console.log('----------------------');

// Display each environment variable and its value
for (const key in environmentVariables) {
  console.log(`${key}: ${environmentVariables[key]}`);
}
