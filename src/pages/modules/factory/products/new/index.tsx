import { FooterComponent, Stepper } from "components/elements";
import { Button } from "components/inputs";
import { ProductDescription, SelectCategory } from "components/pages";
import { BoxStyle, Title } from "components/ui";
import { useState } from "react";
import { newProductStepper, productsFooterSteps } from "registration";
import styled from "styled-components";

const New = () => {
  const [onStep, setOnStep] = useState(1);
  const findCurrentStep = productsFooterSteps.find((s) => s.step == onStep);
  const maxStep = productsFooterSteps.length;

  const handlePrevStep = () => {
    setOnStep(onStep !== 1 ? onStep - 1 : onStep);
  };

  const handleNextStep = () => {
    setOnStep(onStep + 1);
  };

  const handleSave = () => {};

  return (
    <>
      <Title>Add new product</Title>
      <Container>
        <Stepper steps={newProductStepper} onStep={onStep} />
        <ProductC>
          {onStep === 1 && <SelectCategory />}
          {onStep === 2 && <ProductDescription />}
        </ProductC>
        <FooterComponent
          id={findCurrentStep?.id || 0}
          key={findCurrentStep?.id || 0}
          step={findCurrentStep?.step || 0}
          description={findCurrentStep?.description || "no description"}
        >
          {onStep !== 1 && <Button onClick={handlePrevStep}>Prev Step</Button>}
          {onStep === maxStep && <Button onClick={handleSave}>Save</Button>}
          {onStep < maxStep && (
            <Button onClick={handleNextStep}>Next Step</Button>
          )}
        </FooterComponent>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ProductC = styled.div`
  ${BoxStyle}
  flex:1;
  border-radius: 0;
`;

export default New;
