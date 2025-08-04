// src/components/Hero.tsx
'use client';

import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

interface Slide {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  image: string;
}

interface HeroProps {
  slides: Slide[];
}

export default function Hero({ slides }: HeroProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="d-flex align-items-center justify-content-center text-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '800px',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="display-4 fw-bold">{slide.title}</h1>
                <p className="lead fw-normal mb-4">{slide.subtitle}</p>
                <Button variant="primary" href={slide.button_link} size="lg">
                  {slide.button_text}
                </Button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
