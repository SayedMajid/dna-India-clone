import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      border="0px solid black"
      w="307px"
      ml="12px"
      mt="12px"
      h="fit-content"
      pos="fixed"
      top="70px"
    >
      <Box display="flex" _hover={{bg: "#ffde2f"}} p="5px">
        <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg"
          alt=""
          mr="5px"
        />
        <Link to="/LatestNews">Latest News</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Photos">Photos</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Videos">Videos</Link>
      </Box>
      <Box  display="flex"_hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Explainers">Explainers</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px"> 
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg"
          alt=""
          mr="5px"
        />
        <Link to="/India">India</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Entertainment">Entertainment</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Sports">Sports</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Viral News">Viral News</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Lifestyle">Lifestyle</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg"
          alt=""
          mr="5px"
        />
        <Link to="/Business">Business</Link>
      </Box>
      <Box  display="flex" _hover={{bg: "#ffde2f"}} p="5px">
      <Image
          src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg"
          alt=""
          mr="5px"
        />
        <Link to="/World">World</Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
