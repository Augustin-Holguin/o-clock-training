const controller = {
    // method to get various genres for navbar purposes
    variousGenre: (req, res) => {
        const movies = req.app.locals.movies;
        let variousGenre = [];

        for (const movie of movies) {
            variousGenre.push(movie.genre);
        }
        // filter unique alphabetically sorted values with Set constructor and spread operator
        const uniqueGenre = [...new Set(variousGenre.sort())];
        
        return uniqueGenre;
    },
    // method to handle movie search
    searchMovies: (req, res) => {
        const searchQuery = req.query.q;
        const movies = req.app.locals.movies;

        const searchMatch = movies.filter((movie) => {
            if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                return true;
            }   
        });

        return searchMatch;
    },
    // method to find all movies which have the same genre
    sameGenre: (req, res) => {
        const genre = req.params.genre;
        const movies = req.app.locals.movies;
        const uniqueGenre = controller.variousGenre(req, res);

        const sameGenreMovies = movies.filter((movie) => {
            if (movie.genre.includes(genre)) {
                return true;
            }
        });

        return sameGenreMovies;
    }
}

module.exports = controller;