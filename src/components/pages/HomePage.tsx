"use client";

import Button from "@/components/ui/button";
import Text from "@/components/ui/text";
import { useTheme } from "@/hooks/use-theme";
import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export default function HomePage() {

  const { setTheme } = useTheme();

  return (
    <div css={layoutCss}>
      <Text as="h1" variant="h1">NextJS + Emotion</Text>
      <div css={listCss}>
        <Button
          onClick={() => setTheme("light")}
        >light</Button>
        <Button
          onClick={() => setTheme("dark")}
        >dark</Button>
      </div>
      <div css={wrapperCss}>
        <Text as="h2" variant="h2">Button</Text>
        <div css={listCss}>
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div css={listCss}>
          <Button>Default</Button>
          <Button size="sm">sm</Button>
          <Button size="lg">lg</Button>
        </div>
      </div>
    </div>
  );
}

const layoutCss = css`
  padding: 12px;
`;

const wrapperCss = (theme: Theme) => css({
  borderBottom: `1px solid ${theme.color.border}`,
  marginBottom: theme.spacing.lg,
});

const listCss = css`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;