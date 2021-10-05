const express = require('express');
const router = express.Router();
const controller = require('./app/controllers/controller.js');
const genreController = require('./app/controllers/genreController.js');
const mainController = require('./app/controllers/mainController.js');

router.get('/', mainController.homePage);

router.get('/search', (req, res, next) => {
    const searchQuery = req.query.q;
    const movies = req.app.locals.movies;
    const searchMatch = controller.searchMovies(req, res);

    res.render('searchResult', { searchMatch, searchQuery });
})

router.get('/genre/:genre', genreController.genrePage);

router.get('/movies/:movie', (req, res) => {
    res.render('movie');
})

module.exports = router;