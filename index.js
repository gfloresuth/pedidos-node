var express = require('express');
var app = express();
const port = 8000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/pedido', (req, res) => {
  res.send('You are trying to making a pedido');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port} !`);
});
