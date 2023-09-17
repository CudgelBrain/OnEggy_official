import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = ['../home/awards/image 1.png', '../home/awards/image 2.png', '../home/awards/image 3.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
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

export default Carousel;
