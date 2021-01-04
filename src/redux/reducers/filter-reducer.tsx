const SET_SORT_BY = 'SET-SORT-BY';
const SET_SEARCH_QUERY = 'SET-SEARCH-QUERY';

// export type InitialStateType = {
//   sortBy: string,
//   searchQuery: string
// }

const initialState = {
  sortBy: 'all',
  searchQuery: ''
}

export type InitialStateType = typeof initialState;

const filterReducer = (state = initialState, action: any): InitialStateType => {
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

type SetSortByActionType = {
  type: typeof SET_SORT_BY,
  payload: string
}

type SetSearchQueryActionType = {
  type: typeof SET_SEARCH_QUERY,
  payload: string
}

export const setSortBy = (payload: string): SetSortByActionType => ({type: SET_SORT_BY, payload});
export const setSearchQuery = (payload: string): SetSearchQueryActionType => ({type: SET_SEARCH_QUERY, payload});

export default filterReducer;