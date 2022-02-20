import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactChild[];
}

export const Form: React.FC<FormProps> = ({ children, ...other }) => {
  return <FormC {...other}>{children}</FormC>;
};

const FormC = styled.form``;
