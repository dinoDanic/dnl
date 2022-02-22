import React from "react";
import { Box } from "shared/ui";
import styled from "styled-components";
import { SelectOption } from "types";

interface Props {
  option: SelectOption;
}

export const SelectFromMap: React.FC<Props> = ({ option }) => {
  return (
    <Container>
      <Box>{option.value}</Box>
    </Container>
  );
};

const Container = styled.div``;
