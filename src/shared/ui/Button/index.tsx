import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  padding-left: ${({ theme }) => theme.sizes.padding.md};
  padding-right: ${({ theme }) => theme.sizes.padding.md};
  padding-top: ${({ theme }) => theme.sizes.padding.sm};
  padding-bottom: ${({ theme }) => theme.sizes.padding.sm};
`;
