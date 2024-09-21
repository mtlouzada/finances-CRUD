const sqlite3 = require("sqlite3");
const path = require("path");

let dbInstance = null;

function createDbConnection() {
  if (dbInstance) {
    return dbInstance;
  }

  var filepath = "./database/finance.db";
  filepath = path.resolve(__dirname, "..", filepath);

  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    console.log("Connection with SQLite has been established");
  });
  
  dbInstance = db
  return db;
}

module.exports = createDbConnection;