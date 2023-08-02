import React from 'react';
import csgo from '../../assets/csgo.png';
import dota2 from '../../assets/DOTA2.png';
import './carouselvertical.css';

const CarouselVertical = () => {
  return (
    <div className='gp__carouselv-container'>
      <div className='gp__carouselv'>
        <img src={dota2} alt='dota'/>
        <img src={csgo} alt='csgo'/>
      </div>
    </div>
  )
}

export default CarouselVertical