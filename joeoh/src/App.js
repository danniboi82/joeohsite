import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Curriculum from './Components/Curriculum/Curriculum';
import Intro from './Components/Intro/Intro';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home/>
        <Curriculum />
        <Intro />
      </div>
    );
  }
}

export default App;
