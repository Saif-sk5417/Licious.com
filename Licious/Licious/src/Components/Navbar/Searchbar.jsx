import { Input,Image,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'



const Searchbar = () => {
//   const Navigate=useNavigate()
  const [svalue,setSvalue]=useState('')
  
  
  useEffect(()=>{
    check(svalue)
  },[svalue]);



const check=(svalue)=>{
let bag=svalue.toLowerCase();
console.log('svalue',bag)
  
if(bag=="products"){console.log("Navigate('/products')");}
if(bag=="chicken"){console.log("Navigate('/Chicken')");}
if(bag=="sea" || bag=='fish'){console.log("Navigate('/fish')");}
if(bag=="id"){console.log("Navigate('/products')")}
if(bag=="products"){console.log("Navigate('/products')")}
if(bag=="products"){console.log("Navigate('/products')")}
if(bag=="products"){console.log("Navigate('/products')")}
}
  return (
    
   <Box p="2px 6px 2px 4px" w="87%" h="40px" borderRadius={"10px"}  bg="#f8f8f8" display={"flex"} alignItems={"center"} justifyContent="space-around">
     <Input h="80%" outline={"none"} pl="10px" textColor={"gainsboro"} bg="#f8f8f8" border={"0px solid #f8f8f8"} fontSize={"15px"} w="100%" placeholder='Search for any delecious product' size='sm' width='350px' onChange={(e)=>{
      setSvalue(e.target.value)
      console.log(svalue)
      
    }}/>
    <Image src="./Image/Navbar/search_icon.svg"/>
   </Box>

  )
}

export default Searchbar