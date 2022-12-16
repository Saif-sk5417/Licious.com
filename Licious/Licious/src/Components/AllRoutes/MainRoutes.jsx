

import { Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { ChickenPage } from "../ChickenPage";
import { SeaFood } from "../SeaFoodPage";

const MainRoutes = () =>{
    return(
       <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Chicken" element={<ChickenPage />} />
        <Route path="/SeaFood" element={ <SeaFood />} />
       </Routes>
    )
}

export default MainRoutes