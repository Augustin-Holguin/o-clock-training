const Movie = require('./movie');
const Director = require('./director');
const Genre = require('./genre');

// One-To-Many relationship between movie and director
// Movie has one director
Movie.belongsTo(Director, {
    foreignKey: 'director_id',
    as: 'director'
});

// a director can have multiple movies
Director.hasMany(Movie, {
    foreignKey: 'director_id',
    as: 'movies'
});

// Many-To-Many relationship between movie and genre
// Movie can have many genres
Movie.belongsToMany(Genre, {
    foreignKey: 'movie_id',
    otherKey: 'genre_id',
    through: 'movie_has_genre',
    as: 'genres'
});

// Genre can have many movies
Genre.belongsToMany(Move, {
    foreignKey: 'genre_id',
    otherKey: 'movie_id',
    through: 'movie_has_genre',
    as: 'movies'
});

// export all models with their respective associations to be used in our controllers
module.exports = {
    Movie,
    Director,
    Genre
}