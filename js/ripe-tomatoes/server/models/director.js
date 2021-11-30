const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Director extends Model {};

Director.init({
    director_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'director'
});

module.exports = Director;