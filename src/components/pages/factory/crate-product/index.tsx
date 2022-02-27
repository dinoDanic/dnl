import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/client";
import { Form, InsertPopup } from "components/elements";
import { Button, Dropdown, Input, Textarea } from "components/inputs";
import { CREATE_CATEGORY, CREATE_PRODUCT, GET_CATEGORIES } from "modules/api";
import { ICategory, Product, SelectOption } from "types";
import { Flex } from "components/ui";

type Props = {};

export const CreateProduct: React.FC<Props> = ({}) => {
  const { data } = useQuery(GET_CATEGORIES);
  const [createCategory, { loading }] = useMutation(CREATE_CATEGORY);

  const [insertPopup, setInsertPopup] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [createProduct, setCreateProduct] = useState<Product>({
    name: null,
    code: null,
    ean: null,
    weight: null,
    dimensionA: null,
    dimensionB: null,
    dimensionC: null,
    description: null,
    categoryId: null,
  });

  const [createProductMutation] = useMutation(CREATE_PRODUCT, {
    variables: {
      input: createProduct,
    },
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

  const handleProductInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateProduct({
      ...createProduct,
      [name]: value,
    });
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCreateProduct({
      ...createProduct,
      description: e.target.value,
    });
  };

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProductMutation();
  };

  const handleDropdown = (option: SelectOption) => {
    setCreateProduct({ ...createProduct, categoryId: option.id });
  };

  useEffect(() => {
    if (!data) return;
    const { categories } = data;
    setCategories(categories);
  }, [data]);

  return (
    <>
      <Form onSubmit={handleForm}>
        <Flex flexDirection="column" justifyContent="space-between">
          <Header>
            <Input
              onChange={(e) => handleProductInput(e)}
              required
              name="code"
              label="Code"
              placeholder="Code"
            />
            <Input
              onChange={(e) => handleProductInput(e)}
              required
              name="name"
              label="Porduct title"
              placeholder="Product title"
            />
            <Input
              onChange={(e) => handleProductInput(e)}
              type="number"
              name="ean"
              label="EAN code"
              placeholder="EAN code"
            />
            <Input
              onChange={(e) => handleProductInput(e)}
              name="weight"
              label="Weight"
              placeholder="120 kg"
              type="number"
            />
            <Dropdown
              onButtonClick={() => setInsertPopup(true)}
              onChange={(option: SelectOption) => handleDropdown(option)}
              options={categories}
              label="Category"
              placeholder="Select category"
            />
            <Textarea
              name="description"
              onChange={(e) => handleTextarea(e)}
              label="Product description"
            />
          </Header>
          <Footer>
            <Flex justifyContent="flex-end">
              <Button>Create</Button>
            </Flex>
          </Footer>
        </Flex>
      </Form>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: ${({ theme }) => theme.sizes.margin.lg};
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;

const Footer = styled.div``;
