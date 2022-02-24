import { BoxStyle } from "components/ui";
import React, { useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import { picolo, picoloLight } from "styles/fonts";
import { SelectOption } from "types";

interface Props {
  option: SelectOption;
  isSelected: boolean;
  onClick: (id: number) => void;
}

interface IContainerSelect {
  isSelected: boolean;
}

export const SelectFromMap: React.FC<Props> = ({
  option,
  isSelected,
  onClick,
}) => {
  return (
    <Container isSelected={isSelected} onClick={() => onClick(option.id)}>
      {option.value}
    </Container>
  );
};

const selectedStyle = (theme: DefaultTheme) => `
border: 1px solid ${theme.colors.success};
background-color: ${theme.colors.successLight};
`;

const Container = styled.div<IContainerSelect>`
  ${BoxStyle};
  ${picolo};
  cursor: pointer;
  padding-left: ${({ theme }) => theme.sizes.padding.lg};
  padding-right: ${({ theme }) => theme.sizes.padding.lg};
  padding-top: ${({ theme }) => theme.sizes.padding.md};
  padding-bottom: ${({ theme }) => theme.sizes.padding.md};
  margin-right: ${({ theme }) => theme.sizes.margin.md};
  ${({ isSelected, theme }) => isSelected && selectedStyle(theme)}
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.success};
  }
`;
