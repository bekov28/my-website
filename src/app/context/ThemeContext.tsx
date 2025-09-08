import React, { useState, createContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ childen }: { childen: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mountet, setMounted] = useState(false);

  //update the theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme: () => setTheme(theme === "light" ? "dark" : "light") }}
    >
      {childen}
    </ThemeContext.Provider>
  );
};
