import React, {Component} from 'react';
import './Header.css'

class Header extends Component{

    render(){
        return(
            <div className="card">
                <div className="img-container">
                    <img src={this.props.profile_pic} alt="profile pic"></img>
                </div>
                
                <span>
                    <h1>{this.props.fullname}</h1>
                    <h5>{this.props.username}</h5>
                </span>
            </div>
        )
    }
}

export default Header;