const sequelize = require('../database');
const { Op } = require("sequelize");
const { Genre, Director, Movie } = require('../models');

const adminController = {
    adminPage: async function(req, res) {
        // first let's get all distinct genres for the genre navbar
        const distinctGenre = await Genre.findAll();
            
        res.render('admin', {
            distinctGenre
        });      
    },
    // method to add a movie in db via admin page form
    addMovie: async function(req, res) {
        const { title, director_name, genre, year, synopsis, cover, released } = req.body;

        try {
            // check if director already exists in db
            const isNewDirector = await Director.findOne({
                where: {
                    director_name: {
                        [Op.iLike]: `%${director_name.trim(' ')}%`
                    }
                }
            });
            // if no director found in db with same name we create a new one
            if (isNewDirector === null) {
                const newDirector = await Director.create({
                    director_name
                });

                let director_id = newDirector.id;
                // we then create a movie instance in db with the newly created director id
                const newMovie = await Movie.create({
                    title,
                    director_id,
                    year,
                    synopsis,
                    cover,
                    released
                });
                // insert new link between movie and genre
                const movieGenre = await sequelize.query(`INSERT INTO "movie_has_genre" VALUES ('${newMovie.id}', '${genre}')`);
            } else {
                // else if director exists we use existing director_id to create movie in db
                let director_id = isNewDirector.id;

                const newMovie = await Movie.create({
                    title,
                    director_id,
                    year,
                    synopsis,
                    cover,
                    released
                });
                // insert new link between movie and genre
                const movieGenre = await sequelize.query(`INSERT INTO "movie_has_genre" VALUES ('${newMovie.id}', '${genre}')`);
            }

            res.redirect(`/movies/${title}`);
                
        } catch (error) {
            console.log(error);
            res.render('404', { error });
        }
    }
}

module.exports = adminController;