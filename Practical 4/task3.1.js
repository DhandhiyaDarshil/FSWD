const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if two file paths refer to the same file
function arePathsSameFile(path1, path2) {
  const absolutePath1 = path.resolve(path1);
  const absolutePath2 = path.resolve(path2);

  try {
    const stats1 = fs.statSync(absolutePath1);
    const stats2 = fs.statSync(absolutePath2);

    return stats1.dev === stats2.dev && stats1.ino === stats2.ino;
  } catch (error) {
    return false;
  }
}

// Ask user for input file paths
rl.question('Enter the first file path: ', (filePath1) => {
  rl.question('Enter the second file path: ', (filePath2) => {
    const pathsAreSame = arePathsSameFile(filePath1, filePath2);
    console.log('The paths refer to the same file:', pathsAreSame);

    // Close the readline interface
    rl.close();
  });
});

