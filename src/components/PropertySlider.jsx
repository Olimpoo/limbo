import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/PropertySlider.scss';

const Property = ({ images }) => (
  <Carousel>
    {images.map((image, index) => (
      <Carousel.Item key='index'>
        <img className='d-block w-100' src={image} alt='carousel-1' />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    ))}

    {/* <Carousel.Item>
      <img
        className='d-block w-100'
        src='holder.js/800x400?text=Second slide&bg=282c34'
        alt='Third slide'
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100'
        src='holder.js/800x400?text=Third slide&bg=20232a'
        alt='Third slide'
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
);

export default Property;