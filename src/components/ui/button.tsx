import { css, Theme, useTheme } from "@emotion/react";

type ButtonVariant = keyof ReturnType<typeof variants>;
type ButtonSize = keyof ReturnType<typeof sizes>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant="default",
  size="default",
  children,
  ...props
}: ButtonProps) {

  const theme = useTheme();

  return (
    <button
      css={[defaultCss, variants(theme)[variant], sizes(theme)[size]]} 
      {...props}
    >
      {children}
    </button>);
}

const defaultCss = (theme: Theme) => css({
  borderRadius: theme.radius.lg,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: theme.font.weight.medium,
  cursor: "pointer",
  transition: "opacity 0.2s",

  "&:hover": {
    opacity: 0.8,
  },

  "&:active": {
    opacity: 0.6,
  },
});

const variants = (theme: Theme) => ({
  default: css({
    backgroundColor: theme.color.primary,
    color: theme.color.primary_foreground,
  }),
  secondary: css({
    backgroundColor: theme.color.secondary,
    color: theme.color.secondary_foreground,
  }),
  destructive: css({
    backgroundColor: theme.color.destructive,
    color: theme.color.destructive_foreground,
  }),
});

const sizes = (theme: Theme) => ({
  default: css({
    height: "2.5rem",
    padding: "0.5rem 1rem",
    fontSize: theme.font.size.lg,
  }),
  sm: css({
    height: "2.25rem",
    padding: "0.5rem 0.75rem",
    fontSize: theme.font.size.lg,
  }),
  lg: css({
    height: "2.75rem",
    padding: "0.75rem 2rem",
    fontSize: theme.font.size.xl,
  }),
});