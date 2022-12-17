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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione harum quos temporibus laborum cum delectus. Velit sequi deleniti exercitationem officiis?
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