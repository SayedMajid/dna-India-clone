import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box border="0px solid black" mt="100px" bg="#1c1c1c">
      <Box>
        {/* Box 1 */}
        <Box borderBottom="2px solid gray" display="flex" p="20px" pb="20px">
          <Box mr="100px">
            <Image
              src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"
              h="41"
              w="89"
            ></Image>
          </Box>
          <Box
            color="gray"
            border="0px solid white"
            display="flex"
            alignItems="center"
            w="60%"
            justifyContent="space-between"
            fontSize="16px"
          >
            <Text>HOME</Text>
            <Text>WORLD</Text>
            <Text>BUSINESS</Text>
            <Text>TECHNOLOGY</Text>
            <Text>SPORTS</Text>
            <Text>CRICKET</Text>
            <Text>ENTERTAINMENT</Text>
          </Box>
        </Box>
        {/* Box 2 */}
        <Box borderBottom="2px solid gray" display="flex" p="20px" pb="20px">
          <Box color="gray" mr="100px">
            <Text fontSize="20px">FOLLOW US ON</Text>
            <Box display="flex" justifyContent="space-between">
              <Image
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg"
                h="24px"
                w="26px"
              />
              <Image
                h="24px"
                w="26px"
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg"
              />
              <Image
                h="24px"
                w="26px"
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg"
              />
            </Box>
          </Box>
          <Box
            color="gray"
            border="0px solid white"
            display="flex"
            alignItems="center"
            w="60%"
            justifyContent="space-between"
            fontSize="16px"
            textTransform="Uppercase"
          >
            <Text>About</Text>
            <Text>Contact-Us</Text>
            <Text>Investors</Text>
            <Text>Advertise</Text>
            <Text>Privacy-Policy</Text>
          </Box>
        </Box>
        {/* Box 3 */}
        <Box borderBottom="2px solid gray" display="flex" p="20px" pb="20px">
          <Box
            mr="100px"
            color="gray"
            fontSize="18px"
            textTransform="uppercase"
          >
            Partner Site
          </Box>
          <Box
            color="gray"
            border="0px solid white"
            display="flex"
            alignItems="center"
            w="70%"
            justifyContent="space-between"
            fontSize="16px"
            textTransform="Uppercase"
          >
            <Text>ZEE NEWS</Text>
            <Text>HINDI NEWS</Text>
            <Text>MARATHI NEWS</Text>
            <Text>BENGALI NEWS</Text>
            <Text>TAMIL NEWS</Text>
            <Text>MALAYALAM NEWS</Text>
            <Text>WION</Text>
          </Box>
        </Box>
        <Text color={"gray"} p="10px" textAlign={"center"}>©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
