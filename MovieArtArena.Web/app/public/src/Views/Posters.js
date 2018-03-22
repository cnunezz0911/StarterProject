import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer/Footer';
import queryString from 'query-string';


class Posters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            addMovies: {
                title: '',
                description: '',
                type: '',
                price: '',
                imageUrl: '',
                id: ''
                
            }
        }

    }

    componentWillMount = () => {
        this.getMovies();
    }

    handleItem(id) {
        debugger;
         const urlParams = new URLSearchParams(location.search);
       
        console.log('btn');
        // window.location.href = "http://localhost:65332/Posters/?id=" + id;
    }

    // selectedItem = (id) => {
    //     debugger;
    //     this.setState({
    //         id: id
    //     });
    //     axios.get("http://localhost.65332/api/poster/" + id)
    //     .then(resp => {
    //         let arr = resp.data.item;
    //         let id = resp.data.item.id;
    //         this.setState({
    //             movieObj:{
    //             id: resp.data.item.id,
    //             title: resp.data.item.title,
    //             description: resp.data.item.description,
    //             type: resp.data.item.type,
    //             imageUrl: resp.data.item.imageUrl
    //             }
    //         });
    //       console.log(id, data);
    //     });
    // }

    getMovies = () => {
        axios.get("http://localhost:65332/api/poster/getall")
            .then(resp => {
                let movies = resp.data.items;
                this.setState({ movies })
                console.log(resp);
                console.log(movies);
            });
    }

    render() {
    
        return (
            <div className="container">
                <div className="container more">
                    <h2 className="movietitlefont">MoviePosters</h2>
                </div>
                <div className="row">
                    {this.state.movies.map((movie) =>
                        <div className=" row col-4" key={movie.id}>
                            <div className="container box">
                                <a><img href="/DetailPage"className="row ibox md-3 movies" src={movie.imageUrl} onClick={this.handleItem.bind(this, movie.id)}/></a>
                                <div className="title">{movie.title}</div>
                                <div className="description">{movie.description}</div>
                                <div className="price">{movie.price}</div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Posters;