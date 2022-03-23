// require("dotenv").config();
const { createPool } = require("mysql");

// not secure yet, .env file not responding
const pool = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_MSSQL,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    connectionLimit: 100
});

pool.getConnection(function(err){
    if (err) throw err;
  console.log("Database Connected!");
});

module.exports = pool;

