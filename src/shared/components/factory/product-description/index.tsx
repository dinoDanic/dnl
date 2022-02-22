import React from "react";
import { Input, Textarea } from "shared/ui";
import styled from "styled-components";

export const ProductDescription = () => {
  return (
    <>
      <Header>
        <Input label="Code" placeholder="Code" />
        <Input label="Porduct title" placeholder="Product title" />
        <Input label="EAN code" placeholder="EAN code" />
        <Input label="Weight" placeholder="120 kg" type="number" />
        <Input label="Dimensions (cm)" placeholder="120 x 120 x 30 cm" />
        <Input label="Porduct title" placeholder="Product title" />
      </Header>
      <Textarea label="Product description" />
    </>
  );
};

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: ${({ theme }) => theme.sizes.margin.lg};
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;
