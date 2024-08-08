const dbConnection = require('../service/registro.js');

//testar conexão do db

module.exports = function(app){

    var connection = dbConnection();

    app.get('/noticias', function(req, res){
        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    });
}