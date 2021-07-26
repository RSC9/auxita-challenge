import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import SiderLayout from './Containers/Layout';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <SiderLayout />
      </React.Fragment>
    );
  }
}

export default App;