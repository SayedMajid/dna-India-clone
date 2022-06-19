import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

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
            {/* <Text>HOME</Text>
            <Text>WORLD</Text>
            <Text>BUSINESS</Text>
            <Text>TECHNOLOGY</Text>
            <Text>SPORTS</Text>
            <Text>CRICKET</Text>
            <Text>ENTERTAINMENT</Text> */}
            <Link to="/">Home</Link>
            <Link to="/Business">Business</Link>
            <Link to="/World">World</Link>
            <Link to="/Entertainment">Entertainment</Link>
            <Link to="/Sports">Sports</Link>
            <Link to="/Sports">Cricket</Link>
            <Link to="/Entertainment">Entertainment</Link>
          </Box>
        </Box>
        {/* Box 2 */}
        <Box borderBottom="2px solid gray" display="flex" p="20px" pb="20px">
          <Box color="gray" mr="100px">
            <Text fontSize="20px">FOLLOW US ON</Text>
            <Box display="flex" justifyContent="space-between">
            <a href="https://www.facebook.com/">
              <Image
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg"
                h="24px"
                w="26px"
                alt="https://www.facebook.com/" 
              />
              </a>

              <a href="https://twitter.com/?lang=en-in">
              <Image
                h="24px"
                w="26px"
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg"
              />
              </a>

              <a href="https://www.youtube.com/">
              <Image
                h="24px"
                w="26px"
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg"
              />
              </a>
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
            {/* <Text>About</Text>
            <Text>Contact-Us</Text>
            <Text>Investors</Text>
            <Text>Advertise</Text>
            <Text>Privacy-Policy</Text> */}
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact-Us</Link>
            <Link to="/INVESTORS">Invertors</Link>
            <Link to="/ADVERTISE">Advertises</Link>
            <Link to="/PRIVACYPOLICY">Privacy-Policy</Link>
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
            {/* <Text>ZEE NEWS</Text>
            <Text>HINDI NEWS</Text>
            <Text>MARATHI NEWS</Text>
            <Text>BENGALI NEWS</Text>
            <Text>TAMIL NEWS</Text>
            <Text>MALAYALAM NEWS</Text>
            <Text>WION</Text> */}
            <a href="https://zeenews.india.com/">ZEE NEWS</a>
            <a href="https://zeenews.india.com/hindi">HINDI NEWS</a>
            <a href="https://zeenews.india.com/marathi/">MARATHI NEWS</a>
            <a href="https://zeenews.india.com/bengali/">BENGALI NEWS</a>
            <a href="https://zeenews.india.com/tamil/">TAMIL NEWS</a>
            <a href="https://zeenews.india.com/malayalam/">MALAYALAM NEWS</a>
            <a href="https://www.zeebiz.com/">ZEE BUSINESS</a>
            <a href="https://www.wionews.com/">WION</a>
          </Box>
        </Box>
        <Text color={"gray"} p="10px" textAlign={"center"}>©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
