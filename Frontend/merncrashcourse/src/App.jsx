import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import CreateProductPage from "./Pages/CreateProductPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import SettingsPage from "./Pages/SettingsPage.jsx";
import { Loader } from "lucide-react";
function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    // token changed to !token
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin size-14" />
      </div>
    );
  }
  return (
    <Box minH="100dvh" bg={bg}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/create"
          element={authUser ? <CreateProductPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Box>
  );
}

export default App;
