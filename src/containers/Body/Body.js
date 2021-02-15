import React, { Component } from 'react'
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Auxiliary from '../../hoc/Auxiliary';

class Body extends Component {
  render () {
    return (
      <Auxiliary>
        <ImageSlider></ImageSlider>
        <p>Carrousel 1</p>
        <p> Body 1</p>
        <p>Carrousel 2</p>
        <p>Body 2</p>
        <p>Schedule</p>
        <p>Contact Me</p>
      </Auxiliary>
    );
  }
}

export default Body;