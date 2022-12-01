import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cuadro0 from './images/cuadro0.png';
import cuadro1 from './images/cuadro1.png';
import cuadro2 from './images/cuadro2.jpg';
import "./Carousel.css"




const IndividualIntervalsExample = () => {
    return (
        <>
        <h1>hola</h1>
        <div className='carouselContainer'>
        <Carousel className='carousel'>
            <Carousel.Item interval={4000}>
                <img
                    src={cuadro2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    src={cuadro1}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    src={cuadro0}
                        alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    );
}

export default IndividualIntervalsExample;