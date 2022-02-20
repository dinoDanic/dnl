import { useMutation, useQuery } from "@apollo/client";
import { productsModules } from "modules-registration";
import { CREATE_PRODUCT, GET_PRODUCTS } from "modules/api";
import React, { useEffect, useState } from "react";
import { RenderModulesList } from "shared/components";
import styled from "styled-components";
import { productType } from "types/product";

const Products = () => {
  const { data, loading } = useQuery(GET_PRODUCTS);

  const [products, setProducts] = useState<productType[]>([]);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    variables: {
      input: {
        name,
        code,
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || !name) {
      alert("empty");
      return;
    }
    const response = await createProduct();
    setCode("");
    setName("");
    setProducts([...products, response.data.createProduct.product]);
  };

  useEffect(() => {
    setProducts(data?.products || []);
  }, [data]);

  if (loading) return "loading...";

  return <RenderModulesList moduleList={productsModules} />;
};

export default Products;
