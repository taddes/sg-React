import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class  App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      lat: null, errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message}) 
        throw err;
      }
    );
  }

  componentDidMount() {
    console.log('My component was rendered to screen')
  } 

  componentDidUpdate() {
    console.log('My component was just updated and rendered')
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>Error! {this.state.errorMessage}</div>
      )
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude {this.state.lat}</div>
    } else {
      return <div>Loading</div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)