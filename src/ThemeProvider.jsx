import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");

  // Apply theme to document root
  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    let appliedTheme = newTheme;
    if (newTheme === "system") {
      appliedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    root.setAttribute("data-theme", appliedTheme);
    localStorage.setItem("theme", newTheme);
  };

  // On mount: set theme from localStorage or system
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
    // Listen for system theme changes
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
    // eslint-disable-next-line
  }, []);

  // When theme changes, apply it
  useEffect(() => {
    applyTheme(theme);
    // eslint-disable-next-line
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
