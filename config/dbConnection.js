const mysql = require('mysql');

let connectToMySQL = function() {
  console.log('Database connected.');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'projeto_ford'
  });
}

module.exports = function() {
  console.log('connetion module loaded.');
  return connectToMySQL;
}
