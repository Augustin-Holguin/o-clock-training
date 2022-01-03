const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.RT_DB_DB, process.env.RT_DB_USER, process.env.RT_DB_PASSWORD, {
    host: Number(process.env.RT_DB_HOST),
    dialect: 'postgres',
    define: {
        timestamps: false
    }
 });
 
 module.exports = sequelize;