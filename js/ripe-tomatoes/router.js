const express = require('express');
const router = express.Router();
const genreController = require('./app/controllers/genreController.js');
const mainController = require('./app/controllers/mainController.js');
const searchController = require('./app/controllers/searchController.js');
const movieController = require('./app/controllers/movieController.js');

router.get('/', mainController.homePage);

router.get('/search', searchController.searchMovies);

router.get('/genre/:genre', genreController.genrePage);

router.get('/movies/:movie', movieController.moviePage);

module.exports = router;