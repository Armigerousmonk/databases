const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : '1234',
  database : 'meetup'
});

connection.connect();
const authorTableQuery = "CREATE TABLE authors(author_no INT primary key, author_name Varchar(30), university Varchar(50),date_of_birth Date, h_index INT, gender ENUM('m','f'))"

connection.query(authorTableQuery, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
})

const newColumnAdd = 'ALTER TABLE authors ADD COLUMN mentor Varchar(30), ADD FOREIGN KEY fk_foreign_key(mentor) REFERENCES authors(author_no)'


connection.query(newColumnAdd, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
})
connection.end();