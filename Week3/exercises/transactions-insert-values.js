const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: '1234',
  database: 'meetup',
});

connection.connect();

const accountItems = [
    {account_number: 101, balance: 9972},
    {account_number: 102, balance: 7917},
    {account_number: 103, balance: 6508},
    {account_number: 104, balance: 5112},
    {account_number: 105, balance: 4469},
];

const accountChanges = [
    {change_number: 1, account_number: 101, amount: 563,changed_date: '2021-05-18', remark: 'done'},
    {change_number: 2, account_number: 102, amount: 200,changed_date: '2021-07-02', remark: 'done'},
    {change_number: 3, account_number: 103, amount: 440,changed_date: '2021-11-02', remark: 'done'},
    {change_number: 4, account_number: 104, amount: 300,changed_date: '2021-04-28', remark: 'done'},
    {change_number: 5, account_number: 105, amount: 200,changed_date: '2021-05-18', remark: 'done'},
    ]


for(let i = 0; i < 5; i++) {
    connection.query('INSERT INTO account SET ?', accountItems[i], function (error, results, fields) {
        if (error) throw error;
        // Neat!
        console.log(results)

    })};
for(let i = 0; i < 5; i++) {
    connection.query('INSERT INTO account_changes SET ?', accountChanges[i], function (error, results, fields) {
        if (error) throw error;
        // Neat!
        console.log(results)

    })};



connection.end();
