const dataMapper = require('../dataMapper');

const genreController = {
    // method to handle rendering of genre view
    genrePage: (req, res) => {
        // first let's get all distinct genres for the genre navbar
        let distinctGenre = undefined;

        dataMapper.getAllGenre((error, allGenre) => {
            if (error) {
                console.log(error);
                res.status(500).send(error);
            } else {
                distinctGenre = allGenre;
            }
        });
        // second let's query the db to find all movies which have the same genre
        const genreName = req.params.genre;

        dataMapper.getAllMoviesByGenre(genreName, (err, results) => {
            if (err) {
                console.log(err);
                return res.render('genre', {
                    err,
                    distinctGenre,
                    genreName,
                    sameGenreMovies: results
                });
            } 
            res.render('genre', {
                err,
                distinctGenre,
                genreName,
                sameGenreMovies: results
            });  
        });
    }
}

module.exports = genreController;