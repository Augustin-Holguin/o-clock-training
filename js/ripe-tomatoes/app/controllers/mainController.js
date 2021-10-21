const genreController = require('./genreController.js');
const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (req, res) => {
        const uniqueGenre = genreController.variousGenre();
        // calling datamapper to get all movies and render it to the main view index
        dataMapper.getAllMovies((err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.render('index', {
                    movies: results,
                    uniqueGenre
                })
            }
        });
    }
}

module.exports = mainController;