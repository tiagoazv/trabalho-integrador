const pgp = require('pg-promise')();
const db = pgp({
  user: 'postgres',
  host: 'localhost',
  database: 'bse',
  password: 'postgres',
  port: 5432
});

module.exports = db;