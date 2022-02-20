import Link from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { IconC, ModuleC, Name } from "./styles";

type RenderModuleProps = {
  Icon: IconType;
  name: string;
  link: string;
};

export const RenderModule: React.FC<RenderModuleProps> = ({
  Icon,
  name,
  link,
}) => {
  const { route } = useRouter();
  return (
    <Link href={`${route}/${link}`} passHref>
      <ModuleC>
        <IconC>
          <Icon size={60} />
        </IconC>
        <Name>{name}</Name>
      </ModuleC>
    </Link>
  );
};
