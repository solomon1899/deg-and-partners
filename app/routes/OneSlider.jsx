import React from 'react'
import Slider from 'react-slick'

const OneSlider = () => {
  return (
    <div className='oneSlider-container'>
        <OneItemSlider/>

    </div>
  )
}



const OneItemSlider = () => {

  const settings = {
    dots: true, // Show dots
    arrows: false, // Hide arrows
    infinite: true, // Allow infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://example.com/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="https://example.com/image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="https://example.com/image3.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};


export default OneSlider
