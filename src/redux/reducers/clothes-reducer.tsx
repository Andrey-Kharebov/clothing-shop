import { ItemType } from '../../types/types';

const SET_CLOTHES = 'SET-CLOTHES';
const SET_IS_READY = 'SET-IS-READY';


// export type InitialStateType = {
//   items: null | Array<ItemType>,
//   isReady: boolean
// }

const initialState = {
  items: null as Array<ItemType> | null,
  isReady: false 
}

export type InitialStateType = typeof initialState;

const clothesReducer = (state = initialState, action: any): InitialStateType => {
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

type SetClothesActionType = {
  type: typeof SET_CLOTHES,
  payload: Array<ItemType>
}

type SetIsReadyActionType = {
  type: typeof SET_IS_READY,
  payload: boolean
}


export const setClothes = (payload: Array<ItemType>): SetClothesActionType => ({type: SET_CLOTHES, payload});
export const setIsReady = (payload: boolean): SetIsReadyActionType => ({type: SET_IS_READY, payload});

export default clothesReducer;