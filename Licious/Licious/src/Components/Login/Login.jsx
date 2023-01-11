import { useState } from "react";

import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin, userLogout } from "../Redux/Auth/auth.action";
//console.log(userLogin, userLogout);
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
let intdata = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(intdata);
  const existingData = useSelector((state) => state.authManager.userdata);
  const dispatch = useDispatch();
  const toast = useToast();
  const isAuth = useSelector((state) => state.authManager.isAuth);
  const navigate = useNavigate();
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.email !== existingData.email ||
      data.password !== existingData.password
    ) {
      toast({
        position: "top-left",
        render: () => (
          <Flex color="white" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Incorrect email or password
            </Text>
          </Flex>
        ),
      });
    } else {
      //navigate("/");
      dispatch(userLogin());
      alert("Login Success");
      toast({
        position: "top-right",
        render: () => (
          <Flex color="white" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              Login Success
            </Text>
          </Flex>
        ),
      });
    }

    setData(intdata);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Flex alignItems="center" flexDirection="column">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "100%" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.500" />}
                  />
                  <Input
                    color="black"
                    type="email"
                    value={data.email}
                    placeholder="email address"
                    isRequired
                    name="email"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    children={<CFaLock color="gray.500" />}
                  />
                  <Input
                    color="black"
                    value={data.password}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    isRequired
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      bg="grey.500"
                      color="#e4003e"
                      onClick={handleShowClick}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                width="full"
                color="#e4003e"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        By signing in you agree to our-
        <Link color="#e4003e" href="#">
          terms and conditions
        </Link>
      </Box>
    </Flex>
  );
};
export { Login };
