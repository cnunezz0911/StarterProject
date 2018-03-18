import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './Footer/Footer';
import Carousel from './Carousel/Carousel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <Carousel/>
        <Footer />
      </div>
    );
  }
}

export default App;
