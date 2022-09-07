'use strict';

const express = require('express');
require('dotenv').config;
const app = express();
const middlewares = require('./middlewares/validate-number')
const err_500 = require('./error-handlers/500')

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('hello world');
})

app.get('/square', middlewares(), (req, res) => {
  const result = req.query.num
  req.num = + result * result;

  const data = req.num


  res.status(200).send({ data })
})

app.use(err_500);



function start(port) {
  app.listen(3000, () => console.log(`server running in port is ${port}`));
}

module.exports = {
  app: app,
  start: start
}