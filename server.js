const express = require('express');
const _ = require('lodash');

const app = express();

const greetings = [
  'hello',
  'hi',
  'good morning',
  'good evening',
  'good afternoon',
  'good night',
];

app.get('/greeting', (req, res) => {
  res.send(_.sample(greetings));
});

app.listen(5678, () => {
  console.log('Server listening on port 5678');
});
