import { mainModules } from "modules/register";
import { Module } from "shared/ui";
import styled from "styled-components";

const Modules = () => {
  return (
    <ModulesC>
      {mainModules.map((module) => {
        const { id, Icon, name } = module;
        return <Module name={name} Icon={Icon} key={id} />;
      })}
    </ModulesC>
  );
};

const ModulesC = styled.div`
  display: flex;
`;

export default Modules;
