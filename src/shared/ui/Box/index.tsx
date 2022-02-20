import React from "react";
import styled from "styled-components";

type BoxType = {
  children: React.ReactNode;
};

export const Box: React.FC<BoxType> = ({ children }) => {
  return <BoxC>{children}</BoxC>;
};

const BoxC = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.lg};
  border-radius: ${({ theme }) => theme.borders.sm};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;
