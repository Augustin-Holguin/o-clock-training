const movies = require('../../data/movies.json');
const genreController = require('./genreController.js');

const mainController = {
    homePage: (req, res) => {
        const uniqueGenre = genreController.variousGenre();

        res.render('index', { movies, uniqueGenre });
    }
}

module.exports = mainController;