const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    database: 'tickets',
    user: 'root',
    password: ''
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Db conectada')
    }
})

module.exports = mysqlConnection;
