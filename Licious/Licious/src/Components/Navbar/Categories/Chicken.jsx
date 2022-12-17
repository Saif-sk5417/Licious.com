import React from "react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box
} from "@chakra-ui/react";
import { chickenItem } from "./dataCom";
import { BsHr } from "react-icons/bs";
export const Chicken = () => {
  return (
    <div>
      <Box w="260px" h="100%"  bg="#f1f1f1">
        <List spacing={0} bg="#f1f1f1" h="100%" m="0px 5px" p="20px 8px 0px 8px" fontSize={"14px"} fontWeight="400" >
         {
          chickenItem.map((item) => (
            <ListItem key={item.id} p="20px 10px" borderBottom={"1px solid #bfbfbf"}  _hover={{fontSize:"16px", color:"black",fontWeight:"500",bg:"white"}}>{item.name}</ListItem>

        ))
         }
        </List>
      </Box>
    </div>
  );
};
