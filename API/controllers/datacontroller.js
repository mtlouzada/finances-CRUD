const { create } = require("domain");
const dbConn = require("../database/dbConnection")
const db = dbConn();


exports.createTable = (req, res) => {
    try {
        db.exec(`CREATE TABLE usuarios
            (
              ID INTEGER PRIMARY KEY AUTOINCREMENT,
              nome   VARCHAR(50) NOT NULL,
              senha   VARCHAR(50) NOT NULL,
              saldo INTEGER NOT NULL
            );`
          );

    } catch (error) {
        console.warn("Tentando criar a tabela novamente. Implemente o IF TABLE EXIST");
    }
};

exports.createUser = (req, res) => {
    const { nome, senha, saldo } = req.body;
    try {
        const stmt = db.prepare("INSERT INTO usuarios (nome, senha, saldo) VALUES (?, ?, ?)");
        stmt.run(nome, senha, saldo, function(err) {
            if (err) {
                throw err;
            }
            console.log(`User inserted with ID: ${this.lastID}`);
            res.send(`User inserted with ID!`);
        });
        stmt.finalize();
    } catch (error) {
        console.error("Error inserting user:", error.message);
    }
};

exports.getAllData = (req, res) => {
    try {
        db.all("SELECT * FROM usuarios", (err, rows) => {
            if (err) {
                throw err;
            }
            console.log("Query Result:", rows);
            res.send(rows);
        });
    } catch (error) {
        console.error("Error executing SELECT query:", error.message);
    }
};

exports.updateData = (req, res) => {
    // const { id } = req.params;
    const { nome, senha, saldo } = req.body;
    try {
        const stmt = db.run('UPDATE usuarios SET nome = teste2, senha = 54321, saldo = 1000, WHERE id = 4')
        stmt.run(nome, senha, saldo, function(err) {
            if (err) {
                res.status(500).send(err.message);
                return;
            }
           /* if (this.changes === 0) {
                res.status(404).send('Registro não encontrado');
            } else {
                res.json({ updatedID: id });
            } */
        });
    } catch (error) {
        console.error("Error inserting user:", error.message);
    }
};

exports.deleteData = (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM usuarios WHERE id = ?', id, function(err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (this.changes === 0) {
            res.status(404).send('Registro não encontrado');
        } else {
            res.json({ deletedID: id });
        }
    });
};