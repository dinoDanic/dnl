import React from "react";
import styled from "styled-components";
import { IButton } from "types";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactChild | string | undefined;
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  ...other
}) => {
  return (
    <ButtonStyle width={width} {...other}>
      {children}
    </ButtonStyle>
  );
};

const addWidth = (width: string) => `
  width: ${width}
`;

const ButtonStyle = styled.button<IButton>`
  ${({ width }) => width && addWidth(width)};
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
