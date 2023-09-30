const path = require('path');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to extract file extension from the file path
function extractFileExtension(filePath) {
  const extension = path.extname(filePath);
  return extension ? extension.slice(1) : '';
}

// Ask user for input file path
rl.question('Enter the file path: ', (filePath) => {
  const fileExtension = extractFileExtension(filePath);
  if (fileExtension) {
    console.log('Extracted file extension:', fileExtension);
  } else {
    console.log('No file extension found in the path.');
  }

  // Close the readline interface
  rl.close();
});

