import React from 'react';
import './BookDetails.css'

function BookDetails(props) {
  let bookDetails = Array.isArray(props.books) ? props.books.map((book, ind) => {
    console.log(book.saleInfo)
    let imageSource = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : ''
    let price = book.saleInfo.listPrice ? <p class="price">Price: ${book.saleInfo.listPrice.amount}</p> : '';
    //<p>Price: {book.saleInfo.listPrice.amount ? book.saleInfo.listPrice.amount : ''}</p>
    //let price = 
    return (
      <li class="grid-container" key={ind}>
        <img class="grid-item grid-item-1" src={imageSource}/>
        <div class="grid-item grid-item-2">
          <h2>
          {book.volumeInfo.title}
        </h2>
        <p class="author">Author: {book.volumeInfo.authors}</p>
        {price}
        <p>{book.volumeInfo.description}</p>
          </div>
        <hr class="grid-item grid-item-3"/>
      </li>
    )
  })
    : '';
  return (
    <div>{bookDetails}</div>
  )
}

export default BookDetails


