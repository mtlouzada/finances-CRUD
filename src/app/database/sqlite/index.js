const sqlite3 = require("sqlite3");
const sqlite = require("sqilte");
const path = require("path");

async function sqliteConnnection() {
    const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
    });

    return database;
}

module.exports = sqliteConnnection;