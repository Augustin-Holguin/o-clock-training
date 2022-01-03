import { useSelector } from 'react-redux';
import './style.scss';

import MovieItem from './MovieItem';

const SearchResults = () => {
    const movies = useSelector((state) => state.movies);

    return (
        <div className="movie-list">
            {
                movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))
            }
        </div>
    )
}

export default SearchResults;