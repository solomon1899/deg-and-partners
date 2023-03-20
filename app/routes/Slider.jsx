import React, { useState } from "react";
// import "./Slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slider__item">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="slider__button slider__button--prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="slider__button slider__button--next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;