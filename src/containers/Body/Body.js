import React, { Component } from 'react'
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Auxiliary from '../../hoc/Auxiliary';

class Body extends Component {
  render () {
    return (
      <Auxiliary>
        <ImageSlider />
        <p> Cards 1</p>
        <ImageSlider />
        <p>Card 2</p>
        <p>Schedule</p>
        <p>Contact Me</p>
      </Auxiliary>
    );
  }
}

export default Body;