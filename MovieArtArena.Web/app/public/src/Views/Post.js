
import React from 'react';
import axios from 'axios';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addMovies: {
                title: '',
                description: '',
                type: '',
                price: '',
                imageUrl: '',
                modifiedBy: ''
            }
        }
    }

    handleInputChange = (ev) => {
        let addMovies = { ...this.state.addMovies };
        addMovies[ev.target.name] = ev.target.value;
        this.setState({ addMovies });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        let add = this.state.addMovies
        axios.post("http://localhost:65332/api/poster", add)
            .then(resp => {
                this.setState({
                    add: {}
                });
                console.log(resp);
            }, err => console.log(err));
    }

    render(){   
        return(
            <div className="container col-md-6">
              <form>
                  <div className="form-group">
                  <label>Title</label>
                  <input className="form-control" 
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={this.title}
                  onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-group">
                  <label>Description</label>
                  <input className="form-control" 
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.description}
                  onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-group">
                  <label>Type</label>
                  <input className="form-control" 
                  type="text"
                  name="type"
                  placeholder="Type"
                  value={this.type}
                  onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-group">
                  <label>Price</label>
                  <input className="form-control" 
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={this.price}
                  onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-group">
                  <label>ImageUrl</label>
                  <input className="form-control" 
                  type="text"
                  name="imageUrl"
                  placeholder="ImageUrl"
                  value={this.imageUrl}
                  onChange={this.handleInputChange}
                  />
                  </div>
                  <div className="form-group">
                  <label>ModifiedBy</label>
                  <input className="form-control" 
                  type="text"
                  name="modifiedBy"
                  placeholder="Mod by"
                  value={this.modifiedBy}
                  onChange={this.handleInputChange}
                  />
                  </div>
                  <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                  </form>
                </div>        
        )
    }
}

export default Post