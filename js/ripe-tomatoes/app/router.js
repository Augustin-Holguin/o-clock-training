const express = require('express');
const router = express.Router();
const genreController = require('./controllers/genreController.js');
const mainController = require('./controllers/mainController.js');
const searchController = require('./controllers/searchController.js');
const movieController = require('./controllers/movieController.js');

router.get('/', mainController.homePage);

router.get('/search', searchController.searchMovies);

router.get('/genre/:genre', genreController.genrePage);

router.get('/movies/:movie', movieController.moviePage);

module.exports = router;