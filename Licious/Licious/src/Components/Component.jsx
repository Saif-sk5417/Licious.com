import {
  Box,
  Center,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const Component = ({ item }) => {
  return (
    <SimpleGrid columns={4} columnGap={20} rowGap={50}>
      {item.map((el) => {
        return (
          <Box  bg="white" borderRadius="10px" border="0px solid red" h="210px" cursor="pointer" >
            <Image w="90%" _hover={{width:"380px"}} border="0px solid blue"  m="auto" src={el.images} />
            <Center>
              <Text fontWeight="normal" >{el.name}</Text>
            </Center>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default Component;
