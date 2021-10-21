// const genreController = require('./genreController.js');
const dataMapper = require('../dataMapper');

const mainController = {
    homePage: (req, res) => {
        let distinctGenre = undefined;

        dataMapper.getAllGenre((err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                distinctGenre = results;
            }
        });
        
        // calling datamapper to get all movies and render it to the main view index
        dataMapper.getAllMovies((err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.render('index', {
                    movies: results,
                    distinctGenre
                })
            }
        });
    }
}

module.exports = mainController;