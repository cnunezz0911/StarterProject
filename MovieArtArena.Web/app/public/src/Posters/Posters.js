import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Posters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentWillMount = () => {
        this.getMovies();
    }

    getMovies = () => {
        axios.get("http://localhost:65332/api/poster/getall")
            .then(resp => {
                let movies = resp.data.items;
                this.setState({movies})
                console.log(resp);
                console.log(movies);
            })
    }

    render() {

        return (
            <div>
                
                {this.state.movies.map((movie) => 
                   <div key={movie.id}>
                   <p>{movie.title}</p>
                   <p>{movie.description}</p>
                   <p>{movie.type}</p>
                   <p>{movie.price}</p>
                   <img src={movie.imageUrl} />
                   <div>
                      
                       </div>
                      
                    </div>
                       
                )}    
                
        </div>
        );
}
}
export default Posters;