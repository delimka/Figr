import React, { useState, useEffect } from 'react';
import './ImageSlider.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ images, customStyle }: { images: string[], customStyle: React.CSSProperties }) => {
    const [current, setCurrent] = useState(0);
  const slides = Object.values(images);
  const length = slides.length;

  useEffect(() => {
    // Preload images
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide;
    });
  }, [slides]);
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }



  return (
    <section className='slider'> 
     <div className='left-click-area'onClick={prevSlide}> <FaArrowAltCircleLeft className='left-arrow'  /></div>
     <div className='right-click-area'onClick={nextSlide}> <FaArrowAltCircleRight className='right-arrow'  /></div>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={slide} alt='travel image' className='image'  style={customStyle}/>}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;