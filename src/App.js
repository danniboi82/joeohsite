import React, { Component } from 'react';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Curriculum from './Components/Curriculum/Curriculum';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id='Top'>
            <Navbar />
        </ScrollableAnchor>
        <ScrollableAnchor id='About'>
            <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id='Curriculum'>
            <Curriculum />
        </ScrollableAnchor>
        <ScrollableAnchor id='Contact'>
            <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;