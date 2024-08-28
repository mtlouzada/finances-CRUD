const express = require("express");
const path = require("path");
const router = require("./routes/dataRoutes.js")
const dbConn = require("./database/dbConnection.js")
const bodyParser = require("body-parser")

const db = dbConn();

var app = express();
app.use(bodyParser.json());
app.use(router);

const PORT = 3015;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});