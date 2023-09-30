function displayEnvironmentVariable(variableName) {
    if (process.env.hasOwnProperty(variableName)) {
      console.log(`${variableName}: ${process.env[variableName]}`);
    } else {
      console.log(`Environment variable "${variableName}" not found.`);
    }
  }
  
  // Call the function with the desired environment variable name
  const variableName = 'PATH'; // Replace with the desired variable name
  displayEnvironmentVariable(variableName);
  