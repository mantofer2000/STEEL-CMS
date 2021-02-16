import React, { useState, useEffect } from 'react'
import ImagesCollection from './ImagesCollection';
import Auxiliary from '../../hoc/Auxiliary';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import classes from './ImageSlider.css'

// import PlantaCocaCola from '../../assets/images/PlantaCocaCola.png';

function ImageSlider(props){
  const [currentImage, setCurrentImage] = useState(0);
  const length = ImagesCollection.length;
  
  useEffect(() => {
    const slidesTimeout = setTimeout(() => nextSlide(), 3000)
    return() => clearTimeout(slidesTimeout)
  }, [currentImage]);

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    console.log('funco')
  };

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  if (!Array.isArray(ImagesCollection) || ImagesCollection.length <= 0) {
    return null;
  }

  return (
    <section className={classes.ImageSlider}>
      <FaArrowAltCircleLeft className={classes.LeftArrow} onClick={() => prevSlide()}/>
      <FaArrowAltCircleRight className={classes.RightArrow} onClick={() => nextSlide()}/>
      {ImagesCollection.map((item, index) => {
        return (
          <div className={index === currentImage ? classes.SlideActive : classes.Slide} key={index}>
            {index === currentImage && (<img className={classes.Image} src={item.image} alt="" />)}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;