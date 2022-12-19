import BestSeller from "../Components/BestSeller";
import BreakFast from "../Components/BreakFast";
import Footer from "../Components/Footer";
import Gotottop from "../Components/Gotottop";
import { HomePart1 } from "../Components/HomePart1";
import { HomePart2 } from "../Components/HomePart2";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomePart1 />
      <BreakFast title='Breakfast & Snacking Specials' />
      <HomePart2 />
      <Footer />
      <Gotottop />
    </div>
  );
};

export default HomePage;
