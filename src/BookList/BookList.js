import React from 'react';
import BookDetails from '../BookDetails/BookDetails';
import BookImage from '../BookImage/BookImage';

function BookList(props) {
  return (
    <main>
      <ul>
        <BookDetails books={props.books}/>
        <BookImage books={props.books}/>
      </ul>
    </main>
  )
}

export default BookList