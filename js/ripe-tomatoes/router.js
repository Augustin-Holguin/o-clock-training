const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/search', (req, res, next) => {
    const searchQuery = req.query.q;
    const movies = req.app.locals.movies;

    const searchMatch = movies.filter((movie) => {
        if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return true;
        }
    });

    res.render('searchResult', { searchMatch });
})

router.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const movies = req.app.locals.movies;

    const sameGenreMovies = movies.filter((movie) => {
        if (movie.genre.includes(genre)) {
            return true;
        }
    });

    res.render('genre', { sameGenreMovies });
})

module.exports = router;