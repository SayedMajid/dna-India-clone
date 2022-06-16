import { Box , Image, Text} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons"
import {Link , useNavigate} from "react-router-dom"
import React from "react";
import Explainer from "./Data/ExplainersData";

const Explainers = () => {
  console.log(Explainer);

  const navigate = useNavigate();

  const myFn = (e) => {
    localStorage.setItem("MyNews", JSON.stringify(e))
    navigate("/MyNews")
  }
  return (
    <Box
      // border="1px solid black"
      mt="12px"
      ml="10px"
      w="fit-content"
      position="relative"
      top="70px"
      left="30px"
      p="10px"
    >
      <Box mb="10px" fontSize="14px" color="gray.500">
        <Link to="/">Home</Link>
        <ChevronRightIcon/>
        <Link to="/Explainers">Explainers</Link>
      </Box>
      <Text fontSize="2xl" borderBottom="2px solid #e2e2e2" pb="4px">Explainers</Text>
      {/* Data coming from ExplainersData.js file */}
      <Box
        border="0px solid black"
        mt="10px"
        display="flex"
        flexDirection="column"
        gap="10px"
        w="650px"
      >
        {Explainer.map((el) => {
          return (
            <Box key={el.name} display="flex" bg="#fff" p="7px" border="0px solid black" onClick={() => myFn(el)}>
              <Image src={el.imageUrl} w="157.88px" h="89px"/>
              <Text ml="10px">{el.name}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Explainers;
