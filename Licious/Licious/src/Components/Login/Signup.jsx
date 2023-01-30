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
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../Redux/Auth/auth.action";
let intdata = {
  email: "",
  password: "",
  username: "",
};
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleShowClick2 = () => setShowPassword2(!showPassword2);

  const [data, setData] = useState(intdata);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      position: "top-left",
      render: () => (
        <Flex
          color="white"
          border="4px solid white"
          p={"10px"}
          bgColor="green.400"
        >
          <CheckCircleIcon w={30} h={30} />
          <Text size="lg" ml="15px">
            Signed Up Successfully!!!
          </Text>
        </Flex>
      ),
    });
    dispatch(userSignUp(data));

    setData(intdata);
    navigate("/");
  };
  const handleChange = (e) => {
    //console.log(1);
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
                    type="text"
                    placeholder="Your Name"
                    name="username"
                    isRequired
                    value={data.username}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>

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
                    name="email"
                    placeholder="email address"
                    isRequired
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={data.password}
                    name="password"
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

                <FormHelperText textAlign="right"></FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                width="full"
                color="#e4003e"
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
export { Signup };
