import { useSelector, useDispatch } from 'react-redux';
import { updateSearchInput } from 'src/actions';
import './style.scss';

const SearchBar = () => {
    const searchInput = useSelector((state) => state.searchInput);

    const dispatch = useDispatch();

    return (
        <form className="search" method="GET" action="/search">
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