import { AddIcon, CheckCircleIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Alert,
  AlertIcon,
  Box,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AddProductQuantity,
  getCart,
  getChickenData,
  SubProductQuantity,
} from "./Redux/action";
import { useEffect, useState } from "react";
const SingleCard = (prop) => {
  const { Name, image, des_1, weights, Price, quantity, id, state, setState } =
    prop;
  const toast = useToast();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const mycart = useSelector((store) => store.reducer.cart);
  const handleAddtocart = () => {
    dispatch(AddProductQuantity(prop))
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
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);

  // const handleSubtocart = (id, quantity) => {
  //   dispatch(SubProductQuantity(id, quantity));
  // };

  return (
    <Card maxW="sm" key={id}>
      <NavLink to={`/Chicken/${id}`}>
        <CardBody>
          <Image src={image} alt={Name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="left" fontSize={"18px"}>
              {Name}
            </Heading>
            <Text textAlign="left" color="#727272">
              {des_1}
            </Text>
            <Text textAlign="left">{weights}</Text>
            <Text textAlign="left" color="red" fontSize="xl">
              {" "}
              MRP : ₹{Price}
            </Text>
          </Stack>
        </CardBody>
      </NavLink>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="4">
          <Button onClick={() => handleAddtocart()} colorScheme="red" size="sm">
            "ADDTOCART"
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export { SingleCard };
