import { RenderModulesList } from "components/elements";
import { productsModules } from "registration";

const Products = () => {
  return <RenderModulesList moduleList={productsModules} />;
};

export default Products;
