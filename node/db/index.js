const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'admin123',
  database: 'stadium'
})

db.connect((err) => {
  if(err) return console.log('ERROR: '+err);

  console.log('mysql connect success');
})

module.exports = db