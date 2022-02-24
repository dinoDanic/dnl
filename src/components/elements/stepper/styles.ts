import { BoxStyle } from "components/ui";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

interface IStepC {
  active?: boolean;
}

export const StepperC = styled.div`
  ${BoxStyle}
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
`;

const activeStep = (theme: DefaultTheme) => `
  opacity: 1;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primary};
`;

const activeOrderNumber = (theme: DefaultTheme) => `
  color: ${theme.colors.primary};
`;

export const StepC = styled.div<IStepC>`
  display: flex;
  min-width: 200px;
  height: 80px;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  ${({ active, theme }) => active && activeStep(theme)}
`;

export const OrderNumber = styled.div<IStepC>`
  margin-right: 10px;
  ${({ active, theme }) => active && activeOrderNumber(theme)}
`;

export const Name = styled.h5``;
