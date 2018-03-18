import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="bstyle">
                    <div className="container txtAll">
                        <span className="sptext"> Welcome to MoviePosterArena </span>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand brandstyle" href="#">MoviePosterArena
                    <i className="fa fa-grav dia"></i>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MoviePosters <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MostPopular <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NewArrivals <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Disney <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More
                      </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Sports</a>
                                    <a className="dropdown-item" href="#">Actors</a>
                                    <a className="dropdown-item" href="#">Art</a>
                                    <a className="dropdown-item" href="#">Music</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">OtherPosters</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div>
                
                </div>
            </div>
        )
    }
}

export default NavBar;