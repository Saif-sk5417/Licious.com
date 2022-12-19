import BreakFast from "./BreakFast"
import Footer from "./Footer"
import Navbar from "./Navbar"
import ProductPageImage from "./ProductPageImage"
import { SingleProductPageBox } from "./SingleProductPageBox"



const SingleProductPage  = () =>{
    return (
        <div>
            <Navbar />
            <SingleProductPageBox />
            <ProductPageImage />
            <BreakFast title="You May Also Like"/>
            <Footer/>
        </div>
    )
}

export default SingleProductPage