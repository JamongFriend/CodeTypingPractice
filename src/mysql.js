const mysql = require('mysql');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  passward: '83492761',
  database: 'codeText'
})

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();