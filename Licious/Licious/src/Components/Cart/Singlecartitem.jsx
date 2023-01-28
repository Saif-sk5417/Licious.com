import React from "react";
import {
  Box,
  Text,
  Button,
  CloseButton,
  HStack,
  Input,
  Divider,
  useNumberInput,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getCart, removeProductFromCart } from "../Redux/action";
import { useEffect } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function HookUsage({ quantity }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 3,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ quantity });

  return (
    <HStack>
      <Button
        bg="#f2f2f2"
        border="0px solid #f2f2f2"
        color="#D11243"
        fontWeight="bold"
        w="22px"
        h="22px"
        {...dec}
      >
        -
      </Button>
      <Input
        w="45px"
        fontWeight="bold"
        h="30px"
        border="none"
        {...input}
        disabled
      />
      <Button
        bg="#f2f2f2"
        border="0px solid #f2f2f2"
        color="#D11243"
        w="22px"
        h="22px"
        fontWeight="bold"
        {...inc}
      >
        +
      </Button>
    </HStack>
  );
}
export const SingleItem = ({ Name, quantity, Weight, Price, id, arrange }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  //console.log(Weight);
  const handleRemoveCartitem = ({ id }) => {
    //console.log(id);
    dispatch(removeProductFromCart(id))
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
                Item removed from Cart
              </Text>
            </Flex>
          ),
        })
      )
      .then(() => {
        dispatch(getCart());
      });
  };

  return (
    <>
      <Box
        bg="white"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        p="5px 0px"
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              w="205px"
              display="flex"
              fontSize="15px"
              alignItems="center"
              justifyContent="space-between"
              // bg="blue"
            >
              <Text bg="#f2f2f2" p="1px 5px" m="2">
                {arrange}
              </Text>
              <Text p="2">{Name}</Text>
            </Box>
            <Box mr="20px" onClick={() => handleRemoveCartitem({ id })}>
              <CloseButton size="md" />
              {/* <Text>X</Text> */}
            </Box>
          </Box>
          <Box
            w="390px"
            h="49.5"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              w="158px"
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              <Box
                border="1px solid #6d6e71"
                p="2px 3px"
                color="#6d6e71"
                fontSize="13px"
                mr="15px"
              >
                {Weight}
              </Box>
              <Box color="#D11243" fontSize="13px" fontWeight={"bold"}>
                ₹{Price}
              </Box>
            </Box>
            <Box>
              <HookUsage quantity={quantity} />
            </Box>
          </Box>
        </Box>
        <Divider border="1px" />
      </Box>
    </>
  );
};
