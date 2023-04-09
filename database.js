const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "santy",
  password: "root",
});
module.exports = db;
