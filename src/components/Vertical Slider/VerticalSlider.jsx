import React, { useState, useEffect } from 'react';
import csgo from '../../assets/csgo.png';
import dota2 from '../../assets/DOTA2.png';
import dota from '../../assets/dota.png';
import arrowup from '../../assets/ArrowUp.svg';
import arrowdown from '../../assets/ArrowDown.svg';
import './verticalslider.css';

const images = [dota2, csgo, dota];

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="vertical-carousel">
      <button className="arrow-button up" onClick={handleUpClick}>
        <img src={arrowup} alt="Arrow up" />
      </button>
      <div className="carousel-container">
        <img
          className="active-image"
          src={images[currentIndex]}
          alt={`Image ${currentIndex}`}
        />
        <img
          className="next-image"
          src={images[(currentIndex + 1) % images.length]}
          alt={`Image ${(currentIndex + 1) % images.length}`}
        />
      </div>
      <button className="arrow-button down" onClick={handleDownClick}>
        <img src={arrowdown} alt="Arrow down" />
      </button>
    </div>
  );
};

export default VerticalSlider;

