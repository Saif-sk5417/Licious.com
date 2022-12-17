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

          <Portal >
            <PopoverContent>
              <Box
                w="580px"
                p="30px  2px 30px 25px"
                bg="#fff"
                borderRadius={"10px"}
              
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                display="flex"
              >
                <Box >
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      // m="auto"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap="10px"
                     
                      onMouseOver={() =>
                        dispatch({ type: "Chicken", payload: "Chicken" })
                        
                      }
                      _hover={{fontSize:"18px",bg:"#f1f1f1",fontWeight:"bold"}}
                    >
                      <Image
                        src= "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png"
                        w="40px"
                      />
                      <Text  fontSize={"16px"} fontWeight={"600"} color="gray">Today's Deals</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      _hover={{fontSize:"18px",bg:"#f1f1f1",fontWeight:"bold"}}
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
                        w="40px"
                      />
                      <Text fontSize={"16px"} fontWeight={"600"} color="gray">Fish</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      _hover={{fontSize:"18px",bg:"#f1f1f1",fontWeight:"bold"}}
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
                        src= "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png"
                        w="40px"
                      />
                      <Text fontSize={"16px"} fontWeight={"600"} color="gray">Mutton</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      
                      // fontWeight="400"
                      _hover={{fontSize:"25px",bg:"#f1f1f1",fontWeight:"bold",color:"black"}}
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
                        src= "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png"
                        w="40px"
                       
                      />
                      <Text fontSize={"16px"} fontWeight={"600"} color="gray">Chicken</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      
                      // fontWeight="400"
                      _hover={{fontSize:"25px",bg:"#f1f1f1",fontWeight:"bold",color:"black"}}
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
                        src= "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png"
                        w="40px"
                       
                      />
                      <Text fontSize={"16px"} fontWeight={"600"} color="gray">Ready to Cook</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      
                      // fontWeight="400"
                      _hover={{fontSize:"25px",bg:"#f1f1f1",fontWeight:"bold",color:"black"}}
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
                        src= "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png"
                        w="40px"
                       
                      />
                      <Text fontSize={"16px"} fontWeight={"600"} color="gray">Prawns</Text>
                    </Box>
                  </PopoverHeader>
                  <PopoverHeader>
                    <Box
                      w="270px"
                      p="15px 10px"
                      
                      // fontWeight="400"
                      _hover={{fontSize:"25px",bg:"#f1f1f1",fontWeight:"bold",color:"black"}}
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
                        src= "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png"
                        w="40px"
                       
                      />
                      <Text fontSize={"16px"} fontWeight={"600"} color="gray">Cold Cuts</Text>
                    </Box>
                  </PopoverHeader>
  
                </Box>
                <Box >
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
