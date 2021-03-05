import React, { Component } from 'react';
import TimerButton from './TimerButton';
import './PomodoroApp.css'
import bell from './audio/bell.mp3';

class PomodoroApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 25*60,
            intervalName: "Work",
            play: true
        };

        this.setWorkInterval = this.setInterval.bind(this, {name: "Work", sec:25*60});
        this.setShortBreakInterval = this.setInterval.bind(this, {name: "Short Break", sec:5*60});
        this.setLongBreakInterval = this.setInterval.bind(this, {name: "Long Break", sec:20*60});
        this.playPause = this.playPause.bind(this);
    }

    setInterval(interval) {
        this.setState(state => ({
            seconds: interval.sec,
            intervalName: interval.name
        }));
        this.sound.pause();
        this.sound.currentTime = 0;
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
        this.setState(state => ({seconds: this.state.seconds-1}))

        if (this.state.seconds <= 0) {
            clearInterval(this.interval);
            this.setState(state => ({
                play: false
            }));
            this.sound.play();
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
        this.sound = new Audio(bell);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const seconds = this.state.seconds;
        const isPlaying = this.state.play;
        const intervalName = this.state.intervalName;
        const timestamp = this.formatTime(seconds)

        document.title = timestamp + " Pomodoro";

        return (
            <div className="PomodoroApp">
                <div className="Timer">
                    <div className="IntervalName">{intervalName}</div>
                    <div className="Timestamp">{timestamp}</div>
                </div>
                <div className="Controls">
                    <TimerButton disabled={seconds <= 0} text={isPlaying ? "Pause" : "Play"} handleClick={this.playPause}/>
                    <TimerButton text="25 Min." handleClick={this.setWorkInterval}/>
                    <TimerButton text="5 Min." handleClick={this.setShortBreakInterval}/>
                    <TimerButton text="20 Min." handleClick={this.setLongBreakInterval}/>
                </div>
            </div>
        );
    }
}

export default PomodoroApp;
