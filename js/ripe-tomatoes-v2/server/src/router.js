const express = require('express');
const router = express.Router();

const searchController = require('./controllers/searchController.js');

router.get('/', (req, res) => res.send('Hello world !'));

router.get('/search', searchController.searchMovies);

module.exports = router;