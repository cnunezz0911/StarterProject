import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer';
import Post from './Views/Post';
import Posters from './Views/Posters';
import DetailPage from './Views/DetailPage';
import App from './App';

const Routes = () => (
    <Router>
        <div>
        <NavBar />
            <Route exact path="/" component={App}/>
            <Route path="/Posters" component={Posters}/>
            <Route path="/AddPoster" component={Post}/>
            <Route path="/:idDetailPage" component={DetailPage} />
        </div>
    </Router>
);

export default Routes;