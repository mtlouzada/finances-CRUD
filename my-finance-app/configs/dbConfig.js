const mysql = require('mysql');

    module.export = function(app) {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'teste123',
            database : 'portal_noticias',
        });
    };