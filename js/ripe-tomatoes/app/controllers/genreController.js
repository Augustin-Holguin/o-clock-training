const movies = require('../../data/movies.json');

const genreController = {
    variousGenre: (req, res) => {
        let variousGenre = [];

        for (const movie of movies) {
            variousGenre.push(movie.genre);
        }
        // filter unique alphabetically sorted values with Set constructor and spread operator
        const uniqueGenre = [...new Set(variousGenre.sort())];

        return uniqueGenre;
    }
}

module.exports = genreController;