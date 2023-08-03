import React, {useState, useRef, useEffect} from 'react';
import dota from '../../assets/dota.png';
import valorant from '../../assets/valorant.png';
import csgo from '../../assets/csgo.png';
import cod from '../../assets/cod.png';
import './carousel.css';

const Carousel = () => {

  return (
    <div className='gp__carousel-container gp__concave-top'>
      {/* scrollable */}
      <div className='gp__carousel gp__concave-bottom'>
        <img src={dota} alt='dota'/>
        <img src={valorant} alt='valorant'/>
        <img src={csgo} alt='csgo'/>
        <img src={cod} alt='cod'/>   
        <img src={cod} alt='cod'/>      
      </div>
    </div>
  )
}

export default Carousel