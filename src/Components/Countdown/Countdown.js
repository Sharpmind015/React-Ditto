import React from "react";
import "./Countdown.css";

let timeleft =
    new Date("Jul 25, 2031 16:37:52").getTime() - new Date().getTime(),
  day = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
  hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minute = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
  second = Math.floor((timeleft % (1000 * 60)) / 1000);

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { day: day, hour: hour, min: minute, sec: second };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.changeDate(
          new Date("Jul 25, 2031 16:37:52").getTime() - new Date().getTime()
        ),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  changeDate(timeleft) {
    this.setState({
      day: Math.floor(timeleft / (1000 * 60 * 60 * 24)),
      hour: Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      min: Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
      sec: Math.floor((timeleft % (1000 * 60)) / 1000)
    });
  }
  render() {
    return (
      <section id="countdown" className="mt-5 py-4">
        <div className="container">
          <h3 className="text-center">Our app launches in:</h3>
          <div className="progress mx-auto active">
            <div
              className="progress-bar progress-bar-striped active"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "40%" }}
            />
          </div>
          <div className="countdown mt-3 text-center">
            <h5>
              <span>{this.state.day}d</span>
              <span>{this.state.hour}h</span>
              <span>{this.state.min}m</span>
              <span>{this.state.sec}s</span>
            </h5>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;
