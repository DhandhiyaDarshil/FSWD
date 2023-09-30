const readline = require('readline');
const fs = require('fs');

// Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for employee information
rl.question('Enter employee name: ', (name) => {
  rl.question('Enter employee ID: ', (id) => {
    rl.question('Enter employee department: ', (department) => {
      // Create an object with the collected employee information
      const employee = {
        name: name,
        id: id,
        department: department,
      };

      // Convert the employee object to JSON format
      const jsonData = JSON.stringify(employee);

      // Write the JSON data to the file
      fs.writeFile('employee-data.json', jsonData, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          rl.close();
          return;
        }

        console.log('Employee data has been written to employee-data.json');
        rl.close();
      });
    });
  });
});


