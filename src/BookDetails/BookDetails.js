import React from 'react';

function BookDetails(props) {
  console.log(props)
  let bookDetails = Array.isArray(props.books) ? props.books.map((book, ind) => {

    return (
      <li key={ind}>
        <h2>
          {book.volumeInfo.title}
        </h2>
        <p>Author: {book.volumeInfo.authors}</p>
        <p>Description: {book.volumeInfo.description}</p>
      </li>
    )
  })
    : '';
  return (
    <div>{bookDetails}</div>
  )
}

export default BookDetails