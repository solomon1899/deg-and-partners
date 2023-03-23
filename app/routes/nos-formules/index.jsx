import React, { useState, useRef, useEffect } from "react";
import Link from '@remix-run/node'
import Slider from "react-slick";

const index = () => {
  return (<div className="movingItemsCarousel">
        <h1>Vous etes</h1>
    <SliderComp />
  </div>)
};

export default index;

export const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const data = [
    { id: 1, title: "Slide 1", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus" },
    { id: 2, title: "Slide 2", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 3, title: "Slide 3", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 4, title: "Slide 4", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 5, title: "Slide 5", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 6, title: "Slide 6", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 7, title: "Slide 7", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 8, title: "Slide 8", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
    { id: 9, title: "Slide 9", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "en savoir plus"},
  ];

  return (
<>
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.id} className='movingItem'>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <a  style={{cursor : 'pointer'}} href='https://www.comptabiliteconsultant.be/' >{item.link}</a> 
        </div>
      ))}
    </Slider>
    </>
  );
};
