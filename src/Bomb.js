import React, {Component} from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft === 0) {
      return (
        <h1>
          Boom!
        </h1>
      )
    } else {
      return (
        <h2>
          {this.state.secondsLeft} seconds left before I go boom!
        </h2>
      )
    }
  }
}
