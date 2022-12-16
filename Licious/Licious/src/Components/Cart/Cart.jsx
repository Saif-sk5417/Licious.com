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

  return (
    <>
      <Box>
        <Button
          ref={btnRef}
          bg="white"
          _hover={{ bg: "white" }}
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
          <DrawerCloseButton color="white" size="lg" />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Box h="64px">
              <Text fontSize="20px" fontWeight="bold">
                Order Summary
              </Text>
            </Box>
            <Box h="36px" bg="green" ml="-20px" mr="-20px" color="white">
              <Text fontSize="13px" textAlign="center" pt="8px">
                Your cart value is less than ₹399 & delivery charge applies
              </Text>
            </Box>
            <br />
            <Box h="36px" border="solid green">
              <Text fontSize="13px" textAlign="center" pt="8px">
                Congratulations! You've saved ₹46
              </Text>
            </Box>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
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
                    <span>299.02</span>
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
                    <span>39</span>
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
                    <span>338.02</span>
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
                Total : ₹ 150
              </Box>
              <Spacer />

              <Button
                h="atuo"
                w="197px"
                bg="#e4003e"
                variant="solid"
                _hover={{ bg: "#e4003e" }}
              >
                Proceed to checkout
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export { Cart };
