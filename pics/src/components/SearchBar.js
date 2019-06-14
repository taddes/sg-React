
import React, { Component } from 'react'


class SearchBar extends Component {
  state = {
    term: ''
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term)
  };

 
  
  render() {
    console.log(this.state);
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input type="text" 
              value={this.state.term} 
              onClick={this.onInputClick} 
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;