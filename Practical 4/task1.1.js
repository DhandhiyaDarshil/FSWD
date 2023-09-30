const readline = require('readline');
const url = require('url');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to parse and display URL components
function parseURL(inputURL) {
  const parsedURL = url.parse(inputURL, true);

  console.log('This is Protocol of your URL:', parsedURL.protocol);
console.log('This is Host of your URL:', parsedURL.host);
  console.log('This is Path of your URL :', parsedURL.pathname);
  console.log('This is Query Parameters of your URL :', parsedURL.query);
}

// Ask user for input URL
rl.question('Enter the URL to parse: ', (inputURL) => {
  parseURL(inputURL);

  // Close the readline interface
  rl.close();
});
