"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Storage from "../utils/Storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = Storage.getStorage(Storage.keys.THEME);
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      Storage.saveStorage(Storage.keys.THEME, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      Storage.saveStorage(Storage.keys.THEME, "light");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
