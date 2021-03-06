const { Pool } = require('pg');
require('env2')('./config.env');

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) throw new Error('Error connecting to database');

const pool = new Pool({
  connectionString: dbUrl,
  ssl: true
});

module.exports = pool;
