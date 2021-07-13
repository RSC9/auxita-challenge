import React, { Component } from 'react';
import Universe from './Components/Universe/universe';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Game of Life</h1>
        <Universe />
      </React.Fragment>
    );
  }
}

export default App;