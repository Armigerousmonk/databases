
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: '1234',
  database: 'meetup',
});

connection.connect();

const accountTableQuery = "CREATE TABLE account (account_number INT primary key, balance FLOAT)"
const account_changesTableQuery = "CREATE TABLE account_changes(change_number INT, account_number INT, amount FLOAT, changed_date DATE, remark Varchar(30))"

connection.query(accountTableQuery, function(error, results) {
    if (error) throw error;
    console.log(results);
});

connection.query(account_changesTableQuery, function(error, results) {
    if (error) throw error;
    console.log(results);
});

connection.end();

