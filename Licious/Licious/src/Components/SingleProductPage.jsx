import BreakFast from "./BreakFast";
import ProductPageImage from "./ProductPageImage";
import { SingleProductPageBox } from "./SingleProductPageBox";

const SingleProductPage = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <SingleProductPageBox />
      <ProductPageImage />
      <BreakFast title="You May Also Like" />
    </div>
  );
};

export default SingleProductPage;
