import React, { useState } from "react";
import { SelectFromMap } from "shared/components";
import { Button, SubTitle, Input, Dropdown } from "shared/ui";
import styled from "styled-components";
import { SelectOption } from "types";

interface SelectCategoryProps {}

export const SelectCategory: React.FC<SelectCategoryProps> = ({}) => {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);

  const mock: SelectOption[] = [
    { id: 0, value: "ok" },
    { id: 1, value: "ok2" },
  ];
  return (
    <Container>
      <Header>
        {mock.map((category) => {
          return <SelectFromMap option={category} key={category.id} />;
        })}
      </Header>
      <Footer>
        <Actions>
          <Button>Add Category</Button>
        </Actions>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Actions = styled.div`
  bottom: 0px;
  right: 0px;
`;
