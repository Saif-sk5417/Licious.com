import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  Divider,
  Heading,
  Spacer,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { SingleItem } from "./Singlecartitem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getChickenData, getCart } from "../Redux/action";
const bill_breakup_Box = {
  width: "90%",
  margin: "0 0 10px",
  backgroundColor: "#fff",
  border: " 1px dashed #979797",
  padding: "15px",
};
const bill_heading = {
  fontSize: "14px",
  fontWeight: "600",
};
const bill_breakup = {
  color: "#6d6e71",
  fontSize: "12px",
};
function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [SubTotal, setSubTotal] = useState(0);
  const [total, settotal] = useState(0);
  const Data = useSelector((store) => store.reducer.cart);
  const dispatch = useDispatch();

  //console.log("CARTTT===>", Data);
  useEffect(() => {
    dispatch(getCart());
    if (Data.length > 0) {
      const sub = Data.reduce((acc, el) => {
        return acc + el.Price;
      }, 0);
      setSubTotal(sub);

      settotal(sub + 200);
    }
  }, [dispatch, Data.length]);
  return (
    <>
      <Box>
        <Button
          ref={btnRef}
          bg="white"
          _hover={{ bg: "white" }}
          fontWeight="normal"
          leftIcon={
            <Image
              src="https://www.licious.in/img/rebranding/cart_icon.svg"
              w="25px"
              h="25px"
            ></Image>
          }
          onClick={onOpen}
        >
          Cart
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        size="sm"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        {/* <DrawerOverlay border="solid red" w="50%" /> */}
        <DrawerContent>
          <DrawerCloseButton color="white" size="lg" bg="grey" />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Box h="64px">
              <Text fontSize="20px" fontWeight="bold">
                Order Summary
              </Text>
            </Box>
            <Box h="36px" bg="green" ml="-20px" mr="-20px" color="white">
              <Text fontSize="13px" textAlign="center" pt="8px">
                ₹200 delivery charge applies
              </Text>
            </Box>
            <br />
            <Box h="36px" border="solid green" mb="20px">
              <Text fontSize="13px" textAlign="center" pt="8px">
                Congratulations! Here is Your Items
              </Text>
            </Box>
            {Data.map((el, i) => (
              <SingleItem
                key={el.id}
                Name={el.Name}
                quantity={el.quantity}
                Price={el.Price}
                Weight={el.weights}
                id={el.id}
                arrange={i + 1}
              />
            ))}
          </DrawerBody>

          <DrawerFooter
            backgroundColor="white"
            w="90%"
            margin="auto"
            display="block"
          >
            <Box
              style={bill_breakup_Box}
              color="black"
              maxWidth="387px"
              maxHeight="162px"
            >
              <Box style={bill_heading}>Bill Details</Box>
              <ul style={bill_breakup}>
                <li
                  className="subtotal"
                  style={{
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  Subtotal{" "}
                  <Box className="message">
                    <span>{SubTotal}</span>
                  </Box>
                </li>
                <li
                  className="delivery-charge"
                  style={{
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  Delivery Charge{" "}
                  <Box className="message">
                    <span> ₹200</span>
                  </Box>
                </li>
                <li
                  className="discount"
                  style={{
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  Discount{" "}
                  <Box className="message">
                    <span>0</span>
                  </Box>
                </li>
                <Divider />
                <li
                  className="total"
                  style={{
                    display: "flex",
                    fontWeight: "bold",
                    justifyContent: "space-between",
                  }}
                >
                  Total
                  <Box className="message">
                    <span>{total}</span>
                  </Box>
                </li>
              </ul>
            </Box>

            <Flex>
              <Box
                w="204px"
                p="4"
                color="black"
                fontSize="14px"
                fontWeight="bold"
              >
                Total : ₹ {total}
              </Box>
              <Spacer />

              <NavLink to="/Checkout">
                <Button
                  h="atuo"
                  w="197px"
                  bg="#e4003e"
                  padding="10px 0px 10px 0px"
                  variant="solid"
                  color="white"
                  _hover={{ bg: "#e4003e" }}
                >
                  Proceed to checkout
                </Button>
              </NavLink>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export { Cart };
