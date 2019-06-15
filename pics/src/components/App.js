import React, { Component } from 'react';  
import axios from 'axios';
import SearchBar from './SearchBar';




class App extends Component {

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    console.log(API_KEY)
    return API_KEY
  }
 
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      }
    });
    console.log(response.data.results)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App