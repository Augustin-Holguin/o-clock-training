// require Postgres
const pg = require('pg');

const client = new pg.Client({
    user: process.env.RT_DB_USER,
    password: process.env.RT_DB_PASSWORD,
    database: process.env.RT_DB_DB,
    host: Number(process.env.RT_DB_HOST),
    port: Number(process.env.RT_DB_PORT)  
});

// connect client to database
client.connect();

module.exports = client;