import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import App from './App';


const Routes = () => (
    <Router>
        <div>
        <div>
            <NavBar>
            </NavBar>
            <App>
               <Carousel />
            </App>
        </div>
        </div>
    </Router>
);

export default Routes;