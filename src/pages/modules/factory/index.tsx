import { Module } from "shared/ui";
import styled from "styled-components";
import { factoryModules } from "./modules";

const Factory: React.FC = () => {
  return (
    <FactoryC>
      {factoryModules.map((module) => {
        const { name, Icon, id } = module;
        return <Module key={id} name={name} Icon={Icon} />;
      })}
    </FactoryC>
  );
};

const FactoryC = styled.div`
  display: flex;
`;

export default Factory;
