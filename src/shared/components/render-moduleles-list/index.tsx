import { RenderModule } from "shared/ui";
import styled from "styled-components";
import { ModuleType } from "types/module";

type ModulesListProps = {
  moduleList: ModuleType[];
};

export const RenderModulesList: React.FC<ModulesListProps> = ({
  moduleList,
}) => {
  return (
    <ModuleListC>
      {moduleList.map((module) => {
        const { id, Icon, name, link } = module;
        return <RenderModule name={name} Icon={Icon} key={id} link={link} />;
      })}
    </ModuleListC>
  );
};

const ModuleListC = styled.div`
  display: flex;
`;
