import React, {Component} from "react";

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 180 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Пройшло секунд: {this.state.seconds}
        </div>
      );
    }
  }
  
export default Timer;