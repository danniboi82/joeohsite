import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Curriculum from './Components/Curriculum/Curriculum';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home/>
        <Curriculum />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
