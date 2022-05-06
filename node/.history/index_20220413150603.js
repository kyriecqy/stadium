const express = require('express')

const app = express()

const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})

db.connect((err) => {
  if(err) return console.log('ERROR: '+err);

  console.log('mysql connect success');
})

app.get('/', (req, res) => {
  res.send({ status: 0, msg: 'success'})
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`express server running at ${port}`);
})