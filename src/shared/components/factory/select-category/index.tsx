import { InsertPopup } from "components";
import React, { useState } from "react";
import { SelectFromMap } from "shared/components";
import { Button, SubTitle, Input, Dropdown } from "shared/ui";
import styled from "styled-components";
import { SelectOption } from "types";

interface SelectCategoryProps {}

export const SelectCategory: React.FC<SelectCategoryProps> = ({}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isInsertPopup, setIsInsertPopup] = useState<boolean>(false);

  const mock: SelectOption[] = [
    { id: 0, value: "ok" },
    { id: 1, value: "ok2" },
  ];

  const handleCreateCategory = (value: string) => {
    setIsInsertPopup(false);
  };

  return (
    <>
      <Container>
        <Header>
          {mock.map((category) => {
            const isSelected = category.id === selectedId;
            return (
              <SelectFromMap
                isSelected={isSelected}
                option={category}
                key={category.id}
                onClick={(id) => setSelectedId(id)}
              />
            );
          })}
        </Header>
        <Footer>
          <Actions>
            <Button onClick={() => setIsInsertPopup(true)}>Add Category</Button>
          </Actions>
        </Footer>
      </Container>
      <InsertPopup
        title="Add Category"
        isActive={isInsertPopup}
        setIsActive={setIsInsertPopup}
        onSubmit={(value: string) => handleCreateCategory(value)}
      />
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
