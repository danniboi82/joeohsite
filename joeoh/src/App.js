import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home/>
      </div>
    );
  }
}

export default App;
