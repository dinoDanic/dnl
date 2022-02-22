import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { defaultInputStyle } from "styles/input";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Label } from "..";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, required, ...other }) => {
  return (
    <InputC>
      {label && <Label>{label}</Label>}
      <InputStyle {...other} />
      {required && <BsFillCheckSquareFillStyled />}
    </InputC>
  );
};

const InputC = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;

const InputStyle = styled.input`
  ${defaultInputStyle}
`;
const BsFillCheckSquareFillStyled = styled(BsFillCheckSquareFill)`
  color: ${({ theme }) => theme.colors.success};
`;
