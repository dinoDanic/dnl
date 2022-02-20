import Link from "next/link";
import { useRouter } from "next/router";
import { Module } from "shared/ui";
import { modules } from "./modules";
import { ModulesC } from "./styles";

const Modules = () => {
  return (
    <ModulesC>
      {modules.map((module) => {
        const { id, Icon, name } = module;
        return <Module name={name} Icon={Icon} key={id} />;
      })}
    </ModulesC>
  );
};

export default Modules;
