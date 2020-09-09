import React from 'react';

function BookTitle(props){
  console.log(props.books)
for (let i = 0; i < props.books.length; i++){
  console.log(props.books[i].volumeInfo.title)
  let titles = [];
  let title = props.books[i].volumeInfo.title
  title.push(title)
  return titles
}
return null
   // {bookTitles}
  
}

export default  BookTitle