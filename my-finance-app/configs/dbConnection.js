const mysql = require('mysql');

    module.export = function(app) {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Db1234 ',
            database : 'portal_noticias',
        });
    };