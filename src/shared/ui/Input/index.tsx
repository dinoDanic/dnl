import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...other }) => {
  return (
    <InputC>
      {label && <Label>{label}</Label>}
      <InputStyle {...other} />
    </InputC>
  );
};

const InputC = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;

const Label = styled.h5`
  margin-bottom: ${({ theme }) => theme.sizes.margin.xs};
`;

const InputStyle = styled.input`
  padding: ${({ theme }) => theme.sizes.padding.sm};
  border: 1px solid ${({ theme }) => theme.colors.quinaryDark};
  border-radius: ${({ theme }) => theme.borders.xs};
`;
