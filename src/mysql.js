const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  passward: '83492761',
  database: 'codeText'
})

connection.query(
    'SELECT * FROM /**/ WHERE textLsit'

)


const arr = new Array('SELECT COUNT(id) FROM /**/' );
const a = Math.random()*arr.length;