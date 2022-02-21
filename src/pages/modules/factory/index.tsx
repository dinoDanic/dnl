import { factoryModules } from "registration";
import { RenderModulesList } from "shared/components";

const Factory: React.FC = () => {
  return <RenderModulesList moduleList={factoryModules} />;
};

export default Factory;
