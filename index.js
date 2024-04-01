const express = require('express');
const serverPort = 8000;
const app = express();
app.use(express.json());

let todos = [
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

// app.put('/todos/:id/', (req, res) => {
//   const newTodoDescription = req.query.description;
//   console.log(newTodoDescription);
//   const id = req.params.id;
//   console.log('id = ', id);
//   const newArray = todos.map(item => {
//     if (item.id == id) {
//       item.todo = newTodoDescription;
//       return req.body;
//     } else {
//       return item;
//     }
//   });

//   console.log(newArray);
//   items = newArray;
//   res.send(req.body);
// });

app.put('/todos', (req, res) => {
  const newArray = todos.map(item => {
    if (item.id == req.body.id) {
      item.todo = req.body.todo;
      return req.body;
    }
    return item;
  });

  items = newArray;
  res.send(req.body);
});

app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  const newId = todos[todos.length - 1].id + 1;

  todos.push({ id: newId, todo: todo });
  res.send(req.body);
});

app.delete('/todos/:id', (req, res) => {
  let filteredArray = todos.filter(item => item.id !== +req.params.id);
  todos = filteredArray;
  res.sendStatus(204);
});

app.get('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

app.listen(serverPort, () => console.log('Express server is running'));
