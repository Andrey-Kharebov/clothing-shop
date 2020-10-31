const SET_CLOTHES = 'SET-CLOTHES';
const SET_IS_READY = 'SET-IS-READY';
const SET_SORT_BY = 'SET-SORT-BY';

const initialState = {
  items: null,
  isReady: false,
  sortBy: 'all'
}

const clothesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOTHES: 
      return {
        ...state,
        items: [...action.payload],
        isReady: true
      }
    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    default: 
      return state
  }
}

export const setClothes = (payload) => ({type: SET_CLOTHES, payload});
export const setIsReady = (payload) => ({type: SET_IS_READY, payload});
export const setSortBy = (payload) => ({type: SET_SORT_BY, payload});

export default clothesReducer;