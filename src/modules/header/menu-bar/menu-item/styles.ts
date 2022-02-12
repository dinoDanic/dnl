import styled, { css, DefaultTheme } from "styled-components";
import { picoloLight } from "styles/fonts/fonts";

interface LiProps {
  active: boolean;
}

const liDefaulStyle = (theme: DefaultTheme) => `
  padding: ${theme.sizes.padding.md};
  margin-right: ${theme.sizes.margin.md};
  border-bottom: 2px solid transparent;
  transition: 0.2s ease-out;
  cursor: pointer;
  &::first-letter {
    text-transform: capitalize;
  }
  &:hover {
    ${activeStyle};
  }
`;

const activeStyle = css`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Li = styled.li<LiProps>`
  ${({ theme }) => liDefaulStyle(theme)}
  ${picoloLight};
  ${({ active }) => active && activeStyle};
`;
