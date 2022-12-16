import { useReducer } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
  Box,
  Image,
  Text
} from "@chakra-ui/react";

import { Chicken } from "./Categories/Chicken";
import { Mutton } from "./Categories/Mutton";
import { Fish } from "./Categories/Fish";

const initialState = "Chicken";

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Chicken": {
      return (state = payload);
    }
    case "Mutton": {
      return (state = payload);
    }
    case "Fish": {
      return (state = payload);
    }
    default: {
      return state;
    }
  }
};
export const Categories = () => {
  // const [state, setState] = useState(false);
  const [Item, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Box>
        <Popover>
          <PopoverTrigger>
            <Box
              w="120px"
              p="5px 2px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" />
              <Button border="0px solid white" bg="none" color="#d11243">
                Categories
              </Button>
            </Box>
          </PopoverTrigger>

          <Portal bg="blue">
            <PopoverContent>
              <Box
                w="500px"
                p="20px  2px 20px 15px"
                bg="#fff"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                display="flex"
              >
                <Box>
                  <PopoverHeader>
                    <Box
                      w="220px"
                      p="4px 5px"
                      bg="#f1f1f1"
                      // m="auto"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="10px"
                      onMouseOver={() =>
                        dispatch({ type: "Chicken", payload: "Chicken" })
                      }
                    >
                      <Image
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                        w="30px"
                      />
                      <Text>Chicken</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="220px"
                      p="4px 5px"
                      bg="#f1f1f1"
                      // m="auto"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="10px"
                      onMouseOver={() =>
                        dispatch({ type: "Fish", payload: "Fish" })
                      }
                    >
                      <Image
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                        w="30px"
                      />
                      <Text>Fish</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="220px"
                      p="4px 5px"
                      bg="#f1f1f1"
                      // m="auto"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="10px"
                      onMouseOver={() =>
                        dispatch({ type: "Mutton", payload: "Mutton" })
                      }
                    >
                      <Image
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                        w="30px"
                      />
                      <Text>Mutton</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="220px"
                      p="4px 5px"
                      bg="#f1f1f1"
                      // m="auto"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="10px"
                      onMouseUp={() =>
                        dispatch({ type: "Chicken", payload: "Chicken" })
                      }
                    >
                      <Image
                        src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                        w="30px"
                      />
                      <Text>Eggs</Text>
                    </Box>
                  </PopoverHeader>
                </Box>
                <Box>
                  {Item == "Chicken" ? (
                    <Chicken />
                  ) : Item == "Mutton" ? (
                    <Mutton />
                  ) : (
                    <Fish />
                  )}
                </Box>
              </Box>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </div>
  );
};
