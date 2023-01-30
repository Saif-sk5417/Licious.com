import { Box, ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import BestSeller from "../BestSeller";
import { CheckoutPage } from "../CheckoutPage";
import { ChickenPage } from "../ChickenPage";
import { PaymentPage } from "../PaymentPage";
import { SeaFood } from "../SeaFoodPage";
import SingleProductPage from "../SingleProductPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Chicken" element={<ChickenPage />} />
      <Route path="/SeaFood" element={<SeaFood />} />
      <Route path="/Chicken/:id" element={<SingleProductPage />} />
      <Route path="/SeaFood/:id" element={<SingleProductPage />} />

      <Route
        path="/Checkout"
        element={
          <ChakraProvider>
            <Box mt="150px">
              <CheckoutPage />
            </Box>
          </ChakraProvider>
        }
      />

      <Route path="/Payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default MainRoutes;
