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
    }
}

module.exports = dataMapper;