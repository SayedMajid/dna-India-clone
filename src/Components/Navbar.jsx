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
      <Box display="flex" justifyContent="space-between" p="15px" bg="#ffde2f" position="fixed" w="full">
        <Box>
          <Link to="/">
            <Image src={logo} alt="dnaLogo" h="40px" w="88px" />
          </Link>
        </Box>
        <Box>
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
