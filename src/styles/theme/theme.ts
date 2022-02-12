import { DefaultTheme } from "styled-components";
import { colors, colorsI } from "./colors";
import { sizes, sizesI } from "./sizes";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorsI;
    sizes: sizesI;
  }
}

export const lightTheme: DefaultTheme = {
  colors,
  sizes,
};
