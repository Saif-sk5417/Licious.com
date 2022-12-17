

import { Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { ChickenPage } from "../ChickenPage";
import { SeaFood } from "../SeaFoodPage";
import { SingleProductPage } from "../SingleProductPage";

const MainRoutes = () =>{
    return(
       <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Chicken" element={<ChickenPage />} />
        <Route path="/SeaFood" element={ <SeaFood />} />
        <Route path="/Chicken/:id" element={<SingleProductPage />} />
        <Route path="/SeaFood/:id" element={ <SingleProductPage />} />
       </Routes>
    )
}

export default MainRoutes