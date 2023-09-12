import React, { useState, useEffect } from 'react';

const CarouselImages = () => {
  const images = [
    '/team/people.png',
    '/team/people.png',
    '/team/people.png',
    '/team/people.png',
    '/team/people.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(changeSlide, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="carousel-container flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item w-full"
          >
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselImages;
