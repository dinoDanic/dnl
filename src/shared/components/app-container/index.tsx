import { Header } from "modules/header";
import React from "react";
import styled from "styled-components";

type AppContainerProps = {
  children: React.ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return (
    <AppContainerC>
      <Header />
      <AppChildren>{children}</AppChildren>
    </AppContainerC>
  );
};

const AppContainerC = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppChildren = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
`;
