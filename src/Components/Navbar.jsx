import { Box, FormControl, Input, Button, Image } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../assets/logodna.png";
import { useState } from "react";
import React from "react";

export const Navbar = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    // console.log(value)
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between" h="65px" bg="#ffde2f" position="fixed" zIndex="2" w="full" boxShadow=" 0 2px 8px 1px rgb(0 0 0 / 20%)">
        <Box>
          <Link to="/">
            <Image src={logo} alt="dnaLogo" h="40px" w="88px" mt="12px" ml="20px"  />
          </Link>
        </Box>
        <Box mt="10px">
          <FormControl display="flex" w="300px">
            <Box border="1px solid black" borderRight="none">
              <Input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                borderRight="none"
                borderRadius="none"
                border="none"
              />
            </Box>
            <Button
              h=""
              onClick={handleClick}
              bg="none"
              border="1px solid"
              borderLeft="none"
              borderRadius="none"
              _hover={{ bg: "none" }}
            >
              <Search2Icon w="5" h="5" />
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
