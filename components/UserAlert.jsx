import React, { Component } from 'react';

export default class UserAlert extends Component {
    render() {
        return (
            <div
                className="user-alert"
                style={{
                    display: this.props.visible? 'block': 'none'
                }}
            >
                <div className="message-box">
                    <p>{this.props.message}</p>
                    <button onClick={this.props.handleClick}>{this.props.textButton}</button>
                </div>
            </div>
        );
    }
}
