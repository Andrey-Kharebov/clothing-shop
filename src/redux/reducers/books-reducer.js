const SET_BOOKS = 'SET-BOOKS';
const ADD_BOOK = 'ADD-BOOK';

const initialState = {
  items: []
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS: 
      return {
        ...state,
        items: [...action.payload]
      }
    case ADD_BOOK: 
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default: 
      return state
  }
}

export const setBooks = (payload) => ({type: SET_BOOKS, payload});
export const addBook = (payload) => ({type: ADD_BOOK, payload});

export default booksReducer;