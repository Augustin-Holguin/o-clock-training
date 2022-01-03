const { Op } = require('sequelize');
const { Movie } = require('../models');

const searchController = {
    searchMovies: async function(req, res) {
        const searchQuery = req.query.q;

        try {
            const searchResult = await Movie.findAll({
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

            res.json(searchResult);
        } catch (error) {
            res.status(500).json({error: 'Error while querying movie data'})
        }
    }
}

module.exports = searchController;