import React, { Component } from 'react';
import Router from '../src/components/router/Router';
import AleatoirEgg from '../src/components/aleatoirEgg/AleatoirEgg'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <AleatoirEgg />
      </React.Fragment>
    );
  }
}

export default App;
