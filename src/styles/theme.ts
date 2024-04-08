const theme = {
  color: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: "hsl(var(--primary))",
    primary_foreground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondary_foreground: "hsl(var(--secondary-foreground))",
    destructive: "hsl(var(--destructive))",
    destructive_foreground: "hsl(var(--destructive-foreground))",
    muted: "hsl(var(--muted))",
    muted_foreground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accent_foreground: "hsl(var(--accent-foreground))",
    border: "hsl(var(--border))",
  },
  font: {
    size: {
      lg: "15px",
      xl: "16px",
      xxl: "18px",
    },
    weight: {
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
  shadow: {
    md: "var(--shadow-md)",
  },
};

export default theme;