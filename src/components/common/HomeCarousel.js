import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/photo-big-1.jpg';

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={image1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://thumb.ibb.co/hcOQnf/photo-big-2.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://thumb.ibb.co/iYWT7f/photo-big-3.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;