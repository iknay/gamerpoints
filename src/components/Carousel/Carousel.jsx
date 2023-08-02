import React, {useState, useRef, useEffect} from 'react';
import dota from '../../assets/dota.png';
import valorant from '../../assets/valorant.png';
import csgo from '../../assets/csgo.png';
import cod from '../../assets/cod.png';
import godofwar from '../../assets/godofwar.png';
import './carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      carouselRef.current.scrollLeft += 100;
    } else if (delta < 0) {
      carouselRef.current.scrollLeft -= 100;
    }
  };

  useEffect(() => {
    carouselRef.current.addEventListener('wheel', handleScroll);
    return () => {
      carouselRef.current.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className='gp__carousel-container'>
      <div className='gp__ellipse1'></div>
      <div className='gp__carousel' ref={carouselRef}>
        <img src={dota} alt='dota'/>
        <img src={valorant} alt='valorant'/>
        <img src={csgo} alt='csgo'/>
        <img src={cod} alt='cod'/>
        <img src={godofwar} alt='god of war'/>
      </div>
      <div className='gp__ellipse2'></div>
    </div>
  )
}

export default Carousel