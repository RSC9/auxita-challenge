import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Universe from './Components/Universe/universe';
import HypertensionCalculator from './Containers/HypertensionCalculator';

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