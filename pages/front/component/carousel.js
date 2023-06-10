import React from 'react';
import { Carousel } from 'react-bootstrap';
import Head from 'next/head';

const CustomCarousel = () => {  
  return (
    <>
    <Head>
        <style>{`    
          .imgage{
            height: 100px;            
          }     
        `}</style>
      </Head>
      <Carousel indicators={false}>
      <Carousel.Item>
        <img
          className="w-100"
          src="https://www.sicepat.com/images/banner/location.png"
          alt="First slide"
          style={{ height: '600px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="https://www.sicepat.com/images/banner/service.png"
          alt="Second slide"   
          style={{ height: '600px' }}       
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="https://www.sicepat.com/images/banner/service.png"
          alt="Third slide"
          style={{ height: '600px' }}
        />
      </Carousel.Item>
    </Carousel>
    </>    
  );
};

export default CustomCarousel;
