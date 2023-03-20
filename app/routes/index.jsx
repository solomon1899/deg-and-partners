import Slider from "./Slider";

export default function Home() {
  const images = [
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide2.jpg",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide0.jpg",
    "https://www.degandpartners.com/wp-content/uploads/2018/09/slide.png",
  ];
  return (
    <>
    <Slider images={images}/>
    <h1 className="homepageTitle"> homePage </h1>
    </>
  );
}
