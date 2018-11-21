var mysql  = require('mysql');
//创建一个connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: '3306',
    database:'myapp-obj'
});

module.exports=connection;
