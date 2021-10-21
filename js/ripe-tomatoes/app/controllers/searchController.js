// const movies = require('../../data/movies.json');
const dataMapper = require('../dataMapper');

const searchController = {
    // method to handle movie search
    searchMovies: (req, res) => {
        const searchQuery = req.query.q;

        dataMapper.getMoviesByTitle(searchQuery, (err, results) => {
            if (err) {
                console.log(err);
                res.render('searchResult', {
                    searchQuery,
                    searchMatch: results,
                    err
                });
            } else {
                res.render('searchResult', {
                    searchQuery,
                    searchMatch: results,
                    err
                });
            }
        });
    }
}

module.exports = searchController;