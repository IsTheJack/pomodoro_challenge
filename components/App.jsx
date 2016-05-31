import React, { Component } from 'react';

// Presentational Components
import Display from './Display.jsx';
import PomodoroButton from './PomodoroButton.jsx';

// Helpers
import {
    minutesToSeconds,
    secondsToMilliseconds,
} from '../helpers/time';

export default class App extends Component {
    constructor(props) {
        super(props);

        // Binds
        this.initial = this.initial.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);

        this.initial();
        this.state = {
            time: minutesToSeconds(25),
        };
    }

    initial() {
        this.totalTime = minutesToSeconds(25);
        this.timeElapsed = 0;
    }

    handleStart() {
        // Pause unless interval is not defined
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        } else {
            this.interval = setInterval(
                () => { 
                    this.timeElapsed++;
                    this.setState({'time': this.totalTime - this.timeElapsed});
                },
                secondsToMilliseconds(1)
            );
        }
    }

    handleStop() {
        clearInterval(this.interval);
        this.interval = undefined;
        this.initial();
        this.setState({
            time: this.totalTime,
        });
    }

    render() {
        return (
            <div className="app">
                <Display time={this.state.time} />

                <PomodoroButton handleClick={this.handleStart}>
                    Start
                </PomodoroButton>

                <PomodoroButton handleClick={this.handleStop}>
                    Stop
                </PomodoroButton>
            </div>
        );
    }
}
