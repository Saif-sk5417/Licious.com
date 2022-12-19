

import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter ,Image ,Stack,Heading,Text,Divider,ButtonGroup,Button, Alert, AlertIcon, Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AddProductQuantity, getChickenData, SubProductQuantity } from './Redux/action'

const SingleCard = ({Name,image,des_1,weights ,Price ,quantity ,id , state , setState}) =>{
  const dispatch = useDispatch()
 
  const handleAddtocart = (id,quantity) =>{
   dispatch(AddProductQuantity(id,quantity))
  }
  const handleSubtocart = (id,quantity) =>{
    dispatch(SubProductQuantity(id,quantity))
   }
    return (
        <Card maxW='sm'>
  <NavLink to ={`/Chicken/${id}`}><CardBody>
    <Image
      src={image}
      alt={Name}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size ='md' textAlign='left' fontSize={'18px'}>{Name}</Heading>
      <Text  textAlign='left' color='#727272'>{des_1}</Text>
      <Text  textAlign='left' >{weights}</Text>
      <Text  textAlign='left' color='red' fontSize='xl'> MRP : ₹{Price}</Text>
    </Stack>
  </CardBody></NavLink>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='4'>
      <Box>
        {quantity === 0 ? true : (
          <ButtonGroup spacing='4'>
              <Button
            variant='outline'  size='sm' colorScheme='red'
            onClick={()=>handleAddtocart(id ,quantity)}
            >
           <AddIcon color='black' />
            </Button>
            <Text fontSize='xl'>{quantity}</Text>
            <Button variant='outline'  size='sm' colorScheme='red'
             onClick={()=>handleSubtocart(id ,quantity)}
            >
           <MinusIcon color='black' />
            </Button>
          </ButtonGroup>
        )}
      </Box>
      <Box>
          {quantity !== 0 ? (
            <Alert borderRadius={15} w="auto" status="success">
              <AlertIcon />
              Added to cart !!
            </Alert>
          ) : (
            <Button
              onClick={() => handleAddtocart(id,quantity)}
              disabled={quantity > 0}
              colorScheme="red"
              size='sm'
            >
              {quantity > 0 ? "Added" : "ADDTOCART"}
            </Button>
          )}
        </Box>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}


export { SingleCard }