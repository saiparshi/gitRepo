import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      types: ['test1', 'test2'],
    };

  }

  componentDidMount() {
    // axios.get('xxx')
    //   .then(res => {
    //     const types = res.data;
    //     this.setState({ types });
    //   });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          { this.state.types.map(type => <li key={type.id}>{type.docType}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
