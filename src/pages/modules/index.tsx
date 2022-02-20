import { mainModules } from "modules-registration";
import { RenderModulesList } from "shared/components";

const Modules = () => {
  return <RenderModulesList moduleList={mainModules} />;
};

export default Modules;
