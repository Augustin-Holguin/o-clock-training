import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSearchInput, updateMovieList } from 'src/actions';
import './style.scss';

const SearchBar = () => {
    const searchInput = useSelector((state) => state.searchInput);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchMovies = (e) => {
        e.preventDefault();
        
        axios({
            method: 'get',
            url: 'http://localhost:3000/search',
            params: {
                q: searchInput
            },
        })
            .then((res) => {
                const results = res.data;
                dispatch(updateMovieList(results));
                navigate(`/search?q=${searchInput}`)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <form className="search" method="GET" action="/search" onSubmit={fetchMovies}>
            <div className="search-input ui icon input">
                <input 
                    type="text"
                    placeholder="Search by movie title" 
                    name="q" 
                    value={searchInput}
                    onChange={(e) => dispatch(updateSearchInput(e.target.value))}
                />
                <i className="search icon"></i>
            </div>
        </form>
    )
}

export default SearchBar;