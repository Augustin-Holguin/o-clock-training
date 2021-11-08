const { Op } = require("sequelize");
const { Movie } = require('../models');

const searchController = {
    // method to handle movie search
    searchMovies: async function(req, res) {
        const searchQuery = req.query.q;

        try {
            const searchMatch = await Movie.findAll({
                // include director and genre data
                include: [
                    'director',
                    'genres'
                ],
                where: {
                    // ILIKE search query
                    title: {
                        [Op.iLike]: `%${searchQuery}%`
                    }
                }
            });

            let err = undefined; 

            if (searchMatch.length === 0) {
                err = true;
            }

            res.render('searchResult', {
                searchQuery,
                searchMatch,
                err
            });
        } catch (error) {
            res.render('404', { error });
        }

    } 
}

module.exports = searchController;