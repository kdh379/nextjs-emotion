type Theme = "light" | "dark";

export function useTheme() {

  const setTheme = (theme: Theme) => {
    document.documentElement.className = theme;
  };

  return {
    setTheme,
  };
}