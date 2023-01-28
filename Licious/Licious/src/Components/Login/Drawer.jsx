import React from "react";
import { Swiper } from "./Swapper";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Image,
  Avatar,
  Heading,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Drawercomp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box>
        <Button
          ref={btnRef}
          ml="5px"
          bg="white"
          _hover={{ bg: "white" }}
          fontWeight="normal"
          leftIcon={
            <Image
              src="/Image/Navbar/profile_icon.svg"
              w="25px"
              h="25px"
            ></Image>
          }
          onClick={onOpen}
        >
          Login
        </Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        size="sm"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent backgroundImage="https://www.licious.in/img/rebranding/user-login-new.jpg">
          <DrawerCloseButton color="white" size="lg" />
          <DrawerHeader>
            <Image
              maxW="120px"
              src="https://www.licious.in/img/rebranding/logo-white.png"
              alt="Dan Abramov"
            />
          </DrawerHeader>

          <DrawerBody>
            <ToastContainer />
          </DrawerBody>

          <DrawerFooter
            backgroundColor="white"
            justifyContent="center"
            bottomHeight="200px"
            w="90%"
            margin="auto"
            borderRadius="10px 10px 0 0"
            display="block"
          >
            <Avatar bg="#e4003e" />
            <Heading color="#e4003e">Welcome</Heading>
            <Spacer pt="40px" />
            <Swiper />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export { Drawercomp };
