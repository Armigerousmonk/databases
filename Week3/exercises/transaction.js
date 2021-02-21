const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: '1234',
  database: 'meetup',
});

connection.connect();

const addBalance = `BEGIN transaction
    UPDATE account
    SET balance = balance - 1000
    WHERE account_number = 101;

    UPDATE account
    SET balance = balance + 1000
    WHERE account_number = 102;

    COMMIT;

`

connection.query(addBalance, function (error, results) {
    if (error) throw error;
    console.log(results);
})


connection.end();