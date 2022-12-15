import { Drawercomp } from "./Login/Drawer";
import { ChakraProvider } from "@chakra-ui/react";
const Login = () => {
  return (
    <ChakraProvider>
      <Drawercomp />
    </ChakraProvider>
  );
};

export { Login };
