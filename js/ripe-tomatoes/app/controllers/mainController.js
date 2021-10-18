const movies = require('../../data/movies.json');
const genreController = require('./genreController.js');
const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (req, res) => {
        const uniqueGenre = genreController.variousGenre();

        const testDb = dataMapper.testQuery();
        console.log(testDb);

        res.render('index', { movies, uniqueGenre });
    }
}

module.exports = mainController;