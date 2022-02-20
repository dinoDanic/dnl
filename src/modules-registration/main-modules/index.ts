import { FcMoneyTransfer, FcSurvey, FcFactory } from "react-icons/fc";
import { ModuleType } from "types/module";

export const mainModules: ModuleType[] = [
  { name: "orders", Icon: FcSurvey, id: 0, link: "orders" },
  { name: "factory", Icon: FcFactory, id: 1, link: "factory" },
  { name: "obracun", Icon: FcMoneyTransfer, id: 2, link: "obracnu" },
];
