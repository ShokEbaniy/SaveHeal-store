import { create } from "zustand";
import { THEMES } from "../constants";

export const useThemesStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",

  setTheme: (t) => {
    localStorage.setItem("theme", t);
    set({ theme: t });
  },
}));
