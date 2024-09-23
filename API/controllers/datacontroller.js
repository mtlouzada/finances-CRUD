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

exports.readData = (req, res) => {
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
    const { id, nome, senha, saldo } = req.body;
    try {
        let sql = 'UPDATE usuarios SET nome="?", senha="?" WHERE id=?';
        sql = `UPDATE usuarios SET nome="${nome}", senha="${senha}", saldo="${saldo}" WHERE id=${id};`;

        console.warn(sql)
        db.run(sql, function(err) {
                if (err) {
                    console.error(err.message);
                    res.send(err.message);
                }
                console.log(`Row(s) updated: ${this.changes}`)
                res.send(`Row(s) updated: ${this.changes}`);
            }
        );

    } catch (error) {
        console.error("Error update user:", error.message);
    }
};


exports.deleteData = (req, res) => {
    const { id } = req.params;
    try {
        let sql = 'DELETE FROM usuarios WHERE id="?"';
        sql = `DELETE FROM usuarios WHERE id="${id}"`;

        db.run(sql, function(err) {
            if (err) {
                res.status(500).send(err.message);
                return;
            }
            console.log(`Row(s) deleted: ${this.changes}`)
            res.send(`Row(s) deleted: ${this.changes}`);
        });
    } catch (error) {
        console.error("Error delete user:", error.message);
    }
};