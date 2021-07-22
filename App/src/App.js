import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import HypertensionCalculator from './Containers/HypertensionCalculator';
import KidenyDiseaseCalculator from './Containers/KidneyDiseaseCalculator';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Auxita</h1>
        <HypertensionCalculator />
        <KidenyDiseaseCalculator />
      </React.Fragment>
    );
  }
}

export default App;