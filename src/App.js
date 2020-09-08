import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import BookList from './BookList/BookList';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'Shelley' 
      
      /* what is the fetch going to return?  = {
        title: '',
        image: '',
        author: '',
        price: '',
        description: ''*/
    
    }
  }
  
  submitSearchTerm = (event) => {
    
    console.log('search clicked!!!', event)
    this.setState({
      value: event
    })
  }
  componentDidMount(){
    
  
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <h1>Google Book Search</h1>
        <Nav 
          
          state={this.state}
          submitSearchTerm={this.submitSearchTerm() }/>
        <BookList />
      </div>
    )
  }
}

export default App;
