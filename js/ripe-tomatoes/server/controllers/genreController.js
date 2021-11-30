const { Movie, Genre } = require('../models');
const { catchError } = require('../utils');

const genreController = {
    // method to handle rendering of genre view
    getAllGenres: async function(req, res) {
        try {
            const genres = await Genre.findAll();
            res.json(genres);
        } catch (error) {
            catchError(error, res)
        }
    },
    genrePage: async function(req, res) {
        const genreName = req.params.genre;
        
        try {
            const distinctGenre = await Genre.findAll();
            const sameGenreMovies = await Genre.findAll({
                // include association movie_has_genre
                include: [
                    {
                        association: 'movies',
                        // include director data + genre_name
                        include: [
                            'director',
                            'genres'
                        ]
                    }
                ],
                where: {
                    genre_name: genreName
                }                
            });
            let err = undefined;
            // if no movies found for genre
            if (sameGenreMovies[0].movies.length < 1) {
                err = true;
            } else {
                err = undefined;
            }

            res.render('genre', {
                err,
                distinctGenre,
                genreName,
                sameGenreMovies
            });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = genreController;