const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const movies = req.app.locals.movies;
    let variousGenre = [];

    for (const movie of movies) {
        variousGenre.push(movie.genre);
    }
    // filter unique alphabetically sorted values with Set constructor and spread operator
    const uniqueGenre = [...new Set(variousGenre.sort())];

    res.render('index', { uniqueGenre });
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

    res.render('genre', { sameGenreMovies, genre });
})

module.exports = router;