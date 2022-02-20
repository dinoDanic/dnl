import styled from "styled-components";
import { picoloLight } from "styles/fonts";

export const ModuleC = styled.div`
  width: fit-content;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.sizes.margin.md};
`;

export const IconC = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding-left: ${({ theme }) => theme.sizes.padding.xxl};
  padding-right: ${({ theme }) => theme.sizes.padding.xxl};
  border-radius: ${({ theme }) => theme.borders.md};
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  padding: ${({ theme }) => theme.sizes.padding.xl};
`;

export const Name = styled.div`
  ${picoloLight}
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
`;
