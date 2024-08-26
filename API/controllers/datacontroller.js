const { create } = require("domain");
const sqliteConnnection = require("../database/dbConnection.js");

// create table if no exist

exports.createData = (req, res) => {
    const { campo1, campo2 } = req.body;
    sqliteConnnection.run('INSERT INTO usuarios (campo1, campo2) VALUES (?, ?)', [campo1, campo2], function(err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json({ id: this.lastID });
    });
};

exports.getAllData = (req, res) => {
    sqliteConnnection.all('SELECT * FROM usuarios', [], (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.json(rows);
    });
};

exports.updateData = (req, res) => {
    const { id } = req.params;
    const { campo1, campo2 } = req.body;
    sqliteConnnection.run('UPDATE usuarios SET campo1 = ?, campo2 = ? WHERE id = ?', [campo1, campo2, id], function(err) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        if (this.changes === 0) {
            res.status(404).send('Registro não encontrado');
        } else {
            res.json({ updatedID: id });
        }
    });
};

exports.deleteData = (req, res) => {
    const { id } = req.params;
    sqliteConnnection.run('DELETE FROM usuarios WHERE id = ?', id, function(err) {
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