import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "modules/api";
import { ProductType } from "types/product";

const Show = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return "loading..";
  if (error) return error.message;

  return (
    <>
      {data?.products.map((product: ProductType) => {
        const { id, name, code, ean, weight } = product;
        return (
          <div key={id}>
            <div>{code}</div>
            <div>{name}</div>
            <div>{ean}</div>
            <div>{weight}</div>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Show;
