import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <Box>
      <Box w="31%" mt="10px">
        <Image h="60px" w="160px" src="/Image/HomePart22/licious-logo.svg" />
      </Box>
      <Box w="78%" m="auto" display="flex">
        <Box
          w="100%"
          m="auto"
          display="flex"
          justifyContent="space-between"
          gap="38px"
        >
          <Box>
            <Box display="flex">
              <Box
                textAlign="justify"
                justifyContent="center"
                fontFamily="Roboto, sans-serif"
                color="#4a4a4a"
                fontSize="14px"
                w="42%"
                m="auto"
              >
                <Text
                  color="#4a4a4a"
                  fontWeight="bold"
                  fontSize="14px"
                  mt="18px"
                  fontFamily="Roboto, sans-serif"
                >
                  USEFUL LINKS
                </Text>
                <Text>Why Licious?</Text>
                <Text>Refer & Earn</Text>
                <Text>Licious Cash & Cash+</Text>
                <Text>Careers</Text>
                <Text>BLOG</Text>
                <Text>Campaign</Text>
                <Text>Bug Bounty Guidelines</Text>
                <Text>About Us</Text>
                <Text>FSSC 22000 Certification</Text>
                <Text>FSSAI Licenses</Text>
                <Text>Sitemap</Text>
              </Box>

              <Box w="60%">
                <Text color="#4a4a4a" fontWeight="bold" textAlign="justify">
                  EXPERIENCE LICIOUS APP ON MOBILE
                </Text>
                <Flex gap={22} w="500px" h="40px">
                  <HStack
                    p={3}
                    pb="6px"
                    bg="black"
                    borderRadius="5px"
                    color="white"
                    flexDirection="row"
                  >
                    <IconButton
                      _hover={{ bg: "black" }}
                      color="white"
                      bg="black"
                      icon={<FaApple size="31px" />}
                    />
                    <VStack>
                      <Text mb={-8} fontSize={10}>
                        Download on the
                      </Text>
                      <Text mt={-7}>Apple Store</Text>
                    </VStack>
                  </HStack>
                  <HStack
                    p={7}
                    pb="12px"
                    borderRadius="5px"
                    bg="black"
                    color="white"
                    flexDirection="row"
                  >
                    <IconButton
                      _hover={{ bg: "black" }}
                      color="white"
                      bg="black"
                      icon={<FaGooglePlay size="25px" />}
                    />
                    <VStack>
                      <Text mb={-8} fontSize={10}>
                        Get it On
                      </Text>
                      <Text mt={-8}>Google Play</Text>
                    </VStack>
                  </HStack>
                </Flex>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              justifyContent="center"
            >
              <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
                KEEP IN TOUCH
              </Text>
              <Icon w={22} h={22} as={BsInstagram} />
              <Icon w={22} h={22} as={ImFacebook2} />
              <Icon w={22} h={22} as={ImTwitter} />
            </Box>
          </Box>
          <Box textAlign="justify" fontSize="14px">
            <Text color="#4a4a4a" fontSize="15px" fontWeight="bold">
              CONTACT US
            </Text>
            <Text fontSize="15px">Call: 1800-4190-786</Text>
            <Text>Talktous@licious.com</Text>
            <Text color="#4a4a4a" fontSize="12px" fontWeight="bold">
              REGISTERED OFFICE ADDRESS:
            </Text>
            <Text>House Licious, Zed Pearl, No 12,</Text>
            <Text>Domlur Layout</Text>
            <Text>Bangalore Karnataka.</Text>
          </Box>
          <Box textAlign="justify" fontSize="14px">
            <Text>T&C</Text>
            <Text>FAQ</Text>
            <Text>Privacy Policy</Text>
            <Text color="#4a4a4a" fontSize="13px" fontWeight="bold">
              HAVE SECURITY
            </Text>
            <Text>Mail us to:</Text>
            <Text>security@licious.com</Text>
          </Box>
          <Image
            w="13%"
            h="13%"
            mt="10px"
            src="/Image/HomePart22/3-dsecure.png"
          />
        </Box>
      </Box>

      <Stack dir="column" display="flex" w="78%" m="auto">
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            CITIES WE SERVE
          </Text>
          <Divider h="0.5px" bg="grey" w="88%" />
        </HStack>
        <Stack dir="column">
          <HStack gap="13px">
            <Text>Bengaluru</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>
            <Text>NCR </Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>
            <Text>Hyderabad</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>
            <Text>Chandigarh</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>
            <Text>Panchkula</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>{" "}
            <Text>Mohali</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>{" "}
            <Text>Mumbai</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>{" "}
            <Text>Pune</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>{" "}
            <Text>Chennai</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>{" "}
            <Text>Coimbatore</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>{" "}
            <Text>Jaipur</Text>
            <Center height="35px">
              <Divider bg="grey" w="0.5px" orientation="vertical" />
            </Center>
          </HStack>
          <HStack gap="15px">
            <Text>Vijayawada</Text>
            <Center height="35px">
              <Divider orientation="vertical" bg="grey" w="0.5px" />
            </Center>{" "}
            <Text>Visakhapatnam</Text>
            <Center height="35px">
              <Divider orientation="vertical" bg="grey" w="0.5px" />
            </Center>{" "}
            <Text>Kolkata</Text>
            <Center height="35px">
              <Divider orientation="vertical" bg="grey" w="0.5px" />
            </Center>{" "}
            <Text>Lucknow</Text>
            <Center height="35px">
              <Divider orientation="vertical" bg="grey" w="0.5px" />
            </Center>{" "}
            <Text>Kanpur</Text>
            <Center height="35px">
              <Divider orientation="vertical" bg="grey" w="0.5px" />
            </Center>{" "}
            <Text>Nagpur</Text>
            <Center height="35px"></Center>{" "}
          </HStack>
        </Stack>
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            POPULAR SEARCHES
          </Text>
          <Divider h="0.5px" bg="grey" w="85%" />
        </HStack>
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px" mt={-2}>
            CHICKEN
          </Text>
        </HStack>
        <HStack fontSize="15px" gap="6px">
          <Text>Chicken Breast (Boneless)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken (Skinless) - Curry Cut (Large)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Mince/Keema</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Leg Curry Cut (Large - 4 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Lollipop - 10 Pieces</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
        </HStack>
        <HStack gap="15px">
          <Text>Tender Spring Chicken Curry Cut</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken - Whole with Skin</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Chicken Curry Cut (Small - 13 to 16 Pieces)</Text>
          <Center height="35px"></Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            EGGS
          </Text>
        </HStack>
        <HStack>
          <Text mt={-10}>Classic Eggs - Pack Of 6</Text>
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            MUTTON
          </Text>
        </HStack>
        <HStack>
          <Text>Goat Mince/Keema</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Rich Goat Curry Cut (Small - 16 to 20 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Lean Goat Curry Cut (Small - 16 to 20 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Lean Goat Curry Cut (Small - 16 to 20 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
        </HStack>
        <HStack gap="10px">
          <Text>Rich Goat Curry Cut (Small - 16 to 20 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Lamb Ribs and Chops</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Goat Ribs and Chops</Text>
          <Center height="35px"></Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            READY TO COOK
          </Text>
        </HStack>
        <HStack fontSize="15px" gap="6px">
          <Text>Chicken Breast (Boneless)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken (Skinless) - Curry Cut (Large)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Mince/Keema</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Leg Curry Cut (Large - 4 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Lollipop - 10 Pieces</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
        </HStack>
        <HStack gap="15px">
          <Text>Tender Spring Chicken Curry Cut</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken - Whole with Skin</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Chicken Curry Cut (Small - 13 to 16 Pieces)</Text>
          <Center height="35px"></Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            EXOTIC MEATS
          </Text>
        </HStack>
        <HStack gap="15px">
          <Text>Tender Spring Chicken Curry Cut</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken - Whole with Skin</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Chicken Curry Cut (Small - 13 to 16 Pieces)</Text>
          <Center height="35px"></Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            SPREADS
          </Text>
        </HStack>
        <HStack fontSize="15px" gap="6px">
          <Text>Chicken Breast (Boneless)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken (Skinless) - Curry Cut (Large)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Mince/Keema</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Leg Curry Cut (Large - 4 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Lollipop - 10 Pieces</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
        </HStack>
        <HStack gap="15px">
          <Text>Tender Spring Chicken Curry Cut</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken - Whole with Skin</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Chicken Curry Cut (Small - 13 to 16 Pieces)</Text>
          <Center height="35px"></Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            KEBABS
          </Text>
        </HStack>
        <HStack fontSize="15px" gap="6px">
          <Text>Chicken Breast (Boneless)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken (Skinless) - Curry Cut (Large)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Mince/Keema</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Leg Curry Cut (Large - 4 pieces)</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Lollipop - 10 Pieces</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            MEAT MASALA
          </Text>
        </HStack>
        <HStack fontSize="15px" gap="6px">
          <Text>Classic Meat Masala</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Dakshin Pepper Fry Masala </Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chatpata Fish Fry Masala</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Classic Chicken Masala</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Chicken Lollipop - 10 Pieces</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
        </HStack>
        <HStack gap="15px">
          <Text> Asli Garam Masala</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text> Original Tandoori Chicken Masala</Text>
          <Center height="35px">
            <Divider orientation="vertical" bg="grey" w="0.5px" />
          </Center>{" "}
          <Text>Chicken Curry Cut (Small - 13 to 16 Pieces)</Text>
          <Center height="35px"></Center>{" "}
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />
        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
            We will sell only the meat that we would eat ourselves.
          </Text>
        </HStack>
        <HStack>
          <Text textAlign="justify" mt={-10}>
            At Licious, we’re big meat-lovers. And by big, we mean huge. So when
            it comes to the meat we put on your plate, we’re extremely picky.
            Every single product is handpicked by a team with years of
            experience.
          </Text>
        </HStack>

        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px" mt={-10}>
            If it’s not fresh, we won’t sell it
          </Text>
        </HStack>
        <HStack>
          <Text textAlign="justify" mt={-10}>
            For meat to stay fresh and retain its natural juices, it needs to be
            stored at a temperature between 0° and 5°C. We maintain this
            temperature from the time we procure the product to cleaning,
            cutting and storing it, until it leaves for delivery. And even when
            it’s out for delivery, we keep it chilled right up to your
            doorstep.Did we mention that we’re obsessed?
          </Text>
        </HStack>

        <HStack>
          <Text color="#4a4a4a" fontWeight="bold" fontSize="16px" mt={-10}>
            We will charge only for what you buy
          </Text>
        </HStack>
        <HStack>
          <Text textAlign="justify" mt={-10}>
            Doesn’t everyone do this? Not really. Most other places first weigh
            the meat, then cut up the pieces, and throw out the parts which
            aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you
            still pay based on the original weight even though what you finally
            get is 10% to 30% less
          </Text>
        </HStack>
        <Divider h="0.5px" bg="grey" w="100%" />

        <Text color="#4a4a4a" fontWeight="bold" fontSize="16px">
          {" "}
          @ 2022 Delightful Gourmet Pvt Ltd. All Rights Reserved.
        </Text>
        <HStack>
          <Text mt={-1}>
            Licious is your one-stop fresh meat delivery shop. In here, you get
            nothing but the freshest meat & seafood, delivered straight to your
            doorstep. Now you can buy meat online anytime at your convenience.
            Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
            Prawns, Crabs), Marinades & Cold Cuts. All our products are
            completely natural and healthy. Once you've experienced Licious,
            you'll never go back to the old way of buying meat and seafood.
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
