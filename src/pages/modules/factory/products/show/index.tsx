import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "modules/api";
import React, { useState } from "react";
import { ProductType } from "types/product";

const Show = () => {
  const { data, loading } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState(data?.products || []);

  if (loading) return "loading..";

  return (
    <>
      {data?.products.map((product: ProductType) => {
        const { id, name, code } = product;
        return (
          <div key={id}>
            <div>{code}</div>
            <div>{name}</div>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Show;
