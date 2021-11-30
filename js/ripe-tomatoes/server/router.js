const express = require('express');
const router = express.Router();

const genreController = require('./controllers/genreController.js');
const mainController = require('./controllers/mainController.js');
const searchController = require('./controllers/searchController.js');
const movieController = require('./controllers/movieController.js');
const adminController = require('./controllers/adminController.js');

router.get('/', mainController.homePage);

router.get('/search', searchController.searchMovies);

// genres
router.route('/genres')
.get(genreController.getAllGenres);

router.get('/genres/:genre', genreController.genrePage);

router.get('/movies/:movie', movieController.moviePage);

router.get('/admin', adminController.adminPage);
router.post('/admin/add-movie', adminController.addMovie);

module.exports = router;