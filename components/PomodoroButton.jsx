import React, { Component } from 'react';

export default class PomodoroButton extends Component {
    render() {
        return (
            <button
                className="pomodoro-button"
                onClick={this.props.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}
