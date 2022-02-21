import { FcAddImage, FcStackOfPhotos } from "react-icons/fc";
import { ModuleType } from "types/module";
import { FooterComponentProps, StepperType } from "types";

export const productsModules: ModuleType[] = [
  { name: "add product", Icon: FcAddImage, id: 0, link: "new" },
  { name: "show products", Icon: FcStackOfPhotos, id: 1, link: "show" },
];

export const productsFooterSteps: FooterComponentProps[] = [
  { id: 0, step: 0, description: "Choose a Category" },
  { id: 1, step: 1, description: "Choose a Product" },
  { id: 2, step: 2, description: "Select Pricing and Images" },
];

export const newProductStepper: StepperType[] = [
  { id: 0, step: 0, name: "Category" },
  { id: 1, step: 1, name: "Product description" },
  { id: 2, step: 2, name: "Pricing and images" },
];
