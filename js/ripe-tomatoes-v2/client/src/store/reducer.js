import { UPDATE_SEARCH_INPUT, UPDATE_MOVIE_LIST } from 'src/actions';

const initialState = {
    searchInput: '',
    movies: [],
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload,
            };
        case UPDATE_MOVIE_LIST:
            return {
                ...state,
                movies: action.payload,
            }
        default:
            return state;
    }
} 

export default reducer;