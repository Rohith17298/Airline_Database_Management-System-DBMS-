const mysql = require("mysql");
const Connection = require("mysql2/typings/mysql/lib/Connection");

const dbConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "rahul123",
  database: "internetairline",
});

dbConnection.connect((err) => {
  if (err) {
    console.log("error", err);
    throw err;
  }
  console.log("Database connection established!");
});

module.exports = dbConnection;
