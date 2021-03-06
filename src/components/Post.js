import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import pic from '../palpatine.jpg'
import './Post.css'

class Post extends Component {
    render(){
        return(
            <div className="Post">
                <Header fullname="Sheev Palpatine" username="@theSenate" profile_pic={pic} date="3h"/>
                <p className="content">
                    Did you ever hear the tragedy of <strong>Darth Plagueis The Wise</strong>? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. <strong>Ironic.</strong> He could save others from death, but not himself.
                </p>
                <Footer/>
            </div>
        )
    }
}

export default Post;