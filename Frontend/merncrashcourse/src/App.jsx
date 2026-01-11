import { Button, Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import CreateProductPage from "./Pages/CreateProductPage.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <Box minH="100dvh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProductPage />} />
      </Routes>
    </Box>
  );
}

export default App;
