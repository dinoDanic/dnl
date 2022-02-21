import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "modules/api";
import { useState } from "react";
import { FooterComponent, Stepper } from "shared/components";
import { newProductStepper, productsFooterSteps } from "registration";
import { Box, BoxStyle, Button, Form, Input, Title } from "shared/ui";
import styled from "styled-components";

const New = () => {
  const [onStep, setOnStep] = useState(0);
  const findCurrentStep = productsFooterSteps.find((s) => s.step == onStep);
  const maxStep = productsFooterSteps.length;

  const handlePrevStep = () => {
    setOnStep(onStep !== 0 ? onStep - 1 : onStep);
  };

  const handleNextStep = () => {
    setOnStep(onStep + 1);
  };

  const handleSave = () => {};

  return (
    <>
      <Title>Add new product</Title>
      <Stepper steps={newProductStepper} onStep={onStep} />
      <ProductC>
        <h4>Select Category</h4>
      </ProductC>
      <FooterComponent
        id={findCurrentStep?.id || 0}
        key={findCurrentStep?.id || 0}
        step={findCurrentStep?.step || 0}
        description={findCurrentStep?.description || "no description"}
      >
        {onStep !== 0 && <Button onClick={handlePrevStep}>Prev Step</Button>}
        {onStep === maxStep && <Button onClick={handleSave}>Save</Button>}
        {onStep < maxStep && (
          <Button onClick={handleNextStep}>Next Step</Button>
        )}
      </FooterComponent>
    </>
  );
};
const ProductC = styled.div`
  ${BoxStyle}
  border-radius: 0;
  button {
    margin-left: 10px;
  }
`;

export default New;
{
  /* <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            placeholder="code"
            label="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Input
            placeholder="product name"
            label="product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="EAN"
            label="EAN"
            value={ean}
            onChange={(e) => setEan(e.target.value)}
          />
          <Input
            type="number"
            placeholder="weight"
            label="weight"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
          <Button>Send</Button>
        </Form> */
}
/* const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!code || !name) {
    alert("Empty");
    return;
  }
  await createProduct();
  alert("created");
  setName("");
  setCode("");
};
 */
/*   const [createProduct] = useMutation(CREATE_PRODUCT, {
    variables: {
      input: {
        code,
        name,
        weight,
        eanCode: ean,
      },
    },
  }); */

/*   const [code, setCode] = useState("");
  const [name, setName] = useState("");
    const [weight, setWeight] = useState<number>(0);
  const [ean, setEan] = useState(""); */
