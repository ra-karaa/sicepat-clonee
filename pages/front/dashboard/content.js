import Head from 'next/head';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <>
    <Head>
    <style>
        {`
        .carousel-item-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          
          .image-wrapper {
            flex: 1;
          }
          
          .content-wrapper {
            flex: 1;
          }
          
          .content {
            padding: 10px;
            background-color: #f8f8f8;
          }
          `}
    </style>
    </Head>
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-wrapper">
          {/* Div Image */}
          <div className="image-wrapper">
            <img
              className="d-block w-100"
              src="image.jpg"
              alt="Image"
            />
          </div>
          {/* Div Content */}
          <div className="content-wrapper">
            <div className="content">
              <h3>Content Title</h3>
              <p>Content description goes here</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
    </>    
  );
};

export default MyCarousel;
