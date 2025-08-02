// src/components/CarouselSection.tsx
'use client'; // Add this line at the top
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const CarouselSection: React.FC = () => {
  return (
    <section className="carousel-section">
      <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/carousel/slide1.jpg" // Placeholder image 1
            alt="First slide"
            width={1920} // Adjust as needed
            height={600} // Adjust as needed
            layout="responsive"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/carousel/slide2.jpg" // Placeholder image 2
            alt="Second slide"
            width={1920} // Adjust as needed
            height={600} // Adjust as needed
            layout="responsive"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
