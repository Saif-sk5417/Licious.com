import { ChakraProvider } from "@chakra-ui/react";
import BreakFast from "./BreakFast";
import ProductPageImage from "./ProductPageImage";
import { SingleProductPageBox } from "./SingleProductPageBox";

const SingleProductPage = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <ChakraProvider>
        <SingleProductPageBox />
      </ChakraProvider>
      <ProductPageImage />
      <BreakFast title="You May Also Like" />
    </div>
  );
};

export default SingleProductPage;
