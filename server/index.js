const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

const USERS_FILE = path.join(__dirname, '../DB/users.json');

app.use(cors());
app.use(bodyParser.json());

function readUsers() {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.get('/api/users', (req, res) => {
  res.json(readUsers());
});

app.post('/api/users', (req, res) => {
  const users = readUsers();
  const newUser = {
    ...req.body,
    id: Date.now()
  };
  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const users = readUsers();
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).send('Usuario no encontrado');
  }

  users[index] = { ...users[index], ...req.body };
  saveUsers(users);
  res.json(users[index]);
});

app.delete('/api/users/:id', (req, res) => {
  const users = readUsers();
  const userId = parseInt(req.params.id);
  const newUsers = users.filter(u => u.id !== userId);

  if (users.length === newUsers.length) {
    return res.status(404).send('Usuario no encontrado');
  }

  saveUsers(newUsers);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});
