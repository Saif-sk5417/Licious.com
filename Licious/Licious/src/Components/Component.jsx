import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Component = ({ item }) => {
  return (
    <>
      {item.map((el) => {
        return (
          <Link Key={el.name} to={el.to}>
            <Box bg="white" borderRadius="10px" h="210px" cursor="pointer">
              <Image
                w="90%"
                _hover={{ width: "380px" }}
                border="0px solid blue"
                m="auto"
                src={el.images}
              />
              <Center>
                <Text fontWeight="normal">{el.name}</Text>
              </Center>
            </Box>
          </Link>
        );
      })}
    </>
  );
};

export default Component;
