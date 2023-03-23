// import React , {useState} from 'react'

// const MyCarousel = () => {

//     const [index, setIndex] = useState(0);

//     const image = "https://www.degandpartners.com/wp-content/uploads/2018/09/slide2.jpg" ;
//   return (
//     <div>
//         <div className="carouselImage" style={{backgroundImage : `url(${image})`}}></div>
//     </div>
//   )
// }

// export default MyCarousel

import React, { useState, useEffect } from "react";

const MyCarousel = () => {
  const images = [
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide0.jpg",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide.png",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide2.jpg",
  ];

  const titles = ["Comptabilité", "Fiscalité", "Optimisation"];
  const texts = [
    `Pour nos clients, l’information chiffrée est indispensable à la plupart de leurs prises de décisions.
  Elle doit être disponible rapidement, pertinente et fiable. `,
    `Une préoccupation majeure de notre cellule Gestion et Comptabilité concerne la fiscalité de ses clients. Notre cellule met alors un point d’honneur à s’acquitter systématiquement de cette tâche. `,
    `Notre cabinet se positionne comme un spécialiste en optimisation fiscale et s'interrogera sur les mécanismes à mettre en place afin d’optimiser la situation fiscale de ses clients autour de trois axes majeurs : le pilier professionnel, le pilier patrimonial, le pilier social. `,
  ];
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState(titles[index]);
  const [text, setText] = useState(texts[index]);

  // const handleButtonClick = (imageIndex, titleIndex , textIndex) => {
  //   setIndex(imageIndex);
  //   setTitle(titles[titleIndex]);
  //   setText(texts[textIndex]);
  // };

  const handleButtonClick = (index, titleIndex, textIndex) => {
    setIndex(index);
    setTitle(titles[titleIndex]);
    setText(texts[textIndex]);
  };

  const style = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
      setTitle(titles[(index + 1) % titles.length]);
      setText(texts[(index + 1) % texts.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, titles]);

  return (
    <div className="carousel-container">
      <div className="carouselImage" style={style}>
        {/* <h1 className="carouselTitle">{titles[index]}</h1> */}
        <h1
          key={index}
          className={`carouselTitle ${index !== 0 ? "visible" : ""}`}
        >
          {titles[index]}
        </h1>
        <p className="carouselText">{texts[index]}</p>
        <div className="carouselButtons">
          {images.map((image, i) => (
            <button
              key={i}
              className="carousel-button"
              onClick={() => handleButtonClick(i, i, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;

