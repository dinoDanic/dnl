import { useMutation } from "@apollo/client";
import { FooterComponent, Form, Stepper } from "components/elements";
import { Button } from "components/inputs";
import { CreateProduct, SelectCategory } from "components/pages";
import { BoxStyle, Title } from "components/ui";
import { CREATE_PRODUCT } from "modules/api";
import { useState } from "react";
import { newProductStepper, productsFooterSteps } from "registration";
import styled from "styled-components";
import { Product } from "types";

const New = () => {
  return (
    <>
      <Title>Add new product</Title>
      <Container>
        <Stepper steps={newProductStepper} onStep={1} />
        <ProductC>
          <CreateProduct />
        </ProductC>
        <FooterComponent
          id={1}
          step={1}
          description={productsFooterSteps[0].description}
        />
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
