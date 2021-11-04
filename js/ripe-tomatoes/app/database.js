// requiring sequelize
const { Sequelize } = require('sequelize');
// connecting to db
const sequelize = new Sequelize(process.env.RT_DB_DB, process.env.RT_DB_USER, process.env.RT_DB_PASSWORD, {
   host: Number(process.env.RT_DB_HOST),
   dialect: 'postgres',
   define: {
       timestamps: false
   }
});

module.exports = sequelize;

// OLD WAY querying directly with postgres
// require Postgres
// const pg = require('pg');

// const client = new pg.Client({
//     user: process.env.RT_DB_USER,
//     password: process.env.RT_DB_PASSWORD,
//     database: process.env.RT_DB_DB,
//     host: Number(process.env.RT_DB_HOST),
//     port: Number(process.env.RT_DB_PORT)  
// });

// connect client to database
// client.connect();

// module.exports = client;

