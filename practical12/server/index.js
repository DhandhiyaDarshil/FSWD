const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});