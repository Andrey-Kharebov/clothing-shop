const ADD_ITEM_TO_CART = 'ADD-ITEM-TO-CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE-ITEM-FROM-CART';
const CLEAR_CART = 'CLEAR-CART';

const initialState = {
  items: [],
  totalCost: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalCost: state.totalCost + action.payload.price
      }
    case REMOVE_ITEM_FROM_CART: 
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload.id) 
        // i остается если i.id не равен payload.id
      }
    case CLEAR_CART: 
      return {
        ...state,
        items: []
      }
    default:
      return state;
  }
}

export const addItemToCart = (payload) => ({type: ADD_ITEM_TO_CART, payload})
export const removeItemFromCart = (payload) => ({type: REMOVE_ITEM_FROM_CART, payload})
export const clearCart = () => ({type: CLEAR_CART})

export default cartReducer;