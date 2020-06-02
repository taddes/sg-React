import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {

  onTermSubmit = async term => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
