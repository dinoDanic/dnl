import Link from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { IconC, ModuleC, Name } from "./styles";

type ModuleProps = {
  Icon: IconType;
  name: String;
};

export const Module: React.FC<ModuleProps> = ({ Icon, name }) => {
  const { route } = useRouter();
  return (
    <Link href={`${route}/${name}`} passHref>
      <ModuleC>
        <IconC>
          <Icon size={60} />
        </IconC>
        <Name>{name}</Name>
      </ModuleC>
    </Link>
  );
};
