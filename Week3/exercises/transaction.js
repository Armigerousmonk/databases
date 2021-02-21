const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: '1234',
  database: 'meetup',
});

connection.connect();

connection.query('START transaction;', function(error, results) {
    if (error) throw error;
})

connection.query( `UPDATE account SET balance = balance - 1000 WHERE account_number = 101;`, function (error, results) {
    if (error) throw error;
    console.log(results);
});
connection.query( `UPDATE account SET balance = balance + 1000 WHERE account_number = 103;`, function (error, results) {
    if (error) throw error;
    console.log(results);
});
connection.query( 'commit;', function (error, results) {
    if (error) throw error;
    console.log(results);
});

connection.query(`INSERT INTO account_changes(change_number, account_number, amount, changed_date, remark)
    VALUES
    (6, 102, 1000, '2021-02-21', '$1000 transferred from 101')
`)

connection.end();