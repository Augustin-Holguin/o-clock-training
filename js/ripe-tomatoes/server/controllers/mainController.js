const { Movie, Genre } = require('../models');

const mainController = {
    homePage: async function(req, res) {
        try {
            // fetching all movies and genres before rendering homepage
            const movies = await Movie.findAll();
            const distinctGenre = await Genre.findAll();

            res.render('index', { 
                movies,
                distinctGenre 
            });
        } catch (error) {
            res.render('404', { 
                error: error.message
            });
        }
    }
}

module.exports = mainController;