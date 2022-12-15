import { Login } from "./Login";
import { Signup } from "./Signup";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Spacer,
} from "@chakra-ui/react";

function Swiper() {
  return (
    <Accordion allowToggle w="100%" bg="white">
      <AccordionItem>
        <h2>
          <AccordionButton bg="#e4003e" _hover={{ bg: "#e4003e" }}>
            <Box as="span" flex="1" textAlign="left">
              Login
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="black">
          <Login />
        </AccordionPanel>
      </AccordionItem>
      <Spacer pt="20px" />
      <AccordionItem>
        <h2>
          <AccordionButton bg="#e4003e" _hover={{ bg: "#e4003e" }}>
            <Box as="span" flex="1" textAlign="left">
              Sign UP
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="black">
          <Signup />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export { Swiper };
