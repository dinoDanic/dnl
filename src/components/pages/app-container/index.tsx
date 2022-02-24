import { Header } from "modules/header";
import React from "react";
import styled from "styled-components";
import { device, size } from "styles/theme/screenSizes";

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const AppChildren = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${device.deksop} {
    width: ${size.desktop};
  }
`;
