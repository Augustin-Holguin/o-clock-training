const client = require('./database');

const dataMapper = {
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
    // db query to return various genre from table genre
    getAllGenre: (callback) => {
        const dbQuery = `SELECT DISTINCT genre_name FROM genre ORDER BY genre_name ASC`;

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
            console.log(results.rows);
            if (results.rows.length === 0)
            err = 'No movies found for this genre';
        
            let rows = undefined;

            if (results && results.rows) {
                rows = results.rows;
                console.log(rows)
                callback(err, rows);
            }
        });
    }
}

module.exports = dataMapper;