import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCart } from "../Redux/ProductReducer/action";

const CartCounter = () => {
  //   const cart = useSelector((store) => store.reducer.cart);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (cart?.length === 0) {
  //       dispatch(fetchCart());
  //     }
  //   }, [cart?.length, dispatch]);

  return (
    <Box
      background="
    #d11243"
      textColor={"white"}
      borderRadius="50%"
      width="17px"
      height="20px"
      textAlign="center"
      paddingBottom="22px"
      //   textSize="10px"
    >
      {/* {cart?.length ? cart.length : 0} */}
      {0}
    </Box>
  );
};

export default CartCounter;
