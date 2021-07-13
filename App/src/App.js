import React, { Component } from 'react';
import Universe from './Components/Universe/universe';
import HypertensionCalculator from './Components/Hypertension/hypertensionCalculator';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Auxita</h1>
        <HypertensionCalculator />
      </React.Fragment>
    );
  }
}

export default App;