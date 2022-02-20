import { FcAddImage, FcStackOfPhotos } from "react-icons/fc";
import { ModuleType } from "types/module";

export const productsModules: ModuleType[] = [
  { name: "add product", Icon: FcAddImage, id: 0, link: "new" },
  { name: "show products", Icon: FcStackOfPhotos, id: 1, link: "show" },
];
