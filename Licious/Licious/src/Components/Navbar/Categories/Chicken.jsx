import React from "react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box
} from "@chakra-ui/react";
export const Chicken = () => {
  return (
    <div>
      <Box w="250px" h="auto" bg="#f1f1f1">
        <List spacing={10}>
          <ListItem>Chicken</ListItem>
          <ListItem>Chicken</ListItem>
          <ListItem>Chicken</ListItem>
          <ListItem>Chicken</ListItem>
          <ListItem>Chicken</ListItem>
          <ListItem>Chicken</ListItem>
        </List>
      </Box>
    </div>
  );
};
