"use client";

import { css, ThemeProvider } from "@emotion/react";
import type { Theme } from "@emotion/react";

import theme from "@/styles/theme";


export default function Providers({children}: React.PropsWithChildren) {
  return <ThemeProvider theme={theme}>
    <main css={layoutCss}>
      {children}
    </main>
  </ThemeProvider>;
}

const layoutCss = css`
  width: 800px;
  margin: 0 auto;
`;