const express = require('express');
const router = express.Router();
const controller = require('./app/controller.js');

router.get('/', (req, res) => {
    const movies = req.app.locals.movies;
    const uniqueGenre = controller.variousGenre(req, res);
   
    res.render('index', { movies, uniqueGenre });
});

router.get('/search', (req, res, next) => {
    const searchQuery = req.query.q;
    const movies = req.app.locals.movies;

    const searchMatch = movies.filter((movie) => {
        if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return true;
        }
    });

    res.render('searchResult', { searchMatch, searchQuery });
})

router.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const movies = req.app.locals.movies;
    const uniqueGenre = controller.variousGenre(req, res);

    const sameGenreMovies = movies.filter((movie) => {
        if (movie.genre.includes(genre)) {
            return true;
        }
    });

    res.render('genre', { sameGenreMovies, genre, uniqueGenre });
})

module.exports = router;