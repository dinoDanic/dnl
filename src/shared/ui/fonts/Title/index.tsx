import React from "react";
import styled from "styled-components";

type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

const TitleStyle = styled.h3``;
