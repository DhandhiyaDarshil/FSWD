const fs = require('fs');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a file path exists
function checkFileExistence(filePath) {
    if (fs.existsSync(filePath)) {
      console.log('File exists: Success');
    } else {
      console.log('File does not exist: Error file not found');
    }
  }
  
  // Ask user for input file path
  rl.question('Enter the file path: ', (filePath) => {
    checkFileExistence(filePath);
  
    // Close the readline interface
    rl.close();
  });
  
  