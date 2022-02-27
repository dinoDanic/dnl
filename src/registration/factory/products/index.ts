import { FcAddImage, FcStackOfPhotos } from "react-icons/fc";
import { ModuleType } from "types/module";
import { FooterComponentProps, StepperType } from "types";

export const productsModules: ModuleType[] = [
  { name: "add product", Icon: FcAddImage, id: 0, link: "new" },
  { name: "show products", Icon: FcStackOfPhotos, id: 1, link: "show" },
];

export const productsFooterSteps: FooterComponentProps[] = [
  { id: 0, step: 1, description: "Choose a Product" },
];

export const newProductStepper: StepperType[] = [
  { id: 0, step: 1, name: "Product description" },
];
