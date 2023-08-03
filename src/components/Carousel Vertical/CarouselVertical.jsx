import React, { useState } from 'react';
import csgo from '../../assets/csgo.png';
import dota2 from '../../assets/DOTA2.png';
import arrowup from '../../assets/ArrowUp.svg';
import arrowdown from '../../assets/ArrowDown.svg';
import './carouselvertical.css';

const CarouselVertical = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [dota2, csgo];
  const imageHeight = 200;

  const handleUpArrowClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDownArrowClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='gp__carouselv-container'>
      <div className='arrows top'>
        <button onClick={handleUpArrowClick} disabled={images.length <= 1}>
          <img src={arrowup} alt='Up' />
        </button>
      </div>
      <div className='gp__carouselv'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
            style={{ height: `${imageHeight}px` }}
          />
        ))}
      </div>
      <div className='arrows bottom'>
        <button onClick={handleDownArrowClick} disabled={images.length <= 1}>
          <img src={arrowdown} alt='Down' />
        </button>
      </div>
    </div>
  );
};

export default CarouselVertical;
