import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import Component from "./Component";
import "./Component.css";

const HomePart1 = () => {
  let chikenData = [
    { images: "Image/HomePart11/Todays_Deals.png", name: "Today's Deal" },
    { images: "Image/HomePart11/Chicken_(2).png", name: "Chiken" },
    { images: "Image/HomePart11/fish.png", name: "Fish & Seafood" },
    { images: "Image/HomePart11/MUT.png", name: "Mutton" },
    { images: "Image/HomePart11/RC.png", name: "Ready to Cook" },
    { images: "Image/HomePart11/Prawn_(2).png", name: "Prawns" },
    { images: "Image/HomePart11/Coldcuts_(2).png", name: "Cold Cuts" },
    { images: "Image/HomePart11/SPD.png", name: "Spreads" },
    { images: "Image/HomePart11/Eggs_(1).png", name: "Eggs" },
    { images: "Image/HomePart11/Biryani_(2).png", name: "Biryani & Kebab" },
    { images: "Image/HomePart11/PBM_6_(8).png", name: "Plant Based Meat" },
    { images: "Image/HomePart11/Masala_1200x840_web.png", name: "Meat Masala" },
  ];

  return (
    <Box  bg="#F7F6F6" >
      <Box>
        <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e" />
      </Box>
      <Box mt="40px" w="35%" border="0px solid red">
        <Text
          color="#4a4a4a"
          fontSize="22px"
          fontWeight="bold"
          fontStyle="Lato"
        >
          Shop by categories
        </Text>
        <Text color="#959799">Freshest meats just for you</Text>
      </Box>
      <Box style={{ width: "79%", margin: "auto", marginTop: "20px" }}>
        <Component item={chikenData} />
      </Box>

      <Box
        m="auto"
        mt="60px"
        bg="#ffdc93"
        borderRadius="10px"
        border="0px solid red"
        w="55%"
      >
        <Box
          p="15px"
          border="0 px solid red"
          display="flex"
          justifyContent="space-between"
        >
          <Image
            h="30px"
            src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
            alt="img"
          />
          <Button
            border="0px solid black"
            bg="#D11243"
            p="7px 15px"
            borderRadius="7px"
            color="white"
            fontSize="12px"
          >
            JOIN NOW
          </Button>
        </Box>
        <Divider h="0.5px" bg="grey" mb="10px" />
        <Box w="60%">
          <Text
            fontSize="12px"
            fontWeight="bold"
            color="#313131"
            fontFamily="Lato"
          >
            Join METOPIA to get free delivery on all orders with cart value more
            than Rs.99.
          </Text>
        </Box>
      </Box>

      <Box p="50px">
        <Image
          m="auto"
          borderRadius="7px"
          src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/a5372f18-3f0a-a801-0160-cb20957f3acd/original/static-bank-units-nov-web.jpg?format=webp"
          alt="img"
        />
      </Box>
      <Box width="79%" margin="auto" p="50px" >
        <Box w="23%" mb="20px">
          <Text color="#4a4a4a" fontSize="22px" fontWeight="bold">
            Explore by category
          </Text>
        </Box>
        <Box  >
          <Component item={chikenData} />
        </Box>
      </Box>
    </Box>
  );
};

export { HomePart1 };
