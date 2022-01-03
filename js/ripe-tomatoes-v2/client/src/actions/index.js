export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
export const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST';

export const updateSearchInput = (newSearchInput) => ({
    type: UPDATE_SEARCH_INPUT,
    payload: newSearchInput,
});

export const updateMovieList = (movies) => ({
    type: UPDATE_MOVIE_LIST,
    payload: movies,
})