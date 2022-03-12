import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { InsertPopup, SelectFromMap } from "components/elements";
import { Button } from "components/inputs";
import { CREATE_CATEGORY, GET_CATEGORIES } from "modules/api";
import styled from "styled-components";
import { ICategory } from "types";

interface SelectCategoryProps {}

export const SelectCategory: React.FC<SelectCategoryProps> = ({}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isInsertPopup, setIsInsertPopup] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { data } = useQuery(GET_CATEGORIES);
  const [createCategory] = useMutation(CREATE_CATEGORY);

  const handleCreateCategory = async (value: string) => {
    setIsInsertPopup(false);
    const response = await createCategory({
      variables: { input: { name: value } },
    });
    if (response) {
      const { createCategory } = response.data;
      setCategories(createCategory);
    }
  };

  useEffect(() => {
    if (!data) return;
    const { categories } = data;
    const changeCategories = categories.map((c: ICategory) => {
      return {
        id: c.id,
        value: c.name,
      };
    });
    setCategories(changeCategories);
  }, [data]);

  return (
    <>
      <Container>
        <Header>
          {categories.map((category) => {
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
