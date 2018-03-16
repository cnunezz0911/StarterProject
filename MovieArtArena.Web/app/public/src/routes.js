import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import App from './App';


const Routes = () => (
    <Router>
        <div>
            <NavBar>
            <Route exact path="/" component={App} />
            </NavBar>
        </div>
    </Router>
);

export default Routes;