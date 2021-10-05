const controller = {
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
    }
}

module.exports = controller;