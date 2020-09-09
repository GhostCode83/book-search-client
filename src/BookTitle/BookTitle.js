import React from 'react';

function BookTitle(props){
  console.log(props.books)
  const bookTitles = props.books.map((book) => {
    console.log(book)
        <h2 key={ind}>{title}</h2>

  })

  return(
    {bookTitles}
  )
}

export default  BookTitle