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
    const searchMatch = controller.searchMovies(req, res);

    res.render('searchResult', { searchMatch, searchQuery });
})

router.get('/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const movies = req.app.locals.movies;
    const uniqueGenre = controller.variousGenre(req, res);
    const sameGenreMovies = controller.sameGenre(req, res);

    res.render('genre', { sameGenreMovies, genre, uniqueGenre });
})

module.exports = router;