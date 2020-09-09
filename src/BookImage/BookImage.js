import  React from 'react';

function BookImage(props){
  let bookImage = Array.isArray(props.books) ? props.books.map((book, ind) => {

    return (
      <img />
    )
  })
    : '';
  return (
    <div>{bookImage}</div>
  )
}

export default BookImage