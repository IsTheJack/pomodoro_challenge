import React, { Component } from 'react';

// Presentational Components
import Display from './Display.jsx';
import PomodoroButton from './PomodoroButton.jsx';

// Helpers
import {
    minutesToSeconds,
    secondsToMilliseconds,
    formatToMinutesAndSeconds,
} from '../helpers/time';

export default class App extends Component {
    constructor(props) {
        super(props);

        // Binds
        this.initial = this.initial.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.startPomodoro = this.startPomodoro.bind(this);
        this.pausePomodoro = this.pausePomodoro.bind(this);
        this.stopPomodoro = this.stopPomodoro.bind(this);

        this.initial();
        this.state = {
            time: this.totalTime,
        };
    }

    // Set some internal initial values
    initial() {
        this.totalTime = minutesToSeconds(0.1);
        this.timeElapsed = 0;
    }

    handleAction() {
        // Pause unless interval is not defined
        if (this.interval) this.pausePomodoro();
        else this.startPomodoro()
    }

    startPomodoro() {
        this.interval = setInterval(
            () => {
                // If time is over
                if(this.state.time === 0) {
                    this.alertUser();
                    this.stopPomodoro();
                    return null;
                }

                this.timeElapsed++;
                this.setState({'time': this.totalTime - this.timeElapsed});
            },
            secondsToMilliseconds(1)
        );
    }

    pausePomodoro() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    stopPomodoro() {
        clearInterval(this.interval);
        this.interval = undefined;
        this.initial();
        this.setState({
            time: this.totalTime,
        });
    }

    alertUser() {
        alert('Its Over!!!');
    }

    render() {
        return (
            <div className="app">
                <Display time={formatToMinutesAndSeconds(this.state.time)} />

                <PomodoroButton handleClick={this.handleAction}>
                    Start
                </PomodoroButton>

                <PomodoroButton handleClick={this.stopPomodoro}>
                    Stop
                </PomodoroButton>
            </div>
        );
    }
}
