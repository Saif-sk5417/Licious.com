import Footer from "../Components/Footer";
import { HomePart1 } from "../Components/HomePart1";
import { HomePart2 } from "../Components/HomePart2";
import { Cart } from "../Components/Cart/Cart";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ChakraProvider>
        <Cart />
      </ChakraProvider>
      <HomePart1 />
      <HomePart2 />
      <Footer />
    </div>
  );
};

export default HomePage;
