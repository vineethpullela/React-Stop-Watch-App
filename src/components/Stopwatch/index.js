import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, currentSeconds: 0}

  renderMinutes = () => {
    const {currentSeconds} = this.state
    const minutes = Math.floor(currentSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {currentSeconds} = this.state
    const seconds = Math.floor(currentSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  runClock = () => {
    this.setState(prevState => ({
      currentSeconds: prevState.currentSeconds + 1,
    }))
  }

  startButton = () => {
    this.intervalId = setInterval(this.runClock, 1000)
  }

  stopButton = () => {
    clearInterval(this.intervalId)
  }

  restartButton = () => {
    this.setState({currentSeconds: 0})
    clearInterval(this.intervalId)
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="clock-icon"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="timer">{displayTime}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="success button"
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                type="button"
                className="danger button"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="warning button"
                onClick={this.restartButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
