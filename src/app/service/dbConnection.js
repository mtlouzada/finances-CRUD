const mysql = require('mysql');

    module.exports = function(app) {
        return mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'portal_noticias',
        });

    };