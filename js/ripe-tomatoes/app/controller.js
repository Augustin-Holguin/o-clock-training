const controller = {
    // method to get various genres for navbar purposes
    variousGenre: (req, res) => {
        const movies = req.app.locals.movies;
        let variousGenre = [];

        for (const movie of movies) {
            variousGenre.push(movie.genre);
        }
        // filter unique alphabetically sorted values with Set constructor and spread operator
        const uniqueGenre = [...new Set(variousGenre.sort())];
        return uniqueGenre;
    }
}

module.exports = controller;