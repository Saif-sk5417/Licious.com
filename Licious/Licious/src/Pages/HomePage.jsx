import BestSeller from "../Components/BestSeller";
import BreakFast from "../Components/BreakFast";

import Gotottop from "../Components/Gotottop";
import { HomePart1 } from "../Components/HomePart1";
import { HomePart2 } from "../Components/HomePart2";

const HomePage = () => {
  return (
    <div style={{ marginTop: "130px" }}>
      <HomePart1 />
      <BreakFast title="Breakfast & Snacking Specials" />
      <HomePart2 />

      <Gotottop />
    </div>
  );
};

export default HomePage;
