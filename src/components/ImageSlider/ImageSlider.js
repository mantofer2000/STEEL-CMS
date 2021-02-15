import React, { useState } from 'react'
import ImagesCollection from './ImagesCollection';
import Auxiliary from '../../hoc/Auxiliary';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import classes from './ImageSlider.css'

// import PlantaCocaCola from '../../assets/images/PlantaCocaCola.png';

function ImageSlider(props){
  const [currentImage, setCurrentImage] = useState(0);
  const length = ImagesCollection.length;
  
  return (
    <Auxiliary className={classes.ImageSlider}>
      <FaArrowAltCircleLeft className={classes.LeftArrow} />
      <FaArrowAltCircleRight className={classes.RightArrow} />
      {ImagesCollection.map((item, index) => {
        return (
          <img className={classes.Image} src={item.image} alt="" ></img>
        );
      })}
    </Auxiliary>
  );
};

export default ImageSlider;