const express = require('express');
const app = express();
const port = 3000;

// In-memory database
let data = [];

// Middleware to handle JSON request bodies
app.use(express.json());

// Routes

// Create operation
app.post('/items', (req, res) => {
  const newItem = req.body.name;
  console.log(newItem);
  console.log(data);
  data.push(newItem);
  res.json(newItem);
  res.send('Item added!')
});

// Read operation
app.get('/items', (req, res) => {
  res.json(data);
});

// Update operation
app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;

  if (data[itemId]) {
    data[itemId] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Delete operation
app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;

  if (data[itemId]) {
    data.splice(itemId, 1);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
