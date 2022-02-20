import { useRouter } from "next/router";
import { MenuBarC, Ul } from "./styles";
import { menuLinks } from "./menu-links";
import MenuItem from "./menu-item/MenuItem";

const MenuBar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <MenuBarC>
      <Ul>
        {menuLinks.map((item) => {
          const { id, name } = item;
          return <MenuItem key={id} name={name} pathname={pathname} />;
        })}
      </Ul>
    </MenuBarC>
  );
};

export default MenuBar;
