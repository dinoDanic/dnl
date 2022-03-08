import React from "react";
import styled, { css } from "styled-components";

type BoxType = {
  children: React.ReactNode;
};

export const Box: React.FC<BoxType> = ({ children }) => {
  return <BoxC>{children}</BoxC>;
};

export const BoxStyle = css`
  padding: ${({ theme }) => theme.sizes.padding.lg};
  border: 1px solid ${({ theme }) => theme.colors.quinary};
  border-radius: ${({ theme }) => theme.borders.sm};
  width: 100%;
`;

const BoxC = styled.div`
  ${BoxStyle}
`;
