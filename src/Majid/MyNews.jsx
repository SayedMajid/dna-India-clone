import React from "react";
import { Box, Image } from "@chakra-ui/react";

const MyNews = () => {

    let details = JSON.parse(localStorage.getItem("MyNews"))
    console.log(details)
  return (
    <Box
      border="0px solid black"
      mt="12px"
      ml="10px"
      w="fit-content"
      position="relative"
      top="70px"
      left="30px"
      p="10px"
    >
        <Image src={details.imageUrl}/>
    </Box>
  );
};

export default MyNews;
