import React, { Component } from 'react';
import logo from '../logo.svg';

class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default Welcome;
