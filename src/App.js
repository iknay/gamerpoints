import React from 'react';
import './App.css';
import { Navbar, Header, Carousel, CarouselVertical } from './components';

const App = () => {
    return(
        <div className='App'>
            <section className='testone-carousel gradient__bg'>
                <div>
                    <Navbar/>
                    <div className='div-margin'>
                        <Header/>
                        <Carousel/>
                    </div>
                </div>
            </section>
            <section className='testone-vertical gradient__bg'>
                <div>
                    <Navbar/>
                    <div className='div-margin'>
                        <CarouselVertical/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;