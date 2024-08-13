const mysql = require('mysql');

    module.export = function(app) {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias',
        });
    }; 