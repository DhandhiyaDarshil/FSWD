const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const dataFile = 'todos.json';

// Read todos from JSON file
function readTodos() {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Write todos to JSON file
function writeTodos(todos) {
  fs.writeFileSync(dataFile, JSON.stringify(todos), 'utf8');
}

// Get all todos
app.get('/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  const todos = readTodos();
  const newTodo = { id: Date.now().toString(), text };
  todos.push(newTodo);
  writeTodos(todos);
  res.json(newTodo);
});

// Update a todo by ID
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const todos = readTodos();
  const updatedTodoIndex = todos.findIndex((todo) => todo.id === id);
  if (updatedTodoIndex !== -1) {
    todos[updatedTodoIndex].text = text;
    writeTodos(todos);
    res.json(todos[updatedTodoIndex]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todos = readTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  if (todos.length !== updatedTodos.length) {
    writeTodos(updatedTodos);
    res.json({ message: 'Todo deleted' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
