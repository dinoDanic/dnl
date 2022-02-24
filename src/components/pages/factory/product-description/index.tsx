import { useMutation, useQuery } from "@apollo/client";
import { InsertPopup } from "components/elements";
import { Dropdown, Input, Textarea } from "components/inputs";
import { CREATE_CATEGORY, GET_CATEGORIES } from "modules/api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ICategory, SelectOption } from "types";

export const ProductDescription = () => {
  const { data } = useQuery(GET_CATEGORIES);
  const [createCategory] = useMutation(CREATE_CATEGORY);

  const [insertPopup, setInsertPopup] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<SelectOption>({
    name: "",
    id: null,
  });

  const createNewCategory = async (value: string) => {
    const response = await createCategory({
      variables: { input: { name: value } },
    });
    if (response) {
      const { createCategory } = response.data;
      setCategories([...categories, createCategory]);
    }
    setInsertPopup(false);
  };

  useEffect(() => {
    if (!data) return;
    const { categories } = data;
    setCategories(categories);
  }, [data]);

  return (
    <>
      <Header>
        <Input label="Code" placeholder="Code" />
        <Input label="Porduct title" placeholder="Product title" />
        <Input label="EAN code" placeholder="EAN code" />
        <Input label="Weight" placeholder="120 kg" type="number" />
        <Input label="Dimensions (cm)" placeholder="120 x 120 x 30 cm" />
        <Dropdown
          onButtonClick={() => setInsertPopup(true)}
          onChange={(opion: SelectOption) => setCurrentCategory(opion)}
          options={categories}
          label="Category"
          placeholder="Select category"
        />
      </Header>
      <Textarea label="Product description" />
      <InsertPopup
        isActive={insertPopup}
        title="Create new category"
        setIsActive={setInsertPopup}
        onSubmit={(value: string) => createNewCategory(value)}
      />
    </>
  );
};

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: ${({ theme }) => theme.sizes.margin.lg};
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;
