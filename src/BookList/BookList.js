import React from 'react';
import BookDetails from '../BookDetails/BookDetails';
import BookImage from '../BookImage/BookImage';
import BookTitle from '../BookTitle/BookTitle';

function BookList(props) {
  console.log(props.books)
  return (
    <main>
      <div>
        <BookTitle books={props.books}/>
        <BookDetails books={props.books}/>
        <BookImage books={props.books}/>
      </div>
    </main>
  )
}

export default BookList