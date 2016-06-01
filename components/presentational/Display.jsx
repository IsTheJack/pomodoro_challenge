import React, { Component } from 'react';

export default class Display extends Component {
    render() {
        return (
            <div className="display">
                <h1>{this.props.time}</h1>
            </div>
        );
    }
}
