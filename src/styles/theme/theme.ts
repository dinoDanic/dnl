import { DefaultTheme } from "styled-components";
import { bordersI, borders } from "./borders";
import { colors, colorsI } from "./colors";
import { sizes, sizesI } from "./sizes";
import { shadows, shadowsI } from "./shadows";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorsI;
    sizes: sizesI;
    borders: bordersI;
    shadows: shadowsI;
  }
}

export const lightTheme: DefaultTheme = {
  colors,
  sizes,
  borders,
  shadows,
};
