import React from 'react';

function BookTitle(props) {
  console.log(props.books)
  let bookTitles = Array.isArray(props.books) ? props.books.map((book, ind) => {
      
    return (
      <h2 key={ind}>{book.volumeInfo.title}</h2>
    )
  }) : '<></>';

  return (
    <div>{bookTitles}</div>
  )
}

export default BookTitle