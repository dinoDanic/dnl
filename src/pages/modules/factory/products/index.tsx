import { productsModules } from "registration";
import { RenderModulesList } from "shared/components";

const Products = () => {
  return <RenderModulesList moduleList={productsModules} />;
};

export default Products;
