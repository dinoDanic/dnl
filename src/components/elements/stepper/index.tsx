import { StepperType } from "types";
import { Name, OrderNumber, StepC, StepperC } from "./styles";

type StepperProps = {
  steps: StepperType[];
  onStep: number;
};

export const Stepper: React.FC<StepperProps> = ({ steps, onStep }) => {
  return (
    <StepperC>
      {steps.map((step) => {
        const active = step.step === onStep;
        return (
          <StepC active={active} key={step.id}>
            <OrderNumber active={active}>{step.step}.</OrderNumber>
            <Name>{step.name}</Name>
          </StepC>
        );
      })}
    </StepperC>
  );
};
