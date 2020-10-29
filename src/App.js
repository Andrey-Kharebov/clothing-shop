import React from 'react';
import { connect } from 'react-redux';
import { setBooks } from './redux/reducers/books-reducer';

const books = [
  {id: 1, title: 'The Lord of The Rings'},
  {id: 2, title: 'Harry Potter'},
  {id: 3, title: 'Call of Cthulhu'},
  {id: 4, title: 'Eisenhorn: Xenos'}
]

function App(props) {
  const setBooks = () => {
    props.setBooks(books)
  }

  return (
    <div className='container'>
      <button onClick={setBooks}>Set Books</button>
      { props.books.map(item => {
        return <p key={item.id}>{item.id}. {item.title}</p>
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.booksList.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBooks: (payload) => {
      dispatch(setBooks(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

