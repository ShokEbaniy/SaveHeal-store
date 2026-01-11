import React from "react";
import {
  Box,
  Flex,
  Button,
  Container,
  Text,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill, BsShopWindow } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxW="1140px"
      borderBottomWidth="1px"
      pb={4}
      mb={8}
      bg={useColorModeValue("gray.100", "gray.1100")}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box fontWeight="bold" fontSize={{ base: "22", md: "28" }}>
          <Text
            bgGradient={useColorModeValue(
              "linear(to-r, green.500, green.600, green.700, green.900)",
              "linear(to-r, green.200, green.300, green.400, green.500)"
            )}
            bgClip="text"
            mt="2"
          >
            SaveHeal foods
          </Text>
        </Box>
        <Text
          fontSize={{ base: "28", md: "20 " }}
          mt={{ base: 4, md: 3 }}
          display="flex"
          alignItems="center"
        >
          <HStack spacing={4} mt={{ base: 4, md: 0 }}>
            <Link to="/">
              <Box
                px={4}
                py={3}
                bg={useColorModeValue("gray.200", "gray.800")}
                borderRadius="md"
                transition="0.3s"
                _hover={{
                  bg: useColorModeValue("gray.300", "gray.700"),
                }}
              >
                <BsShopWindow />
              </Box>
            </Link>
            <Link to="/create">
              <Box
                px={4}
                py={3}
                bg={useColorModeValue("gray.200", "gray.800")}
                borderRadius="md"
                transition="0.3s"
                _hover={{
                  bg: useColorModeValue("gray.300", "gray.700"),
                }}
              >
                <BsFillPlusSquareFill />
              </Box>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button>
          </HStack>
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
