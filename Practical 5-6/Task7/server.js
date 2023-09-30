const dotenv = require('dotenv');
const path = require('path');

// Determine the environment
const environment = process.env.NODE_ENV || 'development'; // Default to 'development'

// Load the appropriate .env file based on the environment
dotenv.config({
  path: path.join(__dirname, '../config/.env.' + environment)
});

// Access environment variables
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

console.log('Database Configuration:', dbConfig);

