const dataMapper = require('../dataMapper');

const adminController = {
    adminPage: (req, res, next) => {
        // first let's get all distinct genres for the genre navbar
        let distinctGenre = undefined;

        dataMapper.getAllGenre((err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                distinctGenre = results;
            }
            
            res.render('admin', {
                distinctGenre
            });
        });        
    },
    // controller to add a movie in db via admin page form
    addMovie: (req, res) => {
        const movie = req.body;
        
        dataMapper.postMovie(movie, (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.redirect('back');
            }
        });
    }
}

module.exports = adminController;