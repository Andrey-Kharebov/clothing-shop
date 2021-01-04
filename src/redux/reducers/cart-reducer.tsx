import { ItemType } from '../../types/types';

const ADD_ITEM_TO_CART = 'ADD-ITEM-TO-CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE-ITEM-FROM-CART';
const CLEAR_CART = 'CLEAR-CART';
const TOGGLE_ACTIVE_CART = 'TOGGLE-ACTIVE-CART';


// export type InitialStateType = {
//   items: Array<{}> | Array<ItemType>,
//   activeCart: boolean
// }

const initialState= {
  items: [] as Array<ItemType>, 
  activeCart: false
}

export type InitialStateType = typeof initialState;

const cartReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case REMOVE_ITEM_FROM_CART: 
      return {
        ...state,
        items: state.items.filter((i: ItemType) => i.id !== action.id)
        // i остается если i.id не равен payload.id
      }
    case CLEAR_CART: 
      return {
        ...state,
        items: []
      }
    case TOGGLE_ACTIVE_CART:
      return {
        ...state,
        activeCart: !state.activeCart
      }
    default:
      return state;
  }
}

type AddItemToCartActionType = {
  type: typeof ADD_ITEM_TO_CART,
  payload: ItemType
}

type RemoveItemFromCartActionType = {
  type: typeof REMOVE_ITEM_FROM_CART,
  id: number
}

type ClearCartActionType = {
  type: typeof CLEAR_CART
}

type ToggleActiveCartActionType = {
  type: typeof TOGGLE_ACTIVE_CART
}

export const addItemToCart = (payload: ItemType): AddItemToCartActionType => ({type: ADD_ITEM_TO_CART, payload})
export const removeItemFromCart = (id: number): RemoveItemFromCartActionType => ({type: REMOVE_ITEM_FROM_CART, id})
export const clearCart = (): ClearCartActionType => ({type: CLEAR_CART})
export const toggleActiveCart = (): ToggleActiveCartActionType => ({type: TOGGLE_ACTIVE_CART})

export default cartReducer;