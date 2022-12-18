import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Image,
    // Lorem
    Text,
    Button,

} from '@chakra-ui/react'

 const Madals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>
            <Image w="55px" h="30px" src="/Image/Navbar/location_icon.svg"></Image>
            <Box w="250px" h="70px" fontSize={"13px"} p="2px 0" ml="-25%">
                <Text mt="10pxd" ml={"-52px"} color="gray" mb="-15px">NCR</Text>
                <Text ml="-15px">Delhi, India</Text>
            </Box>
            <Image src="/Image/Navbar/down-arrow.webp" w="12px" ml="-35px" mt="5%" h="7px"></Image>

            </Button>
            
            <Modal isOpen={isOpen} onClose={onClose} w="100%">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptatem alias libero placeat a nulla saepe totam beatae impedit. Corrupti quae rerum quo inventore, dolor qui atque consectetur architecto dolore consequatur, eum obcaecati asperiores repellat quasi ad autem eaque laborum tempore nulla cupiditate molestiae nostrum? Consequatur quo sint accusantium exercitationem perferendis non expedita accusamus explicabo sapiente amet reiciendis ipsam ipsum incidunt sequi repudiandae tempora inventore totam, debitis obcaecati dolor sunt aliquam dignissimos illo vero? Blanditiis officiis pariatur soluta, iusto quisquam quo. Ullam consequuntur laboriosam nisi adipisci rem non tenetur perferendis reprehenderit explicabo culpa. Eos quaerat exercitationem, eligendi voluptatibus perferendis ex aliquam dolor sapiente magnam amet voluptates quidem ducimus doloribus odit dolorem facere! Quis, asperiores sint temporibus vitae nemo et debitis vero, quasi rem magnam consequatur sed, incidunt voluptatem nostrum deleniti dolores adipisci numquam suscipit dolor optio vel. Quo sapiente odio ipsa consequatur, enim possimus voluptatibus nam hic ipsum, commodi atque.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Madals