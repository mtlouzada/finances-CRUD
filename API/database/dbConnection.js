// const sqlite = require("sqlite3");
const sqlite3 = require("sqlite3");
const path = require("path");

function createDbConnection() {
    var filepath = "./database/finance.db";
    filepath = path.resolve(__dirname, "..", filepath);

  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
  });
  console.log("Connection with SQLite has been established");
  return db;
}

module.exports = createDbConnection;

/*
// const sqlite = require("sqlite");
const path = require("path");

async function sqliteConnnection() {
    const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite.Database
    });

    return database;
}

module.exports = sqliteConnnection;

*/