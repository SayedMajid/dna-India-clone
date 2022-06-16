import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const MyNews = () => {
  let details = JSON.parse(localStorage.getItem("MyNews"));
  console.log(details);
  return (
    <Box
      border="0px solid black"
      mt="12px"
      ml="10px"
      w="650px"
      position="relative"
      top="70px"
      left="30px"
      p="10px"
    >
      <Text
        color="#36363c"
        fontSize={"32px"}
        lineHeight="33px"
        fontWeight={"700"}
        p="5px 0 15px 0"
      >
        {details.title} &#x7c; {details.date}
      </Text>
      <Image src={details.imageUrl} />
      <Text
        m="10px 0 10px 0"
        fontSize="20px"
        color="#4c4c4c"
        line-height="30px"
        fontWeight="400"
      >
        {details.content}
      </Text>
    </Box>
  );
};

export default MyNews;
