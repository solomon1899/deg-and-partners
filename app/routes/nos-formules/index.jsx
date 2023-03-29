import Slider from "react-slick";

const index = () => {
  return (<div className="movingItemsCarousel">
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
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    { id: 1, title: "Artiste et creatif", image: "https://www.degandpartners.com/wp-content/uploads/2021/04/artist-80x82.png" , link : "http://www.art-consult.be/"},
    { id: 2, title: "Association Culturelle", image: "https://www.degandpartners.com/wp-content/uploads/2021/04/asso-cul-80x84.png" , link : "http://www.art-consult.be/" },
    { id: 3, title: "Medecin", image: "https://www.degandpartners.com/wp-content/uploads/2021/03/stéthoscope@4x-80x97.png" , link : "http://comptabilitemedecin.be/"},
    { id: 4, title: "Dentiste", image: "https://www.degandpartners.com/wp-content/uploads/2021/03/dent@4x-80x86.png" , link : "http://www.comptabilitedentiste.be/"},
    { id: 5, title: "Veterinaire", image: "https://www.degandpartners.com/wp-content/uploads/2021/03/pets_2@4x-80x76.png" , link : "http://www.comptabiliteveterinaire.be/"},
    { id: 6, title: "Consultant", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/consultant-icon-80x80.png" , link : "https://www.comptabiliteconsultant.be/"},
    { id: 7, title: "Avocat", image: "https://www.degandpartners.com/wp-content/uploads/2022/01/avocats-icon-80x89.png" , link : "http://comptabiliteavocat.be/"},
  ];

  return (
<>
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.id} className='movingItem'>
          <img src={item.image} alt={item.title} style={{width : 40 , height : 40}} />
          <h3 style={{fontSize : 18 , fontFamily : "Poppins" , textAlign : "center"}}>{item.title}</h3>
          <a  className="item-link-redirect" href={item.link} >en savoir plus</a>
        </div>
      ))}
    </Slider>
    </>
  );
};
