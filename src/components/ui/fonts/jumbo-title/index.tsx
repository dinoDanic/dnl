import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const JumboTitle: React.FC<Props> = ({ children }) => {
  return <JumboTitleStyle>{children}</JumboTitleStyle>;
};

const JumboTitleStyle = styled.h2``;
