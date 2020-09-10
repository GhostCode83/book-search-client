import React from 'react';
import  "./Nav.css" 

function Nav(props) {

  //need to make submit button work for entire form, and use Print Type and Book Type in search.

  return (
    <header>
      <h1>Google Book Search</h1>
      <nav>
        <form onSubmit={props.handleSubmit}>
          <div>
            <label htmlFor='search'>Search: </label>
            <input id='search' placeholder="henry" value={props.state.input} onChange={e => props.handleChange(e)}>
            </input>
            <button type='submit'>Search</button>
          </div>
          <fieldset>
            <label>Print Type: </label>
            <select value={props.state.printType} name="print-type" id="print-type" onChange={(e) => props.handleChangePrintType(e)}>
              <option value='all'>All</option>
              <option value='books'>Books</option>
              <option value='magazines'>Magazines</option>
            </select>
            <label>Book Type: </label>
            <select value={props.state.bookType} name="book-type" id='book-type' onChange={(e) => props.handleChangeBookType(e)}>
              <option value='partial'>Partial</option>
              <option value='full'>Full</option>
              <option value='free-ebooks'>Free eBooks</option>
              <option value='paid-ebooks'>Paid eBooks</option>
              <option value='ebooks'>eBooks</option>

            </select>

          </fieldset>
        </form>
      </nav>
    </header>

  )
}

export default Nav