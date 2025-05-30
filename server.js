const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(__dirname, 'views/index.html');
});

app.get('/sobre', (req, res) => {
  res.sendFile(__dirname, 'views/sobre.html');
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
