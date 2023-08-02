import React from 'react';
import './header.css';
import Component3 from '../../assets/Component3.svg';

const Header = () => {
  return (
    <div className='gp__header'>
      <div className='gp__header-content'>
        <h1>FUN GAMES TO PLAY</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <button className='gp__button'>
        <span>EXPLORE MORE</span>
      </button>
      <div className='gp__ellipse'></div>
    </div>
  )
}

export default Header