import React, { Component } from 'react';

// Presentational Components
import Display from '../presentational/Display.jsx';
import PomodoroButton from '../presentational/PomodoroButton.jsx';
import UserAlert from '../presentational/UserAlert.jsx';

// Helpers
import {
    minutesToSeconds,
    secondsToMilliseconds,
    formatToMinutesAndSeconds,
} from '../../helpers/time';

export default class App extends Component {
    constructor(props) {
        super(props);

        // Binds
        this.initial = this.initial.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.startPomodoro = this.startPomodoro.bind(this);
        this.pausePomodoro = this.pausePomodoro.bind(this);
        this.stopPomodoro = this.stopPomodoro.bind(this);
        this.intervalReset = this.intervalReset.bind(this);
        this.userConfirmation = this.userConfirmation.bind(this);

        this.initial();
        this.state = {
            time: this.totalTime,
            timeIsOver: false,
        };
    }

    // Set some internal initial values
    initial() {
        const minutes = 25;
        this.totalTime = minutesToSeconds(minutes);
        this.timeElapsed = 0;
    }

    handleAction() {
        // Pause unless interval is not defined
        if (this.interval) this.pausePomodoro();
        else this.startPomodoro()
    }

    startPomodoro() {
        const logicOfInterval = () => {
            // Notice to user if time is over
            if(this.state.time === 0) {
                this.alertUser();
                this.stopPomodoro();
                return null;
            }

            this.timeElapsed++;
            this.setState({'time': this.totalTime - this.timeElapsed});
        };

        this.interval = setInterval(
            logicOfInterval,
            secondsToMilliseconds(1)
        );
    }

    pausePomodoro() {
        this.intervalReset();
    }

    stopPomodoro() {
        this.intervalReset();
        this.initial();
        this.setState({
            time: this.totalTime,
        });
    }

    intervalReset() {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    alertUser() {
        this.setState({
            timeIsOver: true,
        });
    }

    // Callback for message component
    userConfirmation() {
        console.log('xablau');
        this.setState({
            timeIsOver: false,
        });
    }

    render() {
        return (
            <div className="app">
                <h1 className="app-title">Pomodoro</h1>

                <UserAlert
                    handleClick={this.userConfirmation}
                    textButton="Ok"
                    message="The Time is Over ;)"
                    visible={this.state.timeIsOver}
                />

                <PomodoroButton handleClick={this.handleAction}>
                    <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                </PomodoroButton>

                <PomodoroButton handleClick={this.stopPomodoro}>
                    <i className="fa fa-stop-circle-o" aria-hidden="true"></i>
                </PomodoroButton>

                <Display time={formatToMinutesAndSeconds(this.state.time)} />
            </div>
        );
    }
}
