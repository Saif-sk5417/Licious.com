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
} from "@chakra-ui/react";

function HookUsage() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 3,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

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
export const SingleItem = () => {
  return (
    <>
      <Box
        bg="white"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        p="5px 0px"
      >
        <Box>
          <Box
            h="24.25"
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
                1
              </Text>
              <Text>Classic Eggs - Pack Of 12</Text>
            </Box>
            <Box>
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
                12 Pieces
              </Box>
              <Box color="#D11243" fontSize="13px">
                ₹310.00
              </Box>
            </Box>
            <Box>
              <HookUsage />
            </Box>
          </Box>
        </Box>
        <Divider border="1px" />
      </Box>
    </>
  );
};
