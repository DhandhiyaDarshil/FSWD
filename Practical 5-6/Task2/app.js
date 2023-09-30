const express = require('express');
const Joi = require('joi'); // Import the Joi module
const app = express();
const port = 3000;

let data = [];

app.use(express.json());

// Define a schema for validation
const itemSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required() // Assuming a 10-digit phone number format
});

// Middleware function for validation
function validateItem(req, res, next) {
  const { error } = itemSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

app.post('/items', validateItem, (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.json(newItem);
});

app.get('/items', (req, res) => {
  res.json(data);
});

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

app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;

  if (data[itemId]) {
    data.splice(itemId, 1);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
