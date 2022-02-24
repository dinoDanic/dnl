import { RenderModulesList } from "components/elements";
import { factoryModules } from "registration";

const Factory: React.FC = () => {
  return <RenderModulesList moduleList={factoryModules} />;
};

export default Factory;
