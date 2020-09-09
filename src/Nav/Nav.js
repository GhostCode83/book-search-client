import React from 'react';


//page renders every keydown
//change value of state? check state?  state is changing, and is one step behind input.  
function Nav(props) {
  return(

    <nav>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input id='search' placeholder="henry" value={props.state.input} onChange={e => props.handleChange(e)}>
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