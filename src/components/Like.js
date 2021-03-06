/*A instagram like button, made with <3 by Dustch */

import React, {Component} from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'; //This component requires react-bootstrap to work!
import './Like.css'

class Like extends Component{
    constructor(props){
        super(props)
        this.state={
            isHovering: false,
            selected: false
        }
        this.HandleMouseOver = this.HandleMouseOver.bind(this);
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleMouseOver(){
        if(this.state.isHovering){
            this.setState({isHovering: false})
        }else{
            this.setState({isHovering: true})
        }
    }

    HandleClick(){
        if(this.state.selected){
            this.setState({selected: false})
        }else{
            this.setState({selected: true})
        }
    }

    render(){
        const tooltip = (
            <Tooltip id="tooltip">
              Like
            </Tooltip>
          );

        return(
            <div>
                <OverlayTrigger placement="top" overlay={tooltip} delayShow={300}>
                <i onMouseEnter={this.HandleMouseOver} 
                onMouseLeave={this.HandleMouseOver}
                onClick={this.HandleClick} 
                className={this.state.selected ? "fas fa-heart" : "far fa-heart"} //toggle empty or full heart on click
                style={(this.state.isHovering||this.state.selected) ? {color: 'red'} : {color: 'grey'}}//turns red either is hovered or selected
                ></i></OverlayTrigger>
            </div>
        )
    }
}

export default Like;