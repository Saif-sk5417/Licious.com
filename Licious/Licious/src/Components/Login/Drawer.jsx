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
} from "@chakra-ui/react";

function Drawercomp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="red" bg="#e4003e" onClick={onOpen}>
        Login
      </Button>
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
            {/* <Input borderColor="red" placeholder="Type here..." /> */}
          </DrawerBody>

          <DrawerFooter
            backgroundColor="white"
            bottomHeight="200px"
            w="90%"
            margin="auto"
            borderRadius="10px 10px 0 0"
            justifyContent="center"
            display="block"
          >
            {/* <Login /> */}
            <Avatar bg="#e4003e" />
            <Heading color="#e4003e">Welcome</Heading>
            <Spacer pt="40px" />
            <Swiper />
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export { Drawercomp };
