import React, {Component} from 'react';
import './Header.css'

class Header extends Component{

    render(){
        return(
            <div className="user">
                
                    <img src={this.props.profile_pic} alt="profile pic"></img>
                
                
                <span>
                    <span className="fullname">{this.props.fullname}</span><span className="date">{this.props.date}</span>
                    <span className="username">{this.props.username}</span>
                </span>
            </div>
        )
    }
}

export default Header;