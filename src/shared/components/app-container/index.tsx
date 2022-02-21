import React from "react";
import styled from "styled-components";

type AppContainerProps = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <AppContainerC>{children}</AppContainerC>;
};

const AppContainerC = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  height: 100vh;
`;
