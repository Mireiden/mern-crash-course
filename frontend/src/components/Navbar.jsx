import {
  Container,
  Flex,
  HStack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1440px"} px={4}>
      <Flex
        h={16}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Link to="/">
          <Text
            fontSize={{ base: 28, sm: 35 }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgClip="text"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.400"
          >
            Product store 🛒
          </Text>
        </Link>

        <HStack align={{ base: Center }} gap={2} alignItems={"center"}>
          <Link to="/create">
            <Button aria-label="Create product">
              <FaRegSquarePlus size={22} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} aria-label="Toggle color mode">
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
