const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Movie extends Model {};

Movie.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cover: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    released: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'movie'
});

module.exports = Movie;