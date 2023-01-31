import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Flex,
  Text,
  Divider,
  CardFooter,
  Box,
  Spacer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function SkeletonCard() {
  return (
    <Card
      maxW="sm"
      key={""}
      borderRadius="0px 0px 15px 15px"
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 10px 50px"}
    >
      <CardBody>
        <Box>
          <Skeleton height="230px" />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign="left" fontSize={"18px"}>
            <Skeleton height="30px" />
          </Heading>
          <Text textAlign="left" color="#727272">
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Text>
          <Skeleton height="20px" w="60px" />
        </Stack>
      </CardBody>

      <Divider />
      <CardFooter>
        <Flex>
          <Box>
            <Flex w="200px">
              <Text as="span" textAlign="left" color="red" fontSize="18px">
                MRP : ₹
              </Text>
              <Text ml="10px">
                <Skeleton height="30px" w="80px" />
              </Text>
            </Flex>
          </Box>
          <Spacer />
          <Box>
            <Skeleton w="120px" h="30px" />
          </Box>
        </Flex>
      </CardFooter>
    </Card>
  );
}
