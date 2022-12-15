import { Box, Button, Image, Text } from "@chakra-ui/react";

const HomePart2 = () => {
  return (
    <Box>
      <Box bg="#F7F6F6">
        <Box
          w="78%"
          fontFamily="Lato"
          fontWeight="bold"
          display="flex"
          m="auto"
          justifyContent="space-between"
        >
          <Text fontSize="25px" lineHeight="24.2px" color="#4a4a4a">
            Check out our blog
          </Text>
          <Button
            fontSize="15px"
            bg="none"
            border="none"
            fontFamily="Lato"
            cursor="pointer"
            lineHeight="18 .5px"
            color="#d11243"
          >
            See all
          </Button>
        </Box>
        <Box
          w="79%"
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          m="auto"
          mt="-15px"
        >
          <Box>
            <Image
              borderRadius="9px"
              boxSize="370px"
              src="/Image/HomePart22/Shutterstock_1043177881.jpg"
            />
            <Box
              fontSize="19px"
              lineHeight="0px"
              textAlign="justify"
              display="grid"
              justifyContent="center"
              color="#4a4a4a"
              fontFamily="Lato"
            >
              <Text>Make a Delicious Chicken Fried Rice With Our</Text>
              <Text>Cut & Cleaned Chicken Mini Bites!</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderRadius="9px"
              boxSize="370px"
              src="/Image/HomePart22/Shutterstock_2060198936.jpg"
            />
            <Box
              fontSize="20px"
              lineHeight="0px"
              textAlign="justify"
              display="grid"
              justifyContent="center"
              color="#4a4a4a"
              fontFamily="Lato"
            >
              <Text>Garlic and Egg Fried Rice With Licious Fresh </Text>
              <Text>Eggs!</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderRadius="9px"
              boxSize="370px"
              src="/Image/HomePart22/Shutterstock_617193059.jpg"
            />
            <Box
              fontSize="20px"
              lineHeight="0px"
              textAlign="justify"
              display="grid"
              justifyContent="center"
              color="#4a4a4a"
              fontFamily="Lato"
            >
              <Text>Make Authentic Chicken Dim Sum at Home </Text>
              <Text>and Relish the Delicious Flavour!</Text>
            </Box>
          </Box>
        </Box>
        <Box mt="20px">
          <Image src="/Image/HomePart22/homepage_62a34b8cba7db.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export { HomePart2 };
