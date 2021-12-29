import { UPDATE_SEARCH_INPUT } from 'src/actions';

const initialState = {
    searchInput: '',
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload,
            };
        default:
            return state;
    }
} 

export default reducer;