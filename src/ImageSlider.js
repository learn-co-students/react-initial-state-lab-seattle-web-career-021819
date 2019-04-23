// your ImageSlider code here!
import React, {Component} from 'react'

class ImageSlider extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    let {currentSlideIndex} = this.state;
    return `I am on slide ${currentSlideIndex}`;
  }
}

export default ImageSlider;
