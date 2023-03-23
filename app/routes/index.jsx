import Blog from "./Blog";
import Formules from "./Formules";

import Introduction from "./introduction";
import MyCarousel from "./MyCarousel";

export default function Home() {
  return (
    <>
      <MyCarousel />
      <Introduction />
      <Formules />
      <Blog />
    </>
  );
}
