const movies = require('../../data/movies.json');

const genreController = {
    // method to display various genres in navbar
    variousGenre: () => {
        let variousGenre = [];

        for (const movie of movies) {
            variousGenre.push(movie.genre);
        }
        // filter unique alphabetically sorted values with Set constructor and spread operator
        const uniqueGenre = [...new Set(variousGenre.sort())];

        return uniqueGenre;
    },
    // method to find all movies which have the same genre
    sameGenre: (genre) => {
        const uniqueGenre = genreController.variousGenre();

        const sameGenreMovies = movies.filter((movie) => {
            if (movie.genre.includes(genre)) {
                return true;
            }
        });

        return sameGenreMovies;
    },
    // method to handle rendering of genre view
    genrePage: (req, res) => {
        const genre = req.params.genre;
        const uniqueGenre = genreController.variousGenre();
        const sameGenreMovies = genreController.sameGenre(genre);

        res.render('genre', { sameGenreMovies, genre, uniqueGenre });
    }
}

module.exports = genreController;