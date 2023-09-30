const fs = require('fs');

function compareFiles(file1, file2) {
  try {
    const data1 = fs.readFileSync(file1, 'utf8');
    const data2 = fs.readFileSync(file2, 'utf8');

    const lines1 = data1.split('\n');
    const lines2 = data2.split('\n');

    const file1Size = lines1.length;
    const file2Size = lines2.length;

    console.log(`File 1 (${file1}) size: ${file1Size} lines`);
    console.log(`File 2 (${file2}) size: ${file2Size} lines`);

    if (file1Size > file2Size) {
      console.log(`File 1 (${file1}) is larger than File 2 (${file2})`);
    } else if (file1Size < file2Size) {
      console.log(`File 2 (${file2}) is larger than File 1 (${file1})`);
    } else {
      console.log('Both files have the same number of lines');
    }

    console.log('\nLines with differences:');
    for (let i = 0; i < Math.min(lines1.length, lines2.length); i++) {
      if (lines1[i] !== lines2[i]) {
        console.log(`Line ${i + 1}:`);
        console.log(`   ${file1}: ${lines1[i]}`);
        console.log(`   ${file2}: ${lines2[i]}`);
        console.log('-----------------------');
      }
    }
  } catch (err) {
    console.error('Error reading the files:', err);
  }
}