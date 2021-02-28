import React, { Component } from 'react';
import TimerButton from './TimerButton';
import './PomodoroApp.css'

class PomodoroApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 25*60,
            play: true
        };

        this.setPomodoroInterval = this.setSeconds.bind(this, 25*60);
        this.setShortBreakInterval = this.setSeconds.bind(this, 5*60);
        this.setLongBreakInterval = this.setSeconds.bind(this, 20*60);
        this.playPause = this.playPause.bind(this);
    }

    setSeconds(sec) {
        this.setState(state => ({
            seconds: sec
        }));
    }

    playPause() {
        if(this.state.play) {
            this.setState(state => ({
                play: false
            }));
            clearInterval(this.interval);
        } else {
            this.setState(state => ({
                play: true
            }));
            this.interval = setInterval(() => this.tick(), 1000);
        }
    }

    tick() {
        this.setSeconds(this.state.seconds -1);

        if (this.state.seconds <= 0) {
            clearInterval(this.interval);
            this.setState(state => ({
                play: false
            }));
            alert("Timer finished.");
        }
    }

    formatTime(seconds) {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;
        return mins + ":" + secs;
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const seconds = this.state.seconds;
        const isPlaying = this.state.play;
        const timestamp = this.formatTime(seconds)

        document.title = timestamp + " Pomodoro";

        return (
            <div className="PomodoroApp">
                <div className="Timer"><div>{timestamp}</div></div>
                <div className="Controls">
                    <TimerButton disabled={seconds <= 0} text={isPlaying ? "Pause" : "Play"} handleClick={this.playPause}/>
                    <TimerButton text="25 Min." handleClick={this.setPomodoroInterval}/>
                    <TimerButton text="5 Min." handleClick={this.setShortBreakInterval}/>
                    <TimerButton text="20 Min." handleClick={this.setLongBreakInterval}/>
                </div>
            </div>
        );
    }
}

export default PomodoroApp;
