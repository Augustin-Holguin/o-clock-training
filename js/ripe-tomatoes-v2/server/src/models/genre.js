const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Genre extends Model {};

Genre.init({
    genre_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'genre'
});

module.exports = Genre;