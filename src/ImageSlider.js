// your ImageSlider code here!
import React, { Component } from 'react';


class ImageSlider extends Component {
  constructor(props){
    super(props)
    this.state ={
      currentSlideIndex: 0
    }
  }

  render(){

    return (
      <div>
        <span>I am on slide {this.state.currentSlideIndex}</span>
      </div>
    )
  }

}

export default ImageSlider;
