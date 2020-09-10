import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import BookList from './BookList/BookList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      books: [],
      printType: 'all',
      bookType: 'partial'
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.input}&printType=${this.state.printType}&filter=${this.state.bookType}&key=AIzaSyBGfjPxQS3JhHzXUujnrvhWZeYk3Cj_nP4`)
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

  handleChangePrintType = (event) => {
    console.log(event.target.value, 'printType!!!')
    this.setState({
      printType: event.target.value
    })
  }
  
  handleChangeBookType = (event) => {
    console.log(event)
    this.setState({
      bookType: event.target.value
    })
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
         <Nav
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} 
          handleChangePrintType={this.handleChangePrintType}
          handleChangeBookType={this.handleChangeBookType}/>
        <BookList
          books={this.state.books} />
      </div>
    )
  }
}

export default App;
