const SET_SORT_BY = 'SET-SORT-BY';
const SET_SEARCH_QUERY = 'SET-SEARCH-QUERY';

const initialState = {
  sortBy: 'all',
  searchQuery: ''
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      }
    default: 
      return state
  }
}

export const setSortBy = (payload) => ({type: SET_SORT_BY, payload});
export const setSearchQuery = (payload) => ({type: SET_SEARCH_QUERY, payload});

export default filterReducer;