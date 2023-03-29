import Blog from "./Blog";
import Formules from "./Formules";
import InfoBoxes from "./InfoBoxes";

import Introduction from "./introduction";
import MultipleSlider from "./MultipleSlider";
import MyCarousel from "./MyCarousel";

export default function Home() {
  return (
    <>
      <MyCarousel />
      <MultipleSlider />
      <Introduction />
      <Formules />
      <Blog />
      <InfoBoxes/>
    </>
  );
}
