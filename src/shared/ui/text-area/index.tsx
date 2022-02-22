import React from "react";
import styled from "styled-components";
import { defaultInputStyle } from "styles/input";
import { Label } from "..";

interface Props {
  label?: string;
}

export const Textarea: React.FC<Props> = ({ label }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextareaStyle placeholder="Product descirption" />
    </>
  );
};

const TextareaStyle = styled.textarea`
  ${defaultInputStyle}
  min-width: 100%;
  max-width: 100%;
  max-height: 200px;
  min-height: 40px;
`;
