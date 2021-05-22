let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat-sesion'
});

connection.connect(
    (err) => {
        if(err){
            console.log(err); 
            return;
        }else{
            console.log('BD esta conectada');
        }
    }
);

module.exports = connection;