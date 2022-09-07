'use strict';

const express = require('express');
const app = express();
const middlewares_user = require('./middlewares/validate-number')
const err_500 = require('./error-handlers/500')
var cors = require('cors')

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('hello world');
})

app.get('/square', middlewares_user(), (req, res) => {
  const result = req.query.num
  const req_num = + result * result

  const data = req_num


  res.status(200).send({ data })
})

app.use(err_500);



function start(port) {
  app.listen(port, () => console.log(`server running in port is ${port}`));
}

module.exports = {
  app: app,
  start: start
}