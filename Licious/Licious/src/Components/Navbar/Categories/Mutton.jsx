import React from "react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box
} from "@chakra-ui/react";
export const Mutton = () => {
  return (
    <div>
      <Box w="250px" h="auto" bg="#f1f1f1">
        <List spacing={10}>
          <ListItem>Mutton</ListItem>
          <ListItem>Mutton</ListItem>
          <ListItem>Mutton</ListItem>
          <ListItem>Mutton</ListItem>
          <ListItem>Mutton</ListItem>
          <ListItem>Mutton</ListItem>
        </List>
      </Box>
    </div>
  );
};
