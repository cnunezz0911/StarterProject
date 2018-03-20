import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel'
import Footer from './Footer/Footer';
import Posters from './Posters/Posters';
import App from './App';



const Routes = () => (
    <Router>
        <div>
        <NavBar />
            <Route exact path="/" component={App}/>
            <Route path="/Posters" component={Posters}/>
        </div>
    </Router>
);

export default Routes;