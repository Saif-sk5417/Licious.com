import { Box, Text, Image, Input, Card } from "@chakra-ui/react";
import { Cart } from "../Components/Cart/Cart";
import { Login } from "./Login";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import { Categories } from "./Navbar/Categories";
import Searchbar from "./Navbar/Searchbar";
import styles from "./Component.module.css";
import { useSelector } from "react-redux";
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
} from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
// import navMod from "./Navbar.module.css"
//import Cart from './Navbar/Cart'

// import CartCounter from './Navbar/CartCounter'
// import Categories from './Navbar/Categories.jsx'
// import Login from './Login'
// import Searchbar from './Navbar/Searchbar'
// import Map from './Navbar/Map'
// import Profile_Login from './Navbar/Profile'

import { chakra, Flex } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "./Redux/Auth/auth.action";

const Navbar = () => {
  // background-color: #fff;
  const isAuth = useSelector((store) => store.authManager.isAuth);
  const userName = useSelector((store) => store.authManager.userdata.username);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (!isAuth) {
      toast({
        position: "top-left",

        duration: 1200,

        render: () => (
          <Flex color="white" border="4px solid white" p={"10px"} bgColor="red">
            <WarningIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              You have not Signed in yet!!!
            </Text>
          </Flex>
        ),
      });
    } else {
      toast({
        position: "top-left",
        duration: 1200,
        render: () => (
          <Flex
            color="white"
            border="4px solid white"
            p={"10px"}
            bgColor="green.400"
          >
            <CheckCircleIcon w={30} h={30} />
            <Text size="lg" ml="15px">
              You have Logout Successfully!!!
            </Text>
          </Flex>
        ),
      });
      dispatch(userLogout());
    }
  };
  //console.log(userName);
  // padding: 25px 0;
  // height: 80px;
  return (
    <Box w="100%" h="100px" bg={"#fff"} pb="1%">
      <Box w="100%" h="25px" bg={"#EAEAEA"}>
        <Box
          w="75%"
          padding={"3px 0"}
          m={"auto"}
          display="flex"
          justifyContent={"space-around"}
        >
          <Box w="35%" h="20px" display="flex">
            <Box
              w="110px"
              display="flex"
              alignItems={"center"}
              justifyContent="space-around"
              mr="5px"
            >
              <Text fontSize="13px" color={"#4a4a4a"}>
                Why Licious?
              </Text>
              <Image src="/Image/Navbar/dotImage.png" w="5px" bg="none"></Image>
            </Box>
            {/* font-family: Lato,sans-serif!important; */}
            <Box
              w="35%"
              display="flex"
              alignItems={"center"}
              justifyContent="space-around"
            >
              <Text
                fontSize="13px"
                color={"#4a4a4a"}
                fontFamily={" Lato,sans-serif!important"}
              >
                Download App
              </Text>
              <Image
                src="https://www.licious.in/img/rebranding/ios_app_icon.svg"
                w="15px"
                m=""
              ></Image>
              <Image
                src="https://www.licious.in/img/rebranding/android_app_icon.svg"
                w="15px"
              ></Image>
            </Box>
          </Box>
          <Box
            w="65%"
            h="20px"
            display={"flex"}
            alignItems={"center"}
            justifyContent="end"
          >
            <Text fontSize="13px" color={"#4a4a4a"} mr="15px">
              FSSC 22000 Certification
            </Text>
            <Image
              mr="15px"
              src="/Image/Navbar/dotImage.png"
              w="5px"
              bg="none"
            ></Image>
            <Text fontSize="13px" color={"#4a4a4a"} mr="15px">
              About Us
            </Text>
            <Image
              mr="15px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmoP1Q9rf75iQmf2fD3qnkAYZeZIApc0LNg&usqp=CAU"
              w="5px"
              bg="none"
            />
            <Text fontSize="13px" color={"#4a4a4a"} mr="15px">
              Careers @Licious
            </Text>
            <Image
              alignItems={"center"}
              mr="15px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmoP1Q9rf75iQmf2fD3qnkAYZeZIApc0LNg&usqp=CAU"
              w="5px"
              bg="none"
            />
            <Text fontSize="13px" color={"#4a4a4a"}>
              Contact Us{" "}
              {/* <Image
                ml="100px"
                src="https://www.licious.in/img/rebranding/down-arrow.png"
                w="12px"
                h="7px"
              /> */}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box w="100%">
        <Box
          p="7px 0"
          w="75%"
          m={"auto"}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Image src="/Image/Navbar/licious-logo.svg" />
          </Box>
          <Box
            w="10%"
            p="10px 0 0 0"
            display={"flex"}
            alignItems="center"
            justifyContent={"space-around"}
          >
            <Image
              w="55px"
              h="30px"
              src="/Image/Navbar/location_icon.svg"
            ></Image>
            <Box w="250px" h="70px" fontSize={"13px"} p="2px 0" ml="-25%">
              <Text ml="-15px" mt="25px">
                Delhi, India
              </Text>
            </Box>
            <Image
              src="/Image/Navbar/down-arrow.webp"
              w="12px"
              ml="-35px"
              mt="5%"
              h="7px"
            ></Image>
          </Box>
          <Box w={"40%"} mr="-20px" ml="-20px">
            <Searchbar />
          </Box>
          <Box
            w="8%"
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Categories />
          </Box>

          {isAuth ? (
            <Box>
              <Popover>
                <PopoverTrigger>
                  <Button>{userName} </Button>
                </PopoverTrigger>
                <PopoverContent w="120px" mb="20px" border={"solid red"}>
                  <Button onClick={handleLogOut}>Logout</Button>
                </PopoverContent>
              </Popover>
            </Box>
          ) : (
            <Login />
          )}
          <Box
            w="6%"
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <ChakraProvider>
              <Cart />
            </ChakraProvider>
          </Box>
        </Box>
      </Box>
      <hr className={styles.Divider} />
    </Box>
  );
};

export default Navbar;

// const Navbar = () => {

//     const [value , setValue] = useState(false)

//     return (
//         <div className={navMod.navbarL}>
//             <div className={navMod.nav_div1}>

//                 <div><Link to='./'>
//                     <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
//                     </Link>
//                 </div>
//                 <div>

//                         <div className={navMod.img_nav}><img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="" /></div>
//                         <div><Map/></div>

//                 </div>
//                 <div className={navMod.search_bar}><Searchbar/></div>
//                 <div>

//                         <div className={navMod.img_nav}><img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="" /></div>
//                         <div><Categories/></div>

//                 </div>
//                 <div>

//                         <div><img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="" /></div>
//                         <div><Profile_Login/></div>

//                 </div>
//                 <div>

//                         <div><img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="" /></div>
//                         <div><Cart/></div>
//                         <div><CartCounter /></div>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Navbar
