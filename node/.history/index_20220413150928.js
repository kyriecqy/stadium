const express = require('express')

const app = express()

const db = require('./db/index')

app.get('/', (req, res) => {
  res.send({ status: 0, msg: 'success'})
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`express server running at ${port}`);
})