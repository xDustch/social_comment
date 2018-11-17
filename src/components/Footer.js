import React, {Component} from 'react'
import Like from './Like'
import Retweet from './Retweet'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
        <div className="Footer">
            <div className="divider"/>
            <Like/>
            <div className="divider"/>
            <Retweet/>
        </div>
        )
    }
}

export default Footer;