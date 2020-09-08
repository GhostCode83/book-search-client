import React from 'react';
import BookDetails from '../Book/BookDetails';
import BookImage from '../BookImage/BookImage';
import BookTitle from  '../BookTitle/BookTitle';

function BookList() {
return(
  <main>
    <div>
      <BookTitle />
      <BookDetails />
      <BookImage />

    </div>
  </main>
)
}

export default BookList