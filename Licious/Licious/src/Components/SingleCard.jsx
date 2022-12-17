

import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter ,Image ,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'

const SingleCard = ({Name,image,des_1,weights ,Price ,quantity}) =>{
    return (
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt={Name}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size ='md' textAlign='left' fontSize={'18px'}>{Name}</Heading>
      <Text  color='#727272'>{des_1}</Text>
      <Text >{weights}</Text>
      <Text color='red' fontSize='xl'> MRP : ₹{Price}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='4'>
     <Button
      variant='outline'  size='sm' colorScheme='red'
      >
     <AddIcon color='black' />
      </Button>
      <Text fontSize='xl'>{quantity}</Text>
      <Button variant='outline'  size='sm' colorScheme='red'>
     <MinusIcon color='black' />
      </Button>
      <Button variant='solid' colorScheme='red' size='sm'>
        ADD TO CART
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}


export { SingleCard }