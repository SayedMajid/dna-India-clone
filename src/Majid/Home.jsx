import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import HomeData from "../Majid/Data/HomeData";
import { useNavigate } from "react-router-dom";
const Home = () => {

  console.log(HomeData);

  const navigate = useNavigate();

  const navigateFiveG = () => {
    navigate("../FiveG")
  }

  return (
    <Box
      border="0px solid black"
      mt="12px"
      ml="10px"
      w="fit-content"
      position="relative"
      top="70px"
      left="310px"
      p="10px"
    >
      {/* TOP News */}
      <Box w="650px" m="auto" bg="white">
        <Image
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2322900-5g-dna.png"
          h="365px"
          w="650px"
          onClick={navigateFiveG}
          cursor="pointer"
        />
        <Text fontSize="18px" fontWeight="semibold">
          5G rollout in India: Cabinet approves auction of 5G Spectrum, speed 10
          times higher than 4G services
        </Text>
      </Box>
      {/* News Content from Api */}
      <Box
        border="0px solid black"
        mt="10px"
        display="flex"
        flexDirection="column"
        gap="10px"
        w="650px"
      >
        {HomeData.map(({ imageUrl, title }) => {
          return (
            <Box display="flex" bg="#fff" p="7px" border="0px solid black">
              <Image src={imageUrl} w="157.88px" h="89px" />
              <Text ml="10px">{title}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;
