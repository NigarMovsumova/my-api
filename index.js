const express = require('express');
const serverPort = 8000;
const app = express();

const todos = [
  { id: 1, todo: 'Wash dishes' },
  { id: 2, todo: 'Walk dog' },
  { id: 3, todo: 'Fix computer' },
];

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.get('/todos/:id', (req, res) => {
  const parsedToDoId = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === parsedToDoId);
  if (todo) {
    res.send(todo);
  } else {
    res.sendStatus(404);
  }
});

app.get('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

app.listen(serverPort, () => console.log('Express server is running'));
