import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    'https://via.placeholder.com/600x400/1',
    'https://via.placeholder.com/600x400/2',
    'https://via.placeholder.com/600x400/3',
    'https://via.placeholder.com/600x400/4',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex justify-center">
        <img src={images[currentIndex]} alt="Main" className="w-full h-auto rounded-lg max-h-60 object-cover" />
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 rounded-lg cursor-pointer transition-transform duration-300 ${index === currentIndex ? 'scale-110' : 'scale-95'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        Prev
      </button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        Next
      </button>
    </div>
  );
};

export default Carousel;
