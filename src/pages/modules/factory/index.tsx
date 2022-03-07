import { RenderModulesList } from "components/elements";
import { factoryModules } from "registration";

const Factory: React.FC = () => {
  return <RenderModulesList moduleList={factoryModules} />;
};
export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Factory;
