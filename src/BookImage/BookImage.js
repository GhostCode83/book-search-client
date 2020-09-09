import  React from 'react';

function BookImage(props){
  console.log(props)
  let bookImage = Array.isArray(props.books) ? props.books.map((book, ind) => {

    return (
      <img src={props.saleInfo.listPrice.amount}/>
    )
  })
    : '';
  return (
    <div>{bookImage}</div>
  )
}

export default BookImage