import { Box, Button, Image, Text } from "@chakra-ui/react";
import { HomePageSlider2 } from "./HomePageSlider2";

const HomePart2 = () => {
  return (
    <Box>
      <Box bg="#F7F6F6" >
        <Box
          w="77%"
          fontFamily="Lato"
          fontWeight="bold"
          display="flex"
          m="auto"
          mb="15px"
          padding='50px 0px 0px 0px'
          justifyContent="space-between"
        >
          <Text  fontSize="25px"  color="#4a4a4a">
            Check out our blog
          </Text>
          <Button
            fontSize="15px"
            bg="none"
            border="none"
            fontFamily="Lato"
            cursor="pointer"
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
          gap="20px"
        >
          <Box>
            <Image
              borderRadius="9px"
              boxSize="370px"
              src="/Image/HomePart22/Shutterstock_1043177881.jpg"
              mb="20px"
            />
            <Box
              textAlign="justify"
              display="grid"
              justifyContent="center"
              color="#4a4a4a"
              fontFamily="Lato"
            >
              <Text fontSize="18px">
                Make a Delicious Chicken Fried Rice With Our
              </Text>
              <Text fontSize="18px">Cut & Cleaned Chicken Mini Bites!</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderRadius="9px"
              boxSize="370px"
              src="/Image/HomePart22/Shutterstock_2060198936.jpg"
              mb="20px"
            />
            <Box
              textAlign="justify"
              display="grid"
              justifyContent="center"
              color="#4a4a4a"
              fontFamily="Lato"
            >
              <Text fontSize="18px">
                Garlic and Egg Fried Rice With Licious Fresh{" "}
              </Text>
              <Text fontSize="20px">Eggs!</Text>
            </Box>
          </Box>
          <Box>
            <Image
              borderRadius="9px"
              boxSize="370px"
              src="/Image/HomePart22/Shutterstock_617193059.jpg"
              mb="20px"
            />
            <Box
              textAlign="justify"
              display="grid"
              justifyContent="center"
              color="#4a4a4a"
              fontFamily="Lato"
            >
              <Text fontSize="18px">
                Make Authentic Chicken Dim Sum at Home{" "}
              </Text>
              <Text fontSize="18px">and Relish the Delicious Flavour!</Text>
            </Box>
          </Box>
        </Box>
        <Box w="79%" m="auto" mt="40px">
          <Image src="/Image/HomePart22/homepage_62a34b8cba7db.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export { HomePart2 };
