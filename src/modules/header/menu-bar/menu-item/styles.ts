import styled, { css, DefaultTheme } from "styled-components";
import { picoloLight } from "styles/fonts/fonts";

interface LiProps {
  active: boolean;
}

const liDefaulStyle = (theme: DefaultTheme) => `
  padding: ${theme.sizes.padding.md};
  border-bottom: 2px solid transparent;
  transition: 0.2s ease-out;
  cursor: pointer;
  &:first-letter {
    text-transform: capitalize;
  };
  &:hover {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
    box-shadow: 0px 2px;
  };
`;

const activeStyle = css`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px;
`;

export const Li = styled.li<LiProps>`
  ${({ theme }) => liDefaulStyle(theme)};
  ${picoloLight};
  ${({ active }) => active && activeStyle};
`;
