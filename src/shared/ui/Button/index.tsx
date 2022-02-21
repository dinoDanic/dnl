import React, { HTMLProps } from "react";
import styled from "styled-components";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactChild | string | undefined;
}

export const Button: React.FC<ButtonProps> = ({ children, ...other }) => {
  return <ButtonStyle {...other}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  padding-top: ${({ theme }) => theme.sizes.padding.md};
  padding-bottom: ${({ theme }) => theme.sizes.padding.md};
  background-color: ${({ theme }) => theme.colors.primary};
  min-width: 105px;
  color: white;
  font-size: 12px;
  border-radius: ${({ theme }) => theme.borders.xs};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
