import { useTheme as useNextTheme } from "next-themes";

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" || (theme === "system" && systemTheme === "dark") ? "light" : "dark");
  };

  return {
    theme,
    setTheme,
    systemTheme,
    toggleTheme,
    isDark: theme === "dark" || (theme === "system" && systemTheme === "dark"),
  };
} 