import { create } from "zustand";
import { axiosInstance } from "../config/axios.config.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLogging: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (e) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (user) => {
    try {
      console.log(user);
      set({ isSigningUp: true });
      const res = await axiosInstance.post("/auth/signup", user);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
      return {
        success: false,
        message: e.response?.data?.message || e.message,
      };
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (credentials) => {
    try {
      set({ isLogging: true });
      const res = await axiosInstance.post("/auth/login", credentials);
      set({ authUser: res.data });
      toast.success("Login successful");
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
      return {
        success: false,
        message: e.response?.data?.message || e.message,
      };
    } finally {
      set({ isLogging: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
    }
  },
}));
