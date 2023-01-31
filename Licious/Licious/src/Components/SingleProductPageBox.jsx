import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, useToast } from "react-toastify";
import Navbar from "./Navbar";
import { AddProductQuantity, getCart } from "./Redux/action";
import { store } from "./Redux/store";
import { SingleCard } from "./SingleCard";
import Styles from "./SingleProductPage.module.css";

const SingleProductPageBox = () => {
  const { id } = useParams();
  const ChickenData = useSelector((store) => store.reducer.ChickenData);
  const SeaFoodData = useSelector((store) => store.reducer.SeaFoodData);
  console.log(SeaFoodData);
  const dispatch = useDispatch();
  const [CurrentProduct, setCurrentProduct] = useState({});

  const handleAddtocart = () => {
    if (CurrentProduct.Name && CurrentProduct.Image) {
      //  console.log(CurrentProduct);
      dispatch(AddProductQuantity(CurrentProduct))
        .then(() =>
          toast({
            position: "top-right",
            duration: 1200,
            render: () => (
              <Flex
                color="white"
                border="4px solid white"
                p={"10px"}
                bgColor="green.400"
              >
                <CheckCircleIcon w={30} h={30} />
                <Text size="lg" ml="15px">
                  Item added inside Cart
                </Text>
              </Flex>
            ),
          })
        )
        .then(() => dispatch(getCart()));
    }
  };
  useEffect(() => {
    if (id) {
      if (ChickenData.length > 0) {
        const SingleProduct = ChickenData.find(
          (item) => item.id === Number(id)
        );
        SingleProduct && setCurrentProduct(SingleProduct);
      } else if (SeaFoodData.length > 0) {
        const SingleProduct = SeaFoodData.find(
          (item) => item.id === Number(id)
        );
        SingleProduct && setCurrentProduct(SingleProduct);
      }
    }
  }, [id]);
  return (
    <Box>
      <Box className={Styles.SingleProductPage_Main}>
        <Box className={Styles.SingleProductPage_Box1}>
          <img src={CurrentProduct.Image} alt={CurrentProduct.Name} />
        </Box>
        <Box className={Styles.SingleProductPage_Box2}>
          <Box className={Styles.SingleProductPage_Box22}>
            <Text fontWeight={"extrabold"} fontSize="2xl">
              {CurrentProduct.Name}
            </Text>
            <Text className={Styles.SingleProductPage_Box22_category}>
              {CurrentProduct.sub_category}
            </Text>
            <Divider />
          </Box>
          <Text className={Styles.SingleProductPage_Box22_des}>
            {CurrentProduct.des_2}
          </Text>
          <Flex mt="100px">
            <Text
              mt="4px"
              fontSize="20px"
              className={Styles.SingleProductPage_Box22_Price}
            >
              MRP :
            </Text>
            <Text
              as={"span"}
              color={"#e53e3e"}
              fontWeight="extrabold"
              fontSize="25px"
              ml="9px"
            >
              ₹{CurrentProduct.Price}
            </Text>
            <Spacer />
            <Button
              w="200px"
              h="50px"
              color="white"
              bg={"#e53e3e"}
              _hover={{ bg: "#e53e3e" }}
              onClick={handleAddtocart}
              className={Styles.SingleProductPage_Box22_AddToCART}
            >
              ADD TO CART
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export { SingleProductPageBox };
