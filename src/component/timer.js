import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import './style.css'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    const endDate = `${this.props.date} ${this.props.time}`

    // Initialize countdown for the first time
    this.setState(this.calculateCountdown(endDate))

    // Update every second
    this.interval = setInterval(() => {
      const countdown = this.calculateCountdown(endDate);
      countdown ? this.setState(countdown) : this.stop();
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <div className="mx-10 my-auto pb-3 bg-fuchsia-400 ">
        {countDown.years > 0 && (
          <span className="inline-block">
            <span className="inline-block  mx-auto my-10  flex-col">
              <strong className='text-4xl inline-block  mx-auto my-10  flex-col'>{this.addLeadingZeros(countDown.years)}</strong>
              <span>{countDown.years === 1 ? 'Year' : 'Years'}</span>
            </span>
          </span>
        )}

        <span className="inline-block">
          <span className="flex  mx-auto my-10  flex-col">
            <strong className='text-4xl text-white inline-block  mx-auto my-10  flex-col'>{this.addLeadingZeros(countDown.days)}</strong>
            <span className='text-4xl text-white inline-block  mx-auto my-10  flex-col'>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>{countDown.hours === 1 ? 'Hour' : 'Hours'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>Min</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
      </div>
    )
  }
}

Timer.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

const defaultDate = {
    
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear()+ 1,
}

Timer.defaultProps = {
  date: `${defaultDate.month}/${defaultDate.day}/${defaultDate.year}`,
  time: '23:59'
}

export default Timer
