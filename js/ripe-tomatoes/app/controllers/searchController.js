const movies = require('../../data/movies.json');

const searchController = {
    // method to handle movie search
    searchMovies: (req, res) => {
        const searchQuery = req.query.q;

        const searchMatch = movies.filter((movie) => {
            if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                return true;
            }   
        });

        res.render('searchResult', { searchMatch, searchQuery });
    }
}

module.exports = searchController;