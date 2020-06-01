import React, { Component } from 'react';


class SearchBar extends Component {

  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: call a callback from parent
    // Tell app that user submitted form

  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
// class SearchBar extends Component {
//   state = { searchTerm: ''};

//   onInputChange = (event) => {
//     this.setState({ searchTerm: event.target.value })
//   }

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     // TODO make sure we clal callback from parent component
//   }
//   render() {
//     return(
//       <div className="ui segment search-bar">
//         <form  className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Video Search:</label>
//             <input 
//               type="text" 
//               value={this.state.searchTerm} 
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

export default SearchBar;