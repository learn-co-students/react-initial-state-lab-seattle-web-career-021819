// your Bomb code here!
import React, { Component } from "react";

class Bomb extends Component {
  constructor(props){
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    const { secondsLeft } = this.state;
    return secondsLeft > 0 ? `${secondsLeft} seconds left before I go boom!` : "Boom!";
  }
}

export default Bomb;
