import { RenderModulesList } from "components/elements";
import { mainModules } from "registration";

const Modules = () => {
  return <RenderModulesList moduleList={mainModules} />;
};

export default Modules;
