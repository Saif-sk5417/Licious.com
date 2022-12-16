import Footer from "../Components/Footer";
import { HomePart1 } from "../Components/HomePart1";
import { HomePart2 } from "../Components/HomePart2";

import Navbar from "../Components/Navbar";
const HomePage = () => {
  return (
    <div>
      <Navbar />

      <HomePart1 />
      <HomePart2 />
      <Footer />
    </div>
  );
};

export default HomePage;
