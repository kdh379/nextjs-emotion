import "@emotion/react";

import { Interpolation } from "@emotion/react";

import theme from "./theme";

type CustomTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}

declare module "react" {
  interface Attributes {
    css?: Interpolation<Theme>;
  }
}