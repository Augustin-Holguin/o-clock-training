const client = require('./database');

const dataMapper = {
    testQuery: () => {
        const dbQuery = `SELECT * FROM movie`;
        client.query(dbQuery, (err, result) => {
            // checking if DB is connected
            console.log(result.rows);
        });
    }
}

module.exports = dataMapper;