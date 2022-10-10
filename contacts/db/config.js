require('dotenv').config();
const DB_CONFIG = process.env.DBCONFIG;
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }