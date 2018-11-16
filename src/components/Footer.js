import React, {Component} from 'react'
import Like from './Like'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
        <div className="Footer">
            <Like/>
        </div>
        )
    }
}

export default Footer;