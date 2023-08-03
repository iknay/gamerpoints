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
        <img src={dota} alt='DOTA'/>
        <img src={valorant} alt='Valorant'/>
        <img src={csgo} alt='CSGO'/>
        <img src={cod} alt='Call of Duty'/>   
        <img src={cod} alt='Call of Duty'/>      
      </div>
    </div>
  )
}

export default Carousel