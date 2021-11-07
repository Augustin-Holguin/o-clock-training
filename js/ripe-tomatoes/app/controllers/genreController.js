const { Movie, Genre } = require('../models');

const genreController = {
    // method to handle rendering of genre view
    genrePage: async function(req, res) {
        const genreName = req.params.genre;
        
        try {
            const distinctGenre = await Genre.findAll();
            const sameGenreMovies = await Genre.findAll({
                // include association movie_has_genre
                include: [
                    {
                        association: 'movies',
                        // include director data
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