import React from "react";
import styled from "styled-components";

type SubTitleProps = {
  children: React.ReactNode;
};

export const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <SubTitleStyle>{children}</SubTitleStyle>;
};

const SubTitleStyle = styled.h4``;
