import React, { useState, useEffect } from 'react';
//import './Slideshow.css';
import './Home.css';
import B1 from '../Assets/B1.jpg'
const images = [
  //require('../Assets/B1.jpg'),
//  require('./images/image2.jpg'),
  //require('./images/image3.jpg'),
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="slideshow-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Home