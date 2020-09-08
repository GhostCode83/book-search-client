import React from 'react';

function Nav() {
  console.log(this.props.state)
  return(

    <nav>
      <form onSubmit={(e) => this.props.submitSearchTerm(e)}>
        <label htmlFor='search'>Search: </label>
        <input id='search' placeholder="henry" value={this.props.state}>
        </input>
        <button type='submit'>Search</button>
      </form>
      <form>
        <fieldset>
        <label>Print Type: </label>
        <select name="pets" id="pet-select">
          <option value="">All</option>
        </select>        
        <label>Book Type: </label>
          <select>
            <option>No Filter</option>
          </select>

        </fieldset>
      </form>
    </nav>
  )

}

export default Nav