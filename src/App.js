import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import BookList from './BookList/BookList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      books: '',
      title: '',
      image: '',
      authors: '',
      price: '',
      description: '',
      currencyCode: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    /*this.setState({
      submit: this.state.input
    })*/
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&key=AIzaSyBGfjPxQS3JhHzXUujnrvhWZeYk3Cj_nP4`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later')
        }
        return res.json();
      })
      .then(data => {
        console.log(data.items);
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  /*const authors = book.volumeInfo.authors;
       const imageUrl = book.volumeInfo.imageLinks.thumbnail;
       const title = book.volumeInfo.title;
       const description = book.volumeInfo.description;*/

  /*if (book.saleInfo.listPrice.amount) {
    const price = book.saleInfo.listPrice.amount
  } else{
    const price = ''
  };
  const currencyCode = book.saleInfo.listPrice.currencyCode;*/
  /*image: 'volumeInfo.imageLinks.thumbnail',
  author: 'volumeInfo.authors',
  price: 'volumeInfo.listPrice.amount'*/
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <h3>{this.state.submit}</h3>
        <Nav
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        <BookList 
          books={this.state.books}/>
      </div>
    )
  }
}

export default App;
