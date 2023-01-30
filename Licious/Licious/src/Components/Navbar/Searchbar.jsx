import { Input, Image, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const Navigate = useNavigate();
  const [svalue, setSvalue] = useState("");

  useEffect(() => {
    check(svalue);
  }, [svalue]);

  const ClickMe = () => {
    check(svalue);
  };
  const check = (svalue) => {
    let bag = svalue.toLowerCase();

    if (bag == "products") {
      Navigate("/Chicken");
    }
    if (bag == "chicken") {
      Navigate("/Chicken");
    }
    if (bag == "sea" || bag == "fish") {
      Navigate("/Chicken");
    }
    if (bag == "food") {
      Navigate("/Chicken");
    }
    if (bag == "products") {
      Navigate("/Chicken");
    }
    if (bag == "nonveg") {
      Navigate("/Chicken");
    }
    if (bag == "mutton") {
      Navigate("/Chicken");
    }
  };
  return (
    <Box
      p="2px 6px 2px 4px"
      h="40px"
      border={"solid"}
      borderRadius={"10px"}
      bg="#f8f8f8"
      display={"flex"}
      alignItems={"center"}
      justifyContent="space-around"
    >
      <Input
        h="80%"
        outline={"none"}
        pl="10px"
        textColor={"Gray"}
        bg="#f8f8f8"
        border={"0px solid #f8f8f8"}
        fontSize={"15px"}
        placeholder="Search for any delecious product"
        size="sm"
        width="350px"
        onChange={(e) => {
          setSvalue(e.target.value);
          // console.log(svalue)
        }}
      />
      <Image
        onClick={ClickMe}
        _hover={{ cursor: "pointer" }}
        src="./Image/Navbar/search_icon.svg"
      />
    </Box>
  );
};

export default Searchbar;
