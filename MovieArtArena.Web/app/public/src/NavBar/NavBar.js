import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                </nav>
                <div>
                {this.props.children}
                    </div>               
                </div>
        )
    }
}

export default NavBar;