import styled, { css, DefaultTheme } from "styled-components";
import { picoloLight } from "styles/fonts/fonts";

interface LiProps {
  active: boolean;
}

const liDefaulStyle = (theme: DefaultTheme) => `
  padding: ${theme.sizes.padding.md};
  margin: ${theme.sizes.margin.sm};
  border-radius: ${theme.borders.sm};
  transition: 0.2s ease-out;
  cursor: pointer;
  color: white;
  &:first-letter {
    text-transform: capitalize;
  };
  &:hover {
    background: white;
    color: ${theme.colors.primary};
  };
`;

const activeStyle = css`
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Li = styled.li<LiProps>`
  ${({ theme }) => liDefaulStyle(theme)};
  ${picoloLight};
  color: white;
  ${({ active }) => active && activeStyle};
`;
