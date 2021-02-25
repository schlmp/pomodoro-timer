import React, { Component } from 'react';
import './TimerButton.css'

export default class TimerButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick() {
        this.props.handleClick();
    }
    
    render() {
        return (
            <button className="TimerButton" onClick={this.handleClick}>
                {this.props.text}
            </button>
        )
    }
}

