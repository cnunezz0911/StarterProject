import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Carousel from './Carousel/Carousel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    posters:{
      
    }
    }
  }
  render() {
    return (
      <div className="container-fluid night">
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
        </p>
      
        <Carousel />
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
