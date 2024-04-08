import { css, Theme, useTheme } from "@emotion/react";
import * as React from "react";

type TextVariants = keyof ReturnType<typeof variants>;

type AsProp<E extends React.ElementType> = {
  as?: E;
}

type PropsOf<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & AsProp<E>
>;

type TextProps<E extends React.ElementType = typeof DEFAULT_ELEMENT> = PropsOf<E> & {
  variant?: TextVariants;
  children?: React.ReactNode;
};

const DEFAULT_ELEMENT = "p";

export default function Text<E extends React.ElementType>({ 
  as,
  variant="p",
  children,
  ...props
}: TextProps<E>) {
  const Component = as ?? DEFAULT_ELEMENT;
  const theme: Theme = useTheme();

  return (
    <Component
      css={[defaultCss, variants(theme)[variant]]}
      {...props}
    >
      {children}
    </Component>);
}

const variants = (theme: Theme) => ({
  h1: css({
    fontSize: theme.font.size.xxl,
    fontWeight: theme.font.weight.bold,
    marginBottom: theme.spacing.lg,
  }),
  h2: css({
    fontSize: theme.font.size.xl,
    fontWeight: theme.font.weight.bold,
    marginBottom: theme.spacing.md,
  }),
  p: css({
    fontSize: theme.font.size.lg,
  }),
  label: css({
    fontSize: theme.font.size.lg,
    fontWeight: theme.font.weight.medium,
  }),
});

const defaultCss = (theme: Theme) => css({
  color: theme.color.foreground,
});
