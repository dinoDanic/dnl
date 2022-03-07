import { RenderModulesList } from "components/elements";
import { mainModules } from "registration";

const Modules = () => {
  return <RenderModulesList moduleList={mainModules} />;
};

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Modules;
