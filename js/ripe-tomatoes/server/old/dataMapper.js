// MODULE NOT USED ANYMORE

const client = require('../database');

const dataMapper = {
    // MOVIE table queries
    // db query to return all movies
    getAllMovies: (callback) => {
        const dbQuery = `SELECT * FROM movie`;

        client.query(dbQuery, (err, results) => {
            // if no results from query set an error message
            if (results.rows.length === 0)
                err = 'No movies found';
            // init rows variable which we'll send back to controller with movies found
            let rows = undefined;
            // if we have results then we send the data found in variable rows to the controller
            if (results && results.rows) {
                rows = results.rows;
                callback(err, rows);
            }
        });
    },
    // GENRE table queries
    // db query to return various genre from table genre
    getAllGenre: (callback) => {
        const dbQuery = `SELECT * FROM genre ORDER BY genre_name ASC`;

        client.query(dbQuery, (err, results) => {
            if (results.rows.length === 0)
                err = 'No genres found';
            
            let rows = undefined;

            if (results && results.rows) {
                rows = results.rows;
                callback(err, rows);
            }
        });
    },
    // db query to return movies which have same genre name
    getAllMoviesByGenre: (genreName, callback) => {
        const dbQuery = `SELECT * FROM movie m
        JOIN director d on m.director_id = d.id
        JOIN genre g on m.genre1_id = g.id
        WHERE g.genre_name = $1`;

        // query db by passing genreName as a param
        client.query(dbQuery, [genreName], (err, results) => {
            if (results.rows.length === 0)
                err = 'No movies found for this genre';
        
            let rows = undefined;

            if (results && results.rows) {
                rows = results.rows;
                callback(err, rows);
            }
        });
    },
    // SEARCH queries
    getMoviesByTitle: (searchQuery, callback) => {
        // encapsulating searchQuery with % so we can query with ILIKE and parameter $1
        const searchQueryIlike = `%${searchQuery}%`;

        const dbQuery = `SELECT * FROM movie m
        JOIN director d on m.director_id = d.id
        JOIN genre g on m.genre1_id = g.id
        WHERE m.title ILIKE $1`;

        client.query(dbQuery, [searchQueryIlike], (err, results) => {
            if (results.rows.length === 0)
                err = `No movies found for ${searchQuery}`;
        
            let rows = undefined;

            if (results && results.rows) {
                rows = results.rows;
                callback(err, rows);
            }
        });
    } ,
    // ADMIN
    //add a movie
    postMovie: (movie, callback) => {
        // destructure movie to assign it to individual variables
        let {title, director, genre, year, synopsis, cover, released} = movie;
        // removing beginning or trailing spaces from director name
        director = director.trim(' ');

        // before inserting movie to db we check if director is already present in db
        const director_nameIlike = `%${director}%`;
        const directorQuery = `SELECT * FROM director WHERE director_name ILIKE $1`;
        
        client.query(directorQuery, [director_nameIlike], (err, results) => {
            // if director already present in DB we insert movie with existing id of director
            if (results.rows.length !== 0) {
                const addMovieWithoutDir = `INSERT INTO movie (title, director_id, genre1_id, year, synopsis, cover, released) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
                const director_id = results.rows[0].id;
                const values = [title, director_id, genre, year, synopsis, cover, released];

                client.query(addMovieWithoutDir, values, (err, results) => {
                    callback(err, results);
                });
            // else we also insert a new row in director table
            } else {
                // setting queries
                // query to insert new director
                const addNewDir = `INSERT INTO director (director_name) VALUES ('${director}')`;
                // query to get the id of the new director we just added
                const getNewDirId = `SELECT id FROM director where director_name = '${director}'`;
                // query to add new movie with the id from the newly added director
                const addMovieWithDir = `INSERT INTO movie (title, director_id, genre1_id, year, synopsis, cover, released) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
                // we first run the add director query
                client.query(addNewDir, (err, results) => {
                    if (err) {
                        callback(err, results);
                    } else {
                        // if all went well we fetch the id of the new director before doing the insert of the movie
                        client.query(getNewDirId, (err, results) => {
                            if (err) {
                                callback(err, results);
                            } else {
                                // if select query went well we store the id of director in newDirId and then run the final insert query addMovieWithDir
                                const newDirId = results.rows.id;
                                const values = [title, newDirId, genre, year, synopsis, cover, released];
                                client.query(addMovieWithDir, values, (err, results) => {                        
                                    callback(err, results);
                                });
                            }        
                        });
                    }
                });
            }
        });
    }
}

module.exports = dataMapper;