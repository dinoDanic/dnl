import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Container: React.FC<Props> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.md};
`;
