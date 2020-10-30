const SET_CLOTHES = 'SET-CLOTHES';
const SET_IS_READY = 'SET-IS-READY';

const initialState = {
  items: null,
  isReady: false
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
    default: 
      return state
  }
}

export const setClothes = (payload) => ({type: SET_CLOTHES, payload});
export const setIsReady = (payload) => ({type: SET_IS_READY, payload});

export default clothesReducer;