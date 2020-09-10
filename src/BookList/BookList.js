import React from 'react';
import BookDetails from '../BookDetails/BookDetails';

function BookList(props) {
  return (
    <main>
      <ul>
        <BookDetails books={props.books}/>
      </ul>
    </main>
  )
}

export default BookList