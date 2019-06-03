import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class  App extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      lat: null, errorMessage: ''
    };
  }



  componentDidMount() {
    console.log('COMPONENT DID MOUNT')
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message}) 
    );
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
      return <SeasonDisplay lat={this.state.lat} />
    } else {
      return <div>Loading</div>
    }
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)