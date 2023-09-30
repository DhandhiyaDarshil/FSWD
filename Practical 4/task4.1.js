const path = require('path');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to extract directory name and base name from the file path
function extractDirectoryAndBaseName(filePath) {
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);
  return { directoryName, baseName };
}

// Ask user for input file path
rl.question('Enter the file path: ', (filePath) => {
    const { directoryName, baseName } = extractDirectoryAndBaseName(filePath);
    console.log('Directory Name:', directoryName);
    console.log('Base Name:', baseName);
  
    // Close the readline interface
    rl.close();
  });
  
  