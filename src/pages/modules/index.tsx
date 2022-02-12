import React from "react";
import { moduleList } from "./list";
import { IconC, Name, Module, ModulesC } from "./styles";

const Modules = () => {
  return (
    <ModulesC>
      {moduleList.map((module) => {
        const { id, Icon, name } = module;
        return (
          <Module key={id}>
            <IconC>
              <Icon size={60} />
            </IconC>
            <Name>{name}</Name>
          </Module>
        );
      })}
    </ModulesC>
  );
};

export default Modules;
